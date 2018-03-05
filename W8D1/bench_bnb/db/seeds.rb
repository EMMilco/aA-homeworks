# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



def lat
  rand * (37.7962402 - 37.7143921) + 37.7143921
end

def lng
  rand * (-122.4176442 + 122.5043682) + -122.5043682
end

Bench.destroy_all
100.times do
  Bench.create(lat: lat, lng: lng, description: "this is a bench")
end
