class Api::IngredientsController < ApplicationController
  before_action :set_recipe

  def index
    render json: @recipe.ingredients
  end

  def create
    ingredients = @recipe.ingredients.new(ingredients_params)
    if ingredients.save
      render json: ingredients
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end

  def update
    ingredients = @recipe.ingredients.find(params[:id])
    if ingredients.update
      render json: ingredients
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe.ingredients.find(params[:id]).destroy
    render json: { message: 'Ingredients deleted' }
  end

  private
    def set_recipe
    @recipe = Recipe.find(params[:recipe_id]) 
    end

    def ingredients_params
      params.require(:ingredients).permit(:name, :sun_amount)
    end
end
