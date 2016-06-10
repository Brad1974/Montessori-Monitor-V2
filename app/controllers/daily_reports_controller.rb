class DailyReportsController < ApplicationController
  before_action :set_child

  def index
    @daily_reports = @child.daily_reports
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @daily_reports }
    end
  end

  def show
    @daily_report = @child.daily_reports.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @daily_report}
    end
  end

  def new
    @daily_report = @child.daily_reports.build
    @observations = @daily_report.observations.build(child_id: @child.id)
    @kind_acts = @daily_report.kind_acts.build(giver_id: @child.id)
  end

  def create
    @daily_report = @child.daily_reports.build(daily_report_params)
    if @daily_report.save
      @child.update_child_stats(@daily_report)
      redirect_to child_path(@child)
    else
      render :new
    end
  end


  private

  def daily_report_params
    params.require(:daily_report).permit(:date, :wet_diapers, :poopy_diapers, :bullying_incident, :bullying_report, :ouch_incident, :ouch_report, observations_attributes: [:content, :guide_name], kind_acts_attributes: [:act, :giver_id, :recipient_id, :daily_report_id])
  end

  def set_child
    @child = Child.find(params[:child_id])
  end
end
