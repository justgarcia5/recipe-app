class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :username
      t.text :body

      t.timestamps
    end
  end
end
