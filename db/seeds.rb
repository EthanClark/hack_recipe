5.times do
  cuisine = Cusine.create(
    cName: Faker::Demographic.demonym,
    user_id: 1
  )
  5.times do
    dish = Dish_type.create(
      dName: Test
      cusine_id: cuisine.id
    )
    5.times do
      recipe = Recipe.create(
        rName = Faker::dish
        image = "none"
        servingSize = Faker::Number.between(from: 1, to: 12)
        cookTime = Faker::Number.between(from: 15, to: 120) 
        instructions = Faker::Food.description
        difficulty = Faker::Number.between(from: 1, to: 10)
        dish_id: dish.id
      )
      5.times do
        ingredient = Ingredient.create(
          iName = Faker::Food.ingredient
          amount = Faker::Number.between(from: 1, to: 6)
          measurement = Faker::Food.metric_measurement
          recipe_id: recipe.id
        )
      end
      5.times do
        special_equipment = Special_equipment.create(
          eName = Faker::Games::DnD.melee_weapon
          eQuantity = Faker::Number.between(from: 1, to: 4)
          aEquip = Faker::Games::DnD.ranged_weapon
          recipe_id: recipe.id
        )
      end
    end
  end
end

puts "Data Seeded"