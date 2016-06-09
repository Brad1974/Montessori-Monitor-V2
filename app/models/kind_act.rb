class KindAct < ActiveRecord::Base
  belongs_to :giver, :class_name => 'Child'
  belongs_to :recipient, :class_name => 'Child'
  belongs_to :daily_report
end
