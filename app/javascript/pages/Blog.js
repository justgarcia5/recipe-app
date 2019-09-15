import React from 'react'

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
        <h1>Blog</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <br/>
          <input
            value={this.state.post.title}
            onChange={this.handleChange}
            type="input"
            name="title"
            />
          <br/>
          <label htmlFor="blog">Blog:</label>
          <br/>
          <textarea
            value={this.state.post.body}
            onChange={this.handleChange}
            type="textarea"
            name="body"
          />
          <button type="submit">Submit</button>
        </form>
        <hr/>
        <div>
          { this.state.posts.map((post, index) => {
              return(
                <div key={index}>
                  <h3>{post.title}</h3>
                  <p><i>by</i> <b>{post.username}</b></p>
                  <p>{post.body}</p>
                  <p>{post.created_at}</p>
                  <hr/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Blog;
