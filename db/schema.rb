# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_21_131120) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "logs", force: :cascade do |t|
    t.integer "no"
    t.date "date"
    t.string "diving_point"
    t.decimal "temperature"
    t.decimal "water_temperature"
    t.time "in_time"
    t.time "out_time"
    t.integer "start_pressure"
    t.integer "end_pressure"
    t.decimal "max_depth"
    t.decimal "average_depth"
    t.decimal "transparency"
    t.integer "diving_time"
    t.integer "weight"
    t.string "suits"
    t.string "entry"
    t.string "water"
    t.text "free_text"
    t.decimal "map_position_lat"
    t.decimal "map_position_lng"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "shop_id"
  end

  create_table "shops", force: :cascade do |t|
    t.string "organization"
    t.string "shop_name"
    t.string "shop_area"
    t.string "address"
    t.string "telephone_number"
    t.string "url"
    t.text "free_text"
    t.decimal "map_position_lat"
    t.decimal "map_position_lng"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "display_name"
    t.string "avatar"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
