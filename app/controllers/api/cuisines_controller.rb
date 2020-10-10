class Api::CuisinesController < ApplicationController

  def index
    render json: Cuisine.all
  end

  def create
    cuisine = Cuisine.new(cuisine_params)
    if cuisine.save
      render json: cuisine
    else 
      binding.pry
      render json: { errors: cuisine.errors }, status: :unprocessable_entity
    end
  end

  def update
    cuisine = Cuisine.find(params[:id])
    if cuisine.update(cuisine_params)
      render json: cuisine
    else
      render json: { errors: cuisine.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Cuisine.find(params[:id]).destroy
    render json: { message: 'Cuisine deleted' }
  end

  private
    def cuisine_params
      params.require(:cuisine).permit(:cName, :user_id)
    end
end
