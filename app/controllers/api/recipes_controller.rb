class Api::RecipesController < ApplicationController
before_action :set_dish_type

  def index
    render json: @dish_type.recipes
  end

  def create
    recipe = @dish_type.recipes.new(recipe_params)
    if recipe.save
      render json: recipe
    else
      render json: { errors: recipe.errors }, status: :unprocessable_entity
    end
  end

  def update
    recipe = @dish_type.recipes.find(params[:id])
    if recipe.update
      render json: recipe
    else
      render json: { errors: recipe.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @dish_types.recipes.find(params[:id]).destroy
    render json: { message: 'Recipe deleted' }
  end

  private

    def set_dish_type
      @dish_type = Dish_type.find(params[:dish_type_id])

    def recipe_params
      params.require(:recipes).permit(:rName, :image, :servingSize, :cookTime, :instructions, :difficulty)
    end
end


