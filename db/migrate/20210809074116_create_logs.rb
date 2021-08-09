class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.integer :no
      t.date :date
      t.string :diving_point
      t.decimal :temperature
      t.decimal :water_temperature
      t.time :in_time
      t.time :out_time
      t.integer :start_pressure
      t.integer :end_pressure
      t.decimal :max_depth
      t.decimal :average_depth
      t.decimal :transparency
      t.integer :diving_time
      t.integer :weight
      t.string :suits
      t.string :entry
      t.string :water
      t.text :free_text
      t.decimal :map_position_lat
      t.decimal :map_position_lng
      t.integer :user_id

      t.timestamps
    end
  end
end
