import React from 'react'

import BlogForm from '../components/blog/BlogForm'
import BlogCard from '../components/blog/BlogCard'

class Blog extends React.Component {
  state = {
    posts: [],
    addBlog: false,
    addComment: false,
    postIds: [],
    whichComment: false
  }

  componentDidMount = () => {
    fetch(`/posts.json`)
    .then((response) => response.json())
    .then((posts) => {
      let post_id = posts.map((post) => post.id)
      this.setState({ posts: posts, postIds: post_id })
    })
    .catch((errors) => console.log(errors))
  }

  newBlogForm = () => {
    this.setState({ addBlog: true })
  }

  newCommentForm = (id) => {
    this.setState({ addComment: true })
  }

  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    let { addBlog, posts, postIds, addComment } = this.state
    return(
      <div>
        <div className='blog-div'>
          <h1 className='blog-page-title'>Kitchen Blogs</h1>
          {addBlog &&
          <div>
            <BlogForm
              currentUser={this.props.currentUser}
              refreshPage={this.refreshPage}
            />
          </div>
          }
          {!addBlog &&
          <div className='new-blog-button-div'>
            <button className='btn btn-primary' onClick={this.newBlogForm}>New Blog</button>
          </div>
          }
        </div>
        <div>
          <BlogCard
            posts={posts}
            postIds={postIds}
            username={this.props.currentUser.username}
            currentUser={this.props.currentUser}
            newCommentForm={this.newCommentForm}
            addComment={addComment}
            refreshPage={this.refreshPage}
            commentSelector={this.commentSelector}
          />
        </div>
      </div>
    )
  }
}

export default Blog;
