class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.text :text
      t.integer :weight

      t.timestamps
    end
  end
end
