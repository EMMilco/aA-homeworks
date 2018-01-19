class Map
  def initialize
    @mapping = []
  end
  
  def assign(key, value)
    remove(key)
    mapping << [key, value]
  end
  
  def lookup(key)
    mapping.find { |el| el[0] == key }[1]
  end
  
  def remove(key)
    mapping.reject! { |el| el[0] == key }
  end
  
  def show
    mapping
  end
  
  private
  attr_accessor :mapping
end