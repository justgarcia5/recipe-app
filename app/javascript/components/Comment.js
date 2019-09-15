import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentForm from './CommentForm';

function Comment(props) {
  const [comments, setData] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/comments.json`,
      );
      setData(result.comments);
    };
    fetchData();
  }, []);

  return(
    <div>
      <CommentForm
        comments={comments}
        postId={props.postId}
        username={props.username}
      />
    </div>
  )
}

export default Comment;
