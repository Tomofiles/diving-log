# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Log.create!(
    no: 8,
    date: "2018-08-28",
    diving_point: "慶良間諸島 座間味島 知志",
    temperature: 30,
    water_temperature: 28.4,
    in_time: "14:24",
    out_time: "15:09",
    start_pressure: 200,
    end_pressure: 50,
    max_depth: 13.4,
    average_depth: 9.2,
    transparency: 20,
    diving_time: 45,
    weight: 2,
    suits: "ウェット (3mm)",
    entry: "ボート",
    water: "海水",
    free_text: "",
    map_position_lat: 26.247635,
    map_position_lng: 127.315060,
    user_id: 1
)