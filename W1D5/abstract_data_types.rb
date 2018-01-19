class Stack
  
  def initialize
    @stack = []
  end

  def add(el)
    stack << el
  end

  def remove
    stack.pop
  end

  def show
    stack
  end
  
  private
  attr_accessor :stack
  
end