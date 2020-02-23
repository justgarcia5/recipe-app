import React, { useState, useEffect } from "react";

import BlogForm from "../components/blog/BlogForm";
import BlogCard from "../components/blog/BlogCard";

const Blog = props => {
  const [posts, setPosts] = useState([]);
  const [addBlog, setAddBlog] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [postIds, setPostIds] = useState([]);

  useEffect(() => {
    fetch(`/posts.json`)
      .then(response => response.json())
      .then(posts => {
        let post_id = posts.map(post => post.id);
        setPosts(posts);
        setPostIds(post_id);
      })
      .catch(errors => console.log(errors));
  }, []);

  const newBlogForm = () => {
    this.setState({ addBlog: true });
  };

  const newCommentForm = id => {
    this.setState({ addComment: true });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <div className="blog-div">
        <h1 className="blog-page-title">Kitchen Blogs</h1>
        {addBlog && (
          <div>
            <BlogForm
              currentUser={props.currentUser}
              refreshPage={refreshPage}
            />
          </div>
        )}
        {!addBlog && (
          <div className="new-blog-button-div">
            <button className="btn btn-primary" onClick={newBlogForm}>
              New Blog
            </button>
          </div>
        )}
      </div>
      <div>
        <BlogCard
          posts={posts}
          postIds={postIds}
          username={props.currentUser.username}
          currentUser={props.currentUser}
          newCommentForm={newCommentForm}
          addComment={addComment}
          refreshPage={refreshPage}
        />
      </div>
    </div>
  );
};

export default Blog;
