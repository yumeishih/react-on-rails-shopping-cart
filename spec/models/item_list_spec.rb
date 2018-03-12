require 'rails_helper'
RSpec.describe ItemList, type: :model do
  it 'add_new_label' do
    item = create(:ItemList)
    ItemList.add_new_label([item])
    item.attributes["isNew"].should be true
  end
end
