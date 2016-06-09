class ChangeColumnsInChildren < ActiveRecord::Migration
  def change
    remove_column :children, :bully_rating
    remove_column :children, :ouch_rating
  end
end
