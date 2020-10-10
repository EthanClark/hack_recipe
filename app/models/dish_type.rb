class DishType < ApplicationRecord
  belongs_to :cuisine
  has_many :recipes, dependent: :destroy
end
