class Observation < ActiveRecord::Base
  validates :guide_name, presence: {message: " -- You must enter in a guide name"}
  validates :content, presence: {message: " -- You must fill out the Observation content box"}
  #validate :guide_name_present
  belongs_to :daily_report
  belongs_to :guide

  def guide_name
    self.guide.name if guide
  end
end
