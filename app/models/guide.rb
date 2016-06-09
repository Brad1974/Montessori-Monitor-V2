class Guide < ActiveRecord::Base
  has_many :observations
  has_many :daily_reports, through: :observations
  has_many :children, through: :daily_reports
end
