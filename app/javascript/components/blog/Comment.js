import React, { useState, useEffect } from 'react';
// import axios from'axios';

import CommentForm from './CommentForm';

function Comment(props) {
  const [comments, setComments] = useState({ comments: [] });
  const [errors, setErrors] = useState({ errors: [] });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/comments.json");
      // console.log(res)
      res
        .json()
        .then(res => setComments(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return(
    <div>
      <CommentForm
        comments={comments}
        postId={props.postId}
        username={props.username}
      />
      {/* {comments.map((comment) => {
        return(
          <div>
            <p><i>by</i> {comment.username}</p>
            <p>{comment.body}</p>
          </div>
        )
      })

      } */}
    </div>
  )
}

export default Comment;
