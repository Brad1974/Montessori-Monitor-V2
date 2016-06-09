class AddColumnsToChildren < ActiveRecord::Migration
  def change
    add_column :children, :bully_rating, :integer, default: 0
    add_column :children, :ouch_rating, :integer, default: 0
  end
end
