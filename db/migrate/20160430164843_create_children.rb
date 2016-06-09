class CreateChildren < ActiveRecord::Migration
  def change
    create_table :children do |t|
      t.string :last_name
      t.string :first_name
      t.date :birthdate
      t.string :allergies
      t.string :classroom
      t.integer :bully_rating
      t.integer :ouch_rating

      t.timestamps null: false
    end
  end
end
