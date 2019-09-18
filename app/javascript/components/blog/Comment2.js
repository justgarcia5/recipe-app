import React, { useState, useEffect } from 'react';
import axios from'axios';

import CommentForm from './CommentForm';

class Comment2 extends React.Component {
  state = {
    comments: [],
  }

  componentDidMount = () => {
    fetch(`/users/${this.props.currentUser.id}/posts/${this.props.postId}/comments.json`)
    .then((res) => res.json())
    .then((comments) => {
      this.setState({ comments: comments})
    })
  }

  render() {
    // console.log(this.props.postId)
    return(
      <div>
        <p><b>comments:</b></p>
        {
          this.state.comments.map((comment, index) => {
            if(this.props.postId === comment.post_id) {
              return(
                <div key={index}>
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
