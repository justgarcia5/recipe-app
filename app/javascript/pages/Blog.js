import React from 'react'

class Blog extends React.Component {
  state = {
    comment: '',
    comments: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { comment } = this.state
    fetch(`/reviews.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    }).then((response) => response.json())
      .then((comment) => comment)
      .catch((errors) => {
        console.log(errors)
      })
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
        <form onClick={this.handleSubmit}>
          <textarea value={this.state.comment} onChange={this.inputHandler}/>
          <button type="submit">Submit</button>
        </form>
        <div>
          { this.state.comments.map((comment, index) => {
              return(
                <div key={index}>
                  {/* <h5>{this.props.currentUser.username}</h5> */}
                  <p>{comment.comment}</p>
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
