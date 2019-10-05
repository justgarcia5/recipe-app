import React from 'react'

import Errors from '../Errors'

class CommentForm extends React.Component {
  state= {
    comment: {
      body: '',
      username: '',
    },
    responseOk: false,
    errors: null,
  }

  componentDidMount = () => {
    this.setState({
      comment: {
        body: '',
        username: this.props.username,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { comment } = this.state
    fetch(`/posts/${this.props.postId}/comments.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment: comment })
    }).then((response) => {
      return response.json().then((json) => {
        if(response.status === 201) {
          this.setState({ responseOk: true })
        } else {
          this.setState({ responseOk: false, errors: json })
        }
        return json
      })
    }).catch((errors) => this.setState({ responseOk: false, errors: {"System Error": ["Unknown problem has occurred"]}})
    )
  }

  handleChange = (event) => {
    let { comment } = this.state
    comment[event.target.name] = event.target.value
    this.setState({ comment: comment })
  }

  render() {
    let { responseOk, errors, comment  } = this.state
    // console.log(this.props.currentUser)
    return (
      <div>
        {responseOk && this.props.refreshPage()}
        <Errors
          errors={errors}
        />
        <form onSubmit={this.handleSubmit} className='comment-form'>
          <label>Comment:</label>
          <textarea
            type="text"
            value={comment.body}
            onChange={this.handleChange}
            name='body'
            className='form-control'
          />
          <br/>
          <div>
            <button className='btn btn-success' type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
