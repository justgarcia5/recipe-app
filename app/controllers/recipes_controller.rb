class RecipesController < ApplicationController
  skip_before_action :verify_authenticity_token


  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.create(recipe_params)
  end

  private

  def recipe_params
    params.permit(recipe: [
      :calories,
      :cautions,
      :dietLabels,
      :healthLabels,
      :image,
      :ingredients,
      :label,
      :source,
      :totalDaily,
      :totalNutrients,
      :totalWeight,
      :url,
      :digest
    ])
    .require(:recipe)
  end

end
