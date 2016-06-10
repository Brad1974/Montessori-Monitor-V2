class ObservationSerializer < ActiveModel::Serializer
  attributes :id, :content, :daily_report_id, :guide_id, :child_id
  has_one :child
  has_one :guide

end
