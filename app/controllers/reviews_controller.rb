class ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    @review = current_user.reviews.build(review_params)

    respond_to do |format|
      if @review.save
        format.html { redirect_to @review }
        format.json { render :index, status: :created, location: @review }
      else
        format.html { render :new }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def review_params
    params.require(:review).permit(:comment, :username)
  end


end
