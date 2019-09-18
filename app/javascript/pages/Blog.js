import React from 'react'

import BlogForm from '../components/blog/BlogForm'
import BlogCard from '../components/blog/BlogCard'

class Blog extends React.Component {
  state = {
    post: {
      title: '',
      body: '',
      username: this.props.currentUser.username,
    },
    posts: [],
    addBlog: false,
    postId: [],
  }

  handleSubmit = (e) => {
    let { post } = this.state
    fetch(`/posts.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: post })
    }).then((response) => response.json())
      .then((post) => post)
      .catch((errors) => console.log(errors))
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

  handleChange = (event) => {
    let { post } = this.state
    post[event.target.name] = event.target.value
    this.setState({ post: post })
  }

  render() {
    // console.log(this.props)
    return(
      <div>
        <div className='blog-div'>
          <BlogForm
            handleSubmit={this.handleSubmit}
            post={this.state.post}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <BlogCard
            posts={this.state.posts}
            username={this.props.currentUser.username}
            postId={this.state.postId}
            currentUser={this.props.currentUser}
          />
        </div>
      </div>
    )
  }
}

export default Blog;
