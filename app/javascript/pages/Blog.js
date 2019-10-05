import React from 'react'

import BlogForm from '../components/blog/BlogForm'
import BlogCard from '../components/blog/BlogCard'

class Blog extends React.Component {
  state = {
    posts: [],
    addBlog: false,
    addComment: false,
  }

  componentDidMount = () => {
    fetch(`/posts.json`)
    .then((response) => response.json())
    .then((posts) => {
      let postId = posts.map((post) => post.id)
      this.setState({ posts: posts, postId: postId })
    })
    .catch((errors) => console.log(errors))
  }

  newBlogForm = () => {
    this.setState({ addBlog: true })
  }

  newCommentForm = () => {
    this.setState({ addComment: true })
  }

  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    let { addBlog, posts, postId, addComment } = this.state

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
            username={this.props.currentUser.username}
            postId={postId}
            currentUser={this.props.currentUser}
            newCommentForm={this.newCommentForm}
            addComment={addComment}
            refreshPage={this.refreshPage}
          />
        </div>
      </div>
    )
  }
}

export default Blog;
