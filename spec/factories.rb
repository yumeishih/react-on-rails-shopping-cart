FactoryBot.define do
  factory :ItemList do
    itemID 'fakeitem'
    itemImg './src/imgs/items/fakeitem.jpg'
    itemName 'fakeitem'
    describe 'fakeitem'
    price 10_000
    created_at ''
  end
end
