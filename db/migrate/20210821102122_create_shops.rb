class CreateShops < ActiveRecord::Migration[6.1]
  def change
    create_table :shops do |t|
      t.string :organization
      t.string :shop_name
      t.string :shop_area
      t.string :address
      t.string :telephone_number
      t.string :url
      t.text :free_text
      t.decimal :map_position_lat
      t.decimal :map_position_lng
      t.integer :user_id

      t.timestamps
    end
  end
end
