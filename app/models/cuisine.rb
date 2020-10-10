class Cuisine < ApplicationRecord
  belongs_to :user
  has_many :dish_types, dependent: :destroy
end
