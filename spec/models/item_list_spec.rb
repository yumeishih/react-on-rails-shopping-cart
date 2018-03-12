require 'rails_helper'
RSpec.describe ItemList, type: :model do
  it 'add_new_label:true' do
    item = create(:ItemList)
    ItemList.add_new_label([item])
    item.attributes["isNew"].should be true
  end
  it 'add_new_label:false' do
    item = create(:ItemList, created_at: Date.new(2017,1,1))
    ItemList.add_new_label([item])
    item.attributes["isNew"].should be false
  end
end