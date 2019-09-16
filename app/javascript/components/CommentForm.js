import React, { useEffect, useState } from 'react'


function CommentForm(props) {
  // console.log(props.comments)
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('')

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea
          type="text"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CommentForm;
