class CreateDishTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :dish_types do |t|
      t.string :dName
      t.belongs_to :cuisine, null: false, foreign_key: true

      t.timestamps
    end
  end
end
