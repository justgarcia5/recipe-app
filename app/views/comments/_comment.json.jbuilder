json.extract! comment, :id, :post_id, :body, :created_at, :username
json.url post_url(comment, format: :json)
