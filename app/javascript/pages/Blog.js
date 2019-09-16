import React from 'react'

import BlogForm from '../components/BlogForm'
import BlogCard from '../components/BlogCard'

class Blog extends React.Component {
  state = {
    post: {
      title: '',
      body: '',
      username: this.props.currentUser.username,
    },
    posts: [],
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
    .then((posts) => this.setState({ posts: posts }))
    .catch((errors) => console.log(errors))
  }

  handleChange = (event) => {
    let { post } = this.state
    post[event.target.name] = event.target.value
    this.setState({ post: post })
  }

  render() {

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
          />
        </div>
      </div>
    )
  }
}

export default Blog;
