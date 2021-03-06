class ChildrenController < ApplicationController
before_action :authenticate_user!#, except: [:index]
  def index
    @children = Child.all.collect {|c| [c.first_name, c.last_name, c.id]}

    # render json: @children
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @children }
    end
  end

  def newindex
    render :allononepage
  end

  def show
    @child = Child.find(params[:id])
    # render json: @child
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @child }
    end
  end

  def post_data
    child = Child.find(params[:id])
    render json: child.to_json
  end

  def new
    @child = Child.new
  end

  def create
    @child = Child.new(child_params)
    if @child.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @child = Child.find(params[:id])
  end

  def update
    @child = Child.find(params[:id])
    if @child.update(child_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @child = Child.find(params[:id])
    @child.daily_reports.destroy_all
    @child.destroy
    # redirect_to root_path
    render json: @child
end

  private

  def child_params
    params.require(:child).permit(:first_name, :last_name, :birthdate, :allergies, :diapers_inventory)
  end

end
