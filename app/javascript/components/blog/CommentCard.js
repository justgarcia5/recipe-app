import React from "react";

class CommentCard extends React.Component {
  state = {
    comments: []
  };

  componentDidMount = () => {
    fetch(`/posts/${this.props.postId}/comments.json`)
      .then(res => res.json())
      .then(comments => {
        this.setState({ comments: comments });
      });
  };

  render() {
    // console.log(this.props.username)
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          if (this.props.postId === comment.post_id) {
            return (
              <div key={index}>
                <article className="row">
                  <div className="col-md-2 col-sm-2 col-md-offset-1 col-sm-offset-0 hidden-xs">
                    <figure className="thumbnail">
                      <img
                        className="img-responsive"
                        src="http://www.tangoflooring.ca/wp-content/uploads/2015/07/user-avatar-placeholder.png"
                      />
                      <figcaption className="text-center">
                        {comment.username}
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-9 col-sm-9">
                    <div className="panel panel-default arrow left">
                      <div className="panel-body">
                        <header className="text-left">
                          <div className="comment-user">
                            <i className="fa fa-user"></i> {comment.username}
                          </div>
                          <time className="comment-date">
                            <i className="fa fa-clock-o"></i>{" "}
                            {comment.created_at}
                          </time>
                        </header>
                        <br />
                        <div className="comment-post">
                          <p>{comment.body}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default CommentCard;
