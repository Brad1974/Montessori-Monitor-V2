class CreateDailyReports < ActiveRecord::Migration
  def change
    create_table :daily_reports do |t|
      t.date :date
      t.integer :poopy_diapers
      t.integer :wet_diapers
      t.text :bullying_report
      t.text :ouch_report
      t.timestamps null: false
    end
  end
end
