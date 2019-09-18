import React from 'react'

const BlogForm = props => {
  return(
    <div>
      <h1 className='blog-page-title'>Blog</h1>
        <form onSubmit={props.handleSubmit} className='blog-form'>
          <label htmlFor="title">Title:</label>
          <br/>
          <input
            value={props.post.title}
            onChange={props.handleChange}
            type="input"
            name="title"
            />
          <br/>
          <label htmlFor="blog">Blog:</label>
          <br/>
          <textarea
            value={props.post.body}
            onChange={props.handleChange}
            type="textarea"
            name="body"
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default BlogForm;
