class ItemList < ApplicationRecord
  attribute :isNew
  def self.add_new_label(item_list)
    item_list.map do |item|
      item.isNew = item.created_at > (Time.now - 12.hours)
    end
  end
end
