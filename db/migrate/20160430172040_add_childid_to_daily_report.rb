class AddChildidToDailyReport < ActiveRecord::Migration
  def change
    add_column :daily_reports, :child_id, :integer
  end
end
