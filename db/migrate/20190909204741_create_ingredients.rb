class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.text :text, array: true, default: []
      t.integer :weight, array: true, default: []

      t.timestamps
    end
  end
end
