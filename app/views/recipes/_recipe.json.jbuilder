json.extract! recipe, :id, :label, :calories, :image, :source, :url, :totalWeight, :user_id
json.url recipe_url(recipe, format: :json)
