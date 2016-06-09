class CreateObservations < ActiveRecord::Migration
  def change
    create_table :observations do |t|
      t.text :content
      t.integer :daily_report_id
      t.integer :guide_id

      t.timestamps null: false
    end
  end
end
