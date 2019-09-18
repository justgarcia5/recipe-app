import React from 'react'

import Comment2 from '../blog/Comment2'

const BlogCard = props => {
  // console.log(props.postId)
  return(
    <div>
      <div>
        { props.posts.map((post, index) => {
            return(
              <div key={index} className='blog-cards'>
                <h3>{post.title}</h3>
                <p><i>by</i> <b>{post.username}</b> <i>on</i> <b>{post.created_at}</b></p>
                <p>{post.body}</p>
                <div>
                  <Comment2
                    postId={post.id}
                    username={props.username}
                    currentUser={props.currentUser}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BlogCard
