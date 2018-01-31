class AddHouseToCats < ActiveRecord::Migration[5.1]
  def change
    add_column :cats, :house, 
  end
end
