import React from 'react'

import Comment from '../blog/Comment'

const BlogCard = props => {
  return(
    <div>
      { props.posts.map((post, index) => {
          return(
            <div key={index} className='blog-cards'>
              <h3>{post.title}</h3>
              <p><i>by</i> <b>{post.username}</b> <i>on</i> <b>{post.created_at}</b></p>
              <p>{post.body}</p>
              <p></p>
              <Comment
                postId={post.id}
                username={props.username}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default BlogCard
