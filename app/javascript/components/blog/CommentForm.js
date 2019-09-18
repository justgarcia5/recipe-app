import React, { useEffect, useState } from 'react'


// function CommentForm(props) {
//   // console.log(props.comments)
//   const [body, setBody] = useState('');
//   const [username, setUsername] = useState('')

//   const handleSubmit = () => {

//   }

class CommentForm extends React.Component {
  state= {
    comment: {
      body: '',
      username: '',
      post_id: null
    }
  }

  componentDidMount = () => {
    this.setState({
      comment: {
        body: '',
        username: this.props.username,
        post_id: this.props.postId
      }
    })
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    let { comment } = this.state
    fetch(`/users/${this.props.currentUser.id}/posts/${this.props.postId}/comments.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    }).then((res) => res.json())
    .then((comment) => comment)
    .catch((errors) => console.log(errors))
  }

  handleChange = (event) => {
    let { comment } = this.state
    comment[event.target.name] = event.target.value
    this.setState({ comment: comment })
  }

  render() {
    // console.log(this.props.currentUser)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <textarea
            type="text"
            value={this.state.comment.body}
            onChange={this.handleChange}
            name='body'
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CommentForm;
