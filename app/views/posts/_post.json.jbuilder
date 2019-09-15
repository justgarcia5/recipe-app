json.extract! post, :id, :user_id, :title, :body, :created_at, :username
json.url post_url(post, format: :json)
