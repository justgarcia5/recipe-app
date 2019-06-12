class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def new
    @user = User.new
  end

  def show
  end

  def create
    @user = User.create(user_params)
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to "/"
    else
      render @user.errors
    end
  end

  def destroy
    @user.destroy
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
