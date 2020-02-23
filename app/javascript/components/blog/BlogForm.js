import React, { useState } from "react";

import Errors from "../../components/Errors";

const BlogForm = props => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    username: props.currentUser.username,
    user_id: props.currentUser.id
  });
  const [errors, setErrors] = useState(null);
  const [responseOk, setResponseOk] = useState(false);
  const [addBlog, setAddBlog] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/posts.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: post })
    })
      .then(response => {
        return response.json().then(json => {
          if (response.status === 201) {
            setResponseOk(true);
            setAddBlog(false);
          } else {
            setResponseOk(false);
            setErrors(json);
            setAddBlog(true);
          }
          return json;
        });
      })
      .catch(errors => {
        setResponseOk(false);
        setErrors({ "System Error": ["Unknown problem has occurred"] });
      });
  };

  return (
    <div>
      {responseOk && props.refreshPage()}
      <Errors errors={errors} />
      <form onSubmit={handleSubmit} className="blog-form">
        <label htmlFor="title">Title:</label>
        <br />
        <input
          onChange={event => {
            const newTitle = event.target.value;
            setPost(prevState => {
              return { ...prevState, title: newTitle };
            });
          }}
          type="input"
          name="title"
          className="form-control"
        />
        <br />
        <label htmlFor="blog">Blog:</label>
        <br />
        <textarea
          onChange={event => {
            const newBody = event.target.value;
            setPost(prevState => {
              return { ...prevState, body: newBody };
            });
          }}
          type="textarea"
          name="body"
          className="form-control"
        />
        <br />
        <div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
