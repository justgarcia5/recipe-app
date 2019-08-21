json.extract! recipe, :id, :favorites, :label, :calories, :image, :source, :url, :totalWeight, :cautions , :dietLabels, :healthLabels, :totalDaily , :totalNutrients, :digest, :user_id, :ingredients
json.url recipe_url(recipe, format: :json)
