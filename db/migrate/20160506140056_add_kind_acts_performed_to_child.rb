class AddKindActsPerformedToChild < ActiveRecord::Migration
  def change
    add_column :children, :kind_acts_performed, :integer, default: 0
  end
end
