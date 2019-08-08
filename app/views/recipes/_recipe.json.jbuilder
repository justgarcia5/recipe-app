json.extract! recipe, :label, :calories, :image, :source, :url, :totalWeight, :cautions , :dietLabels, :healthLabels, :ingredients, :totalDaily , :totalNutrients, :digest
json.url recipe_url(recipe, format: :json)
