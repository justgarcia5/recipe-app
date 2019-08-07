class RecipesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.create(recipe_params)
    # if @recipe.save
    #   format.html { redirect_to @recipe, notice: 'Question was successfully created.' }
    #   format.json { render :show, status: :created, location: @recipe }
    # end
  end

  private

  def recipe_params
    params.permit(recipe: [
      :calories,
      :image,
      :label,
      :source,
      :url,
      :totalWeight,
      :cautions => [],
      :dietLabels => [],
      :healthLabels => [],
      :ingredients => [],
      :totalDaily => [
        :ENERC_KCAL => [:label, :quantity, :unit],
        :FAT => [:label, :quantity, :unit],
        :FASAT => [:label, :quantity, :unit],
        :CHOCDF => [:label, :quantity, :unit],
        :FIBTG => [:label, :quantity, :unit],
        :PROCNT => [:label, :quantity, :unit],
        :CHOLE => [:label, :quantity, :unit],
        :NA => [:label, :quantity, :unit],
        :CA => [:label, :quantity, :unit],
        :MG => [:label, :quantity, :unit],
        :K => [:label, :quantity, :unit],
        :FE => [:label, :quantity, :unit],
        :ZN => [:label, :quantity, :unit],
        :P => [:label, :quantity, :unit],
        :VITA_RAE => [:label, :quantity, :unit],
        :VITC => [:label, :quantity, :unit],
        :THIA => [:label, :quantity, :unit],
        :RIBF => [:label, :quantity, :unit],
        :NIA => [:label, :quantity, :unit],
        :VITB6A => [:label, :quantity, :unit],
        :FOLDFE => [:label, :quantity, :unit],
        :VITB12 => [:label, :quantity, :unit],
        :VITD => [:label, :quantity, :unit],
        :TOCPHA => [:label, :quantity, :unit],
        :VITK1 => [:label, :quantity, :unit]
      ],
      :totalNutrients => [
        :ENERC_KCAL => [:label, :quantity, :unit],
        :FAT => [:label, :quantity, :unit],
        :FASAT => [:label, :quantity, :unit],
        :CHOCDF => [:label, :quantity, :unit],
        :FIBTG => [:label, :quantity, :unit],
        :PROCNT => [:label, :quantity, :unit],
        :CHOLE => [:label, :quantity, :unit],
        :NA => [:label, :quantity, :unit],
        :CA => [:label, :quantity, :unit],
        :MG => [:label, :quantity, :unit],
        :K => [:label, :quantity, :unit],
        :FE => [:label, :quantity, :unit],
        :ZN => [:label, :quantity, :unit],
        :P => [:label, :quantity, :unit],
        :VITA_RAE => [:label, :quantity, :unit],
        :VITC => [:label, :quantity, :unit],
        :THIA => [:label, :quantity, :unit],
        :RIBF => [:label, :quantity, :unit],
        :NIA => [:label, :quantity, :unit],
        :VITB6A => [:label, :quantity, :unit],
        :FOLDFE => [:label, :quantity, :unit],
        :VITB12 => [:label, :quantity, :unit],
        :VITD => [:label, :quantity, :unit],
        :TOCPHA => [:label, :quantity, :unit],
        :VITK1 => [:label, :quantity, :unit],
        :FATRN => [:label, :quantity, :unit],
        :FAMS => [:label, :quantity, :unit],
        :FAPU => [:label, :quantity, :unit],
        :SUGAR => [:label, :quantity, :unit],
        :FOLFD => [:label, :quantity, :unit]
      ],
      :digest => [:label, :tag, :schemaOrgTag, :total, :hasRDI, :daily, :unit, :sub => [:label, :tag, :schemaOrgTag, :daily, :hasRDI, :unit, :total]]
    ])
    .require(:recipe)
  end

end
