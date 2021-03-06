import React, { useState, useEffect } from "react";

import CommentCard from "./CommentCard";
import CommentForm from "../blog/CommentForm";

const BlogCard = props => {
  const [commentPostId, setCommentPostID] = useState([]);

  useEffect(() => {
    fetch(`/posts/${props.postId}/comments.json`)
      .then(res => res.json())
      .then(comments => {
        let filteredCommentId = comments.map(comment => comment.post_id);
        setCommentPostID(filteredCommentId);
      });
  }, []);

  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <div key={index} className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="page-header">{post.title}</h2>
                <section className="comment-list"></section>
                <article className="row">
                  <div className="col-md-2 col-sm-2 hidden-xs">
                    <figure className="thumbnail">
                      <img
                        className="img-responsive"
                        src="http://www.tangoflooring.ca/wp-content/uploads/2015/07/user-avatar-placeholder.png"
                      />
                      <figcaption className="text-center">
                        {post.username}
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-10 col-sm-10">
                    <div className="panel panel-default arrow left">
                      <div className="panel-body">
                        <header className="text-left">
                          <div className="comment-user">
                            <i className="fa fa-user"></i> {post.username}
                          </div>
                          <time className="comment-date">
                            <i className="fa fa-clock-o"></i> {post.created_at}
                          </time>
                        </header>
                        <br />
                        <div className="comment-post">
                          <p>{post.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <CommentCard
              username={props.username}
              postId={post.id}
              postUsername={post.username}
              refreshPage={props.refreshPage}
              addComment={props.addComment}
              newCommentForm={props.newCommentForm}
            />
            <CommentForm
              username={props.username}
              postId={post.id}
              currentUser={props.currentUser}
              refreshPage={props.refreshPage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
