class KindActSerializer < ActiveModel::Serializer
  attributes :id, :recipient_id, :giver_id, :act, :daily_report_id
  has_one :giver
  has_one :recipient
end
