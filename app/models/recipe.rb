class Recipe < ApplicationRecord
  belongs_to :dish_type
  has_many :ingredients, dependent: :destroy
  has_many :special_equipments, dependent: :destroy
end
