json.extract! recipe, :id, :label, :calories, :image, :source, :url, :totalWeight
json.url recipe_url(recipe, format: :json)
