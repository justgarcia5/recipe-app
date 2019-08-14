class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.text :label
      t.string :source
      t.text :totalDaily
      t.text :totalNutrients
      t.integer :totalWeight
      t.string :url
      t.text :digest, array: true, default: []
      t.string :calories
      t.text :cautions, array: true, default: []
      t.text :dietLabels, array: true, default: []
      t.text :healthLabels, array: true, default: []
      t.string :image
      t.text :ingredients, array: true, default: []
      t.boolean :favorites

      t.timestamps
    end
  end
end
