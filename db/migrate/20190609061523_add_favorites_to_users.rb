class AddFavoritesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :favorites, :boolean
  end
end
