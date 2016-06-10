class DailyReportSerializer < ActiveModel::Serializer
  attributes :id, :child_id, :poopy_diapers, :wet_diapers
  has_many :kind_acts
  has_many :observations
  #, :bullying_incident, :bullying_report, :ouch_incident, :ouch_report
end
