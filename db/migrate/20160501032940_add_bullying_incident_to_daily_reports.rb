class AddBullyingIncidentToDailyReports < ActiveRecord::Migration
  def change
    add_column :daily_reports, :bullying_incident, :boolean, default: false
  end
end
