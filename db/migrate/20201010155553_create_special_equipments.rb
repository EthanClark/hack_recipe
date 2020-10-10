class CreateSpecialEquipments < ActiveRecord::Migration[6.0]
  def change
    create_table :special_equipments do |t|
      t.string :eName
      t.string :eQuantity
      t.string :aEquip
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
