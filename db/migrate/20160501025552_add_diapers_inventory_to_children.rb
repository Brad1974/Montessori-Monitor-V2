class AddDiapersInventoryToChildren < ActiveRecord::Migration
  def change
    add_column :children, :diapers_inventory, :integer
  end
end
