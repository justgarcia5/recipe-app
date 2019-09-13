json.extract! recipe, :id, :recipe_id, :user_id, :comment
json.url recipe_url(recipe, format: :json)
