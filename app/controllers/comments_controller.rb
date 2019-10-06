class CommentsController < ApplicationController
  before_action :set_comment, only: [:destroy]
  skip_before_action :verify_authenticity_token

  def index
    # @post = Post.find(params[:post_id])
    # @comments = @post.comments.all
    @comments = Comment.all
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.build(comment_params)

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comments }
        format.json { render :index, status: :created, location: @comments }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:username, :body)
  end
end
