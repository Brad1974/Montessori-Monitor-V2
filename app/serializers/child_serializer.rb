class ChildSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :first_name, :birthdate, :allergies, :classroom, :bully_rating, :ouch_rating, :diapers_inventory
  has_many :kind_acts
  has_many :observations
  has_many :daily_reports
end
