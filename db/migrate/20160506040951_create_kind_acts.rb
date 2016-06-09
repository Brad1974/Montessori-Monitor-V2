class CreateKindActs < ActiveRecord::Migration
  def change
    create_table :kind_acts do |t|
      t.text :act
      t.integer :giver_id
      t.integer :recipient_id

      t.timestamps null: false
    end
  end
end
