class IngredientsController < ApplicationController
  before_action :set_ingredient, only: [:destroy]
  skip_before_action :verify_authenticity_token

  def index
    @ingredients = Ingredient.all
  end

  def new
    @ingredient = Ingredient.new
  end

  def create
    @recipe = current_user.recipes.new
    @ingredient = @recipe.ingredients.new(ingredient_params)

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

  def destroy
    @ingredient.destroy

    respond_to do |format|
      format.html { redirect_to @ingredient }
      format.json { head :no_content }
    end
  end

  private

  def set_ingredient
    @ingredient = Ingredient.find(params[:id])
  end

  def ingredient_params
    params.require(:ingredient).permit(:text, :weight)
  end

end
