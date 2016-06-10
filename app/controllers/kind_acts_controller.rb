class KindActsController < ApplicationController

  def index
    @kind_acts = KindAct.all
    render json: @kind_acts
    # respond_to do |format|
    #   format.html { render :index }
    #   format.json { render json: @kind_acts }
    # end
  end

  def show
    @kind_act = KindAct.find(params[:id])
    render json: @kind_act
    # respond_to do |format|
    #   format.html { render :show }
    #   format.json { render json: @kind_act}
    # end
  end

end
