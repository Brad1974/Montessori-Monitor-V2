class Child < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :allergies, presence: true
  validate :proper_age
  validates :diapers_inventory, numericality: { only_integer: true, message: "requires a number"}

  has_many :daily_reports
  has_many :observations, through: :daily_reports
  has_many :guides, through: :observations
  has_many :kind_acts, :class_name => KindAct, :foreign_key => 'giver_id'
  has_many :gifts, :class_name => KindAct, :foreign_key => 'recipient_id'


  scope :troublemakers, -> {where("bully_rating > 2")}

  def proper_age
    if (DateTime.now - birthdate < 365)
      errors.add(:birthdate, " -- Children must be at least one year old to enroll")
    end
  end


  def name
    self.first_name + " " +self.last_name
  end

  def total_poop
    array = self.daily_reports.collect {|d| d.poopy_diapers}
    array.inject(0){|sum, x| sum + x}
  end

  def update_child_stats(dailyreport)
    self.diapers_inventory -= dailyreport.total_daily_diapers
    self.bully_rating += dailyreport.bullying_today
    self.ouch_rating += dailyreport.ouches_today
    self.save
  end

  def self.daily_biggest
    winner = DailyReport.order(poopy_diapers: :desc).first
    "#{winner.child.name} has the most poops in a single day with #{winner.poopy_diapers} poops on #{winner.date.strftime("%b %d, %Y")}" unless winner == nil
  end


  def self.child_with_most_poops
    if self.count > 0 && self.all.detect {|c| c.daily_reports.detect {|dr| dr.poopy_diapers > 0}}
      c = joins(:daily_reports).group(:child_id).sum(:poopy_diapers)
      largest= c.max_by{|k,v| v}
      " #{Child.find(largest[0]).name} is the biggest pooper with #{largest[1]} reported poops. "
    end
  end

  def self.child_with_highest_bully_rating
    if Child.all.detect {|c| c.bully_rating > 0}
      c = (Child.all.sort_by {|c| c.bully_rating}.reverse)[0]
      " #{c.name} has the highest bully rating of the class with #{c.bully_rating} reported bullying incident(s). "
    end
  end

  def self.child_with_highest_ouch_rating
    if Child.all.detect {|c| c.ouch_rating > 0}
      c = (Child.all.sort_by {|c| c.ouch_rating}.reverse)[0]
      " #{c.name} has the highest ouch rating of the class with #{c.ouch_rating} reported ouch incident(s). "
    end
  end

  def self.child_with_most_kind_acts
    if Child.all.detect {|c| c.kind_acts.count > 0}
      c = (Child.all.sort_by {|c| c.kind_acts.count}.reverse)[0]
      " #{c.name} peformed the most kind acts of the class with #{c.kind_acts.count} reported acts of kindness. "
    end
  end

  def self.child_who_received_most_kind_acts
    if Child.all.detect {|c| c.gifts.count > 0}
      c = (Child.all.sort_by {|c| c.gifts.count}.reverse)[0]
      " #{c.name} received the most kind acts of the class with #{c.gifts.count} reported acts of kindness received. "
    end
  end
end
