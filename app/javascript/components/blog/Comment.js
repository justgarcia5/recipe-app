import React, { useState, useEffect } from 'react';
import axios from'axios';

import CommentForm from './CommentForm';

function Comment(props) {
  const [data, setData] = useState({ comments: [] });
  const [errors, setErrors] = useState({ errors: [] });
  const [number, setNumber] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/comments.json',
      );
      // console.log(result.data)
      setData(result.data);
      setErrors(result.errors);
    }
    fetchData();
    console.log(data)

  }, []);

  // const numberUp = () => {
  //   setNumber(number+3)
  //   console.log(number)
  // }

  return(
    <div>
      <span>{JSON.stringify(data)}</span>
      {/* <p onClick={numberUp}>Click Me</p>
      <p>{number}</p> */}
      {/* {data.comments.map((comment, value) => {
        return(
          <div key={value}>
            <p>{comment.body}</p>
          </div>
        )
      })} */}
      <p></p>
      <CommentForm
        comments={data.comments}
        postId={props.postId}
        username={props.username}
      />
      {/* <ul>
        {
          data.comments.map((comment, value) => {
            return (
              <li key={value}>
                {comment.body}
              </li>
            )
          })
        }
      </ul> */}
    </div>
  )
}

export default Comment;
