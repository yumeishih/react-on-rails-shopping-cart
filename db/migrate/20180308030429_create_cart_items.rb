class CreateCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_items do |t|
      t.string :itemID
      t.string :itemImg
      t.string :itemName
      t.text :describe
      t.integer :price
      t.integer :qty

      t.timestamps
    end
  end
end
