json.extract! recipe, :id, :favorites, :label, :calories, :image, :source, :url, :totalWeight, :cautions , :dietLabels, :healthLabels, :ingredients, :totalDaily , :totalNutrients, :digest, :user_id
json.url recipe_url(recipe, format: :json)
