class Api::SpecialEquipmentsController < ApplicationController
  before_action :set_recipe

  def index
    render json: @recipe.special_equipments
  end

  def create
    special_equipment = @recipe.special_equipments.new(special_equipment_params) 
    if special_equipment.save
      render json: special_equipment
    else
      render json: { errors: special_equipment.errors }, status: :unprocessable_entity
    end
  end

  def update
    special_equipment = @recipe.special_equipments.find(params[:id])
    if special_equipment.update
      render json: special_equipment
    else
      render json: { errors: special_equipment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe.special_equipments.find(params[:id]).destroy
    render json: { message: 'Special Equipment Deleted'}
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end

  def special_equipment_params
    params.require(:specialEquipments).permit(:eName, :eQuantity, :aEquip)
  end

end
