json.extract! review, :id, :user_id, :comment
json.url recipe_url(review, format: :json)
