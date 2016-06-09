class RemoveColumnsFromChildren < ActiveRecord::Migration
  def change
    remove_column :children, :kind_acts_performed, :integer
    remove_column :children, :kind_acts_received, :integer
  end
end
