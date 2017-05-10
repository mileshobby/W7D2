class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }
  after_initialize :default_values


  private

  def default_values
    self.done = false
  end
end
