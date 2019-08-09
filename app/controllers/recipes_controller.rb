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
      format.html { redirect_to recipess_url, notice: 'Tool was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(
      :label,
      :calories,
      :image,
      :source,
      :url,
      :totalWeight,
      cautions: [],
      dietLabels: [],
      healthLabels: [:key1, :key2],
      ingredients: [:text, :weight],
      totalDaily: {
        ENERC_KCAL: [:label, :quantity, :unit],
        FAT: [:label, :quantity, :unit],
        FASAT: [:label, :quantity, :unit],
        CHOCDF: [:label, :quantity, :unit],
        FIBTG: [:label, :quantity, :unit],
        PROCNT: [:label, :quantity, :unit],
        CHOLE: [:label, :quantity, :unit],
        NA: [:label, :quantity, :unit],
        CA: [:label, :quantity, :unit],
        MG: [:label, :quantity, :unit],
        K: [:label, :quantity, :unit],
        FE: [:label, :quantity, :unit],
        ZN: [:label, :quantity, :unit],
        P: [:label, :quantity, :unit],
        VITA_RAE: [:label, :quantity, :unit],
        VITC: [:label, :quantity, :unit],
        THIA: [:label, :quantity, :unit],
        RIBF: [:label, :quantity, :unit],
        NIA: [:label, :quantity, :unit],
        VITB6A: [:label, :quantity, :unit],
        FOLDFE: [:label, :quantity, :unit],
        VITB12: [:label, :quantity, :unit],
        VITD: [:label, :quantity, :unit],
        TOCPHA: [:label, :quantity, :unit],
        VITK1: [:label, :quantity, :unit]
      },
      totalNutrients: {
        ENERC_KCAL: [:label, :quantity, :unit],
        FAT: [:label, :quantity, :unit],
        FASAT: [:label, :quantity, :unit],
        CHOCDF: [:label, :quantity, :unit],
        FIBTG: [:label, :quantity, :unit],
        PROCNT: [:label, :quantity, :unit],
        CHOLE: [:label, :quantity, :unit],
        NA: [:label, :quantity, :unit],
        CA: [:label, :quantity, :unit],
        MG: [:label, :quantity, :unit],
        K: [:label, :quantity, :unit],
        FE: [:label, :quantity, :unit],
        ZN: [:label, :quantity, :unit],
        P: [:label, :quantity, :unit],
        VITA_RAE: [:label, :quantity, :unit],
        VITC: [:label, :quantity, :unit],
        THIA: [:label, :quantity, :unit],
        RIBF: [:label, :quantity, :unit],
        NIA: [:label, :quantity, :unit],
        VITB6A: [:label, :quantity, :unit],
        FOLDFE: [:label, :quantity, :unit],
        VITB12: [:label, :quantity, :unit],
        VITD: [:label, :quantity, :unit],
        TOCPHA: [:label, :quantity, :unit],
        VITK1: [:label, :quantity, :unit],
        FATRN: [:label, :quantity, :unit],
        FAMS: [:label, :quantity, :unit],
        FAPU: [:label, :quantity, :unit],
        SUGAR: [:label, :quantity, :unit],
        FOLFD: [:label, :quantity, :unit]
      },
      digest: [:label, :tag, :schemaOrgTag, :total, :hasRDI, :daily, :unit, sub: [:label, :tag, :schemaOrgTag, :daily, :hasRDI, :unit, :total]]
    )
  end

end
