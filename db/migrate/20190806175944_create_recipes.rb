class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.text :label
      t.string :source
      t.integer :totalWeight
      t.string :url
      t.string :calories
      t.string :image

      t.timestamps
    end
  end
end
