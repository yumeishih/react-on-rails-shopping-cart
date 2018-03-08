class CreateItemLists < ActiveRecord::Migration[5.1]
  def change
    create_table :item_lists do |t|
      t.string :itemID
      t.string :itemImg
      t.string :itemName
      t.text :describe
      t.integer :price

      t.timestamps
    end
  end
end
