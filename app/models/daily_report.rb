class DailyReport < ActiveRecord::Base
  validate :bullying_data_consistent
  validate :ouch_data_consistent
  validate :not_future_date
  validate :unique_date


  belongs_to :child
  has_many :observations
  has_many :kind_acts, :class_name => 'KindAct'
  has_many :gifts, :class_name => 'KindAct'

  def unique_date
    if self.child.daily_reports.find {|d| d.date == date && d.id != nil}
      errors.add(:date, "Looks like you already submitted a report for this date.")
    end
  end

  def bullying_data_consistent
    if bullying_incident == true && bullying_report == ""
      errors.add(:bullying_report, " -- If you clicked that there was bullying today, you must fill out a bullying report")
    elsif bullying_incident == false && bullying_report != ""
      errors.add(:bullying_report, " -- If you filled out a bullying report, you need to check the box for bullying too")
    end
  end

  def ouch_data_consistent
    if ouch_incident == true && ouch_report == ""
      errors.add(:ouch_report, " -- If you clicked that there was an ouch incident today, you must fill out an ouch report")
    elsif ouch_incident == false && ouch_report != ""
      errors.add(:ouch_report, " -- If you filled out an ouch report, you need to check the box for ouches too")
    end
  end

  def not_future_date
    if date > Date.today
      errors.add(:date, "-- You can't write a report for a future date")
    end
  end

  def observations_attributes=(attributes)
    attributes.each do |index, observation_hash|
      self.observations.build(child_id: observation_hash[:child_id], content: observation_hash[:content], guide: Guide.find_or_create_by(name: observation_hash[:guide_name]))
    end
  end

  def kind_acts_attributes=(attributes)
    if attributes["0"]["act"].length > 0
      attributes.each do |index, kind_act_hash|
        self.kind_acts.build(kind_act_hash)
      end
    end
  end

  def total_daily_diapers
    wet_diapers + poopy_diapers
  end

  def bullying_today
    self.bullying_incident ? 1 : 0
  end

  def ouches_today
    self.ouch_incident ? 1 : 0
  end


end
