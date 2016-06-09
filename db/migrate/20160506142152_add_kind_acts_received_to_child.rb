class AddKindActsReceivedToChild < ActiveRecord::Migration
  def change
    add_column :children, :kind_acts_received, :integer, default: 0
  end
end
