class ObservationsController < ApplicationController

  def index
    @observations = Observation.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @observations }
    end
  end

  def show
    @observation = Observation.find(params[:id])
    render json: @observation
    # respond_to do |format|
    #   format.html { render :show }
    #   format.json { render json: @observation}
    # end
  end

end
