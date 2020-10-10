class Api::DishTypesController < ApplicationController
  before_action :set_cuisine

  def index
    render json: @cuisine.dish_types
  end

  def create
    dish_type = @cuisine.dish_types.new(dish_type_params)
    if dish_type.save
      render json: dish_type
    else
      render json: { errors: dish_type.errors }, status: :unprocessable_entity
    end
  end

  def update 
    dish_type = @cuisine.dish_types.find(params[:id])
    if dish_type.update
      render json: dish_type
    else
      render json: { errors: dish_type.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @cuisine.dish_types.find(params[:id]).destroy
    render json: { message: 'Dish Type Deleted'}
  end

  private

  def set_cuisine
    @cuisine = Cuisine.find(params[:cuisine_id])
  end

  def dish_type_params
    params.require(:dishType).permit(:dName)
  end

end
