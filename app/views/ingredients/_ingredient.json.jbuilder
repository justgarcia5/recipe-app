json.extract! ingredient, :id, :text, :weight, :recipe_id
json.url recipe_url(ingredient, format: :json)
