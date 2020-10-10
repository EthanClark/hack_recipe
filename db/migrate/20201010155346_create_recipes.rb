class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :rName
      t.string :image
      t.string :servingSize
      t.string :cookTime
      t.string :instructions
      t.string :difficulty
      t.belongs_to :dish_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
