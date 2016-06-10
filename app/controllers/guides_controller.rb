class GuidesController < ApplicationController

  def index
    @guides = Guide.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @guides }
    end
  end

  def show
    @guide = Guide.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @guide}
    end
  end

end
