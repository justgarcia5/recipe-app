json.extract! review, :id, :user_id, :comment, :created_at, :username
json.url recipe_url(review, format: :json)
