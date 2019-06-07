class PagesController < ApplicationController
  before_action :authenticate_user!, only: :protected

  def index
  end

end
