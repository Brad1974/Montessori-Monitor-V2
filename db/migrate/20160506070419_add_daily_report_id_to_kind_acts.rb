class AddDailyReportIdToKindActs < ActiveRecord::Migration
  def change
    add_column :kind_acts, :daily_report_id, :integer
  end
end
