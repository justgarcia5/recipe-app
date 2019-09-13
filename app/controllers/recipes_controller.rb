class RecipesController < ApplicationController
  before_action :set_recipe, only: [:destroy, :show]
  skip_before_action :verify_authenticity_token

  def index
    @recipes = current_user.recipes.all
  end

  def show
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = current_user.recipes.build(recipe_params)

    respond_to do |format|
      if @recipe.save
        format.html { redirect_to @recipe }
        format.json { render :index, status: :created, location: @recipe }
      else
        format.html { render :new }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @recipe.destroy

    respond_to do |format|
      format.html { redirect_to @recipe, notice: 'Recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(
      :favorites,
      :label,
      :calories,
      :image,
      :source,
      :url,
      :totalWeight
    )
  end

end
