import React from 'react'

import Errors from '../../components/Errors'

class BlogForm extends React.Component {
  state = {
    post: {
      title: '',
      body: '',
      username: this.props.currentUser.username,
    },
    postId: [],
    errors: null,
    responseOk: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { post } = this.state
    fetch(`/posts.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: post })
    }).then((response) => {
      return response.json().then((json) => {
        if(response.status === 201) {
          this.setState({ responseOk: true, addBlog: false })
        } else {
          this.setState({ responseOk: false, errors: json, addBlog: true })
        }
        return json
      })
    }).catch((errors) => this.setState({ responseOk: false, errors: {"System Error": ["Unknown problem has occurred"]}})
    )
  }

  handleChange = (event) => {
    let { post } = this.state
    post[event.target.name] = event.target.value
    this.setState({ post: post })
  }

  render() {
    let { responseOk, errors, post } = this.state

    return(
      <div>
        {responseOk && this.props.refreshPage()}
        <Errors
          errors={errors}
        />
        <form onSubmit={this.handleSubmit.bind(this)} className='blog-form'>
          <label htmlFor="title">Title:</label>
          <br/>
          <input
            value={post.title}
            onChange={this.handleChange}
            type="input"
            name="title"
            className="form-control"
            />
          <br/>
          <label htmlFor="blog">Blog:</label>
          <br/>
          <textarea
            value={post.body}
            onChange={this.handleChange}
            type="textarea"
            name="body"
            className="form-control"
          />
          <br/>
          <div>
            <button className='btn btn-success' type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BlogForm;
