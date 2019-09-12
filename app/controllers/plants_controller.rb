class PlantsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Plant.all
  end

  def show
      render json: Plant.find(params["id"])
  end

  def create
      render json: Plant.create(params["plant"])
  end

  def delete
    render json: Plant.delete(params["id"])
  end

  def update
    render json: Plant.update(params["id"], params["plant"])
  end
end
