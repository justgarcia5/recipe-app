import React from 'react';

import CommentForm from './CommentForm';

class Comment2 extends React.Component {
  state = {
    comments: [],
  }

  componentDidMount = () => {
    fetch(`/comments.json`)
    .then((res) => res.json())
    .then((comments) => {
      this.setState({ comments: comments})
    })
  }

  render() {
    console.log(this.state.comments)
    return(
      <div>
        <p><b>comments:</b></p>
        {
          this.state.comments.map((comment, index) => {
            if(this.props.postId === comment.post_id) {
              return(
                <div key={index}>
                  <p><i>by</i><b> {comment.username}</b></p>
                  <p>{comment.body}</p>
                </div>
              )
            }
          })
        }
        <CommentForm
          username={this.props.username}
          postId={this.props.postId}
          currentUser={this.props.currentUser}
        />
      </div>
    )
  }
}

export default Comment2;
