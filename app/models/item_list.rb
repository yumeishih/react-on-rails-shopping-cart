class ItemList < ApplicationRecord
  attribute :isNew
  def self.add_new_label(itemList)
    itemList.each do |item|
    if item.created_at > (Time.now - 12.hours)
      item.isNew = true
    else
      item.isNew = false
    end
    end
  end
end
