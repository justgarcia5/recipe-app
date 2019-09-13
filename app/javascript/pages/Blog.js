import React from 'react'

class Blog extends React.Component {
  state = {
    comment: '',
    comments: [],
    username: this.props.currentUser.username,
    usernames: ''
  }

  handleSubmit = (e) => {
    let { comment, username } = this.state
    fetch(`/reviews.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment, username: username })
    }).then((response) => response.json())
      .then((comment) => comment)
      .catch((errors) => {
        console.log(errors)
      })
    this.setState({ comment: '' })
  }

  componentDidMount = () => {
    fetch(`/reviews.json`)
    .then((response) => response.json())
    .then((comments) => {
      console.log(comments)
      this.setState({ comments: comments })
    })
  }

  inputHandler = (e) => {
    this.setState({  comment: e.target.value })
  }

  render() {

    return(
      <div>
        <h1>Blog</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea value={this.state.comment} onChange={this.inputHandler.bind(this)}/>
          <button type="submit">Submit</button>
        </form>
        <div>
          { this.state.comments.map((comment, index) => {
              return(
                <div key={index}>
                  <h3>{comment.username}</h3>
                  <p>{comment.comment}</p>
                  <p>{comment.created_at}</p>
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
