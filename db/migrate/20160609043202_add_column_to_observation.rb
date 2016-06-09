class AddColumnToObservation < ActiveRecord::Migration
  def change
    add_column :observations, :child_id, :integer
  end
end
