class IngredientsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @ingredient = Ingredient.new
  end

  def create
    @ingredient = Ingredient.create(ingredient_params)

    respond_to do |format|
      if @ingredient.save
        format.html { redirect_to @ingredient }
        format.json { render :index, status: :created, location: @ingredient }
      else
        format.html { render :new }
        format.json { render json: @ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def ingredient_params
    params.require(:ingredient).permit(:text, :weight)
  end

end
