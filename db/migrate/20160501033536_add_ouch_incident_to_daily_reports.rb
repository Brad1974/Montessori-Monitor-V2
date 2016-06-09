class AddOuchIncidentToDailyReports < ActiveRecord::Migration
  def change
    add_column :daily_reports, :ouch_incident, :boolean, default: false
  end
end
