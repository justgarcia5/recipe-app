class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.text :label, array: true, default: []
      t.string :source
      t.text :totalDaily, array: true, default: []
      t.text :totalNutrients, array: true, default: []
      t.integer :totalWeight
      t.string :url
      t.text :digest, array: true, default: []
      t.string :calories
      t.text :cautions, array: true, default: []
      t.text :dietLabels, array: true, default: []
      t.text :healthLabels, array: true, default: []
      t.string :image
      t.text :ingregients, array: true, default: []

      t.timestamps
    end
  end
end
