class GuideSerializer < ActiveModel::Serializer
  attributes :id, :name
  # has_many :observations
end
