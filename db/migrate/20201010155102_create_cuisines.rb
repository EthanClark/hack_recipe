class CreateCuisines < ActiveRecord::Migration[6.0]
  def change
    create_table :cuisines do |t|
      t.string :cName
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
