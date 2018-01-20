# Notes:

# --- If you name a script the same as a ruby stdlib file (in this case
# if the file were named 'singleton.rb'), pry will load the core file inst-
#   ead of the script in the working directory.
#
# --- Don't forget to require stdlib gems that you need (in this case 'singleton')
#
# --- Subclasses of classes that mix-in Singleton are Singletons, but their
# instances are each unique.

require 'singleton'

class Bob
  include Singleton

  def my_name
    puts "bob"
  end

end

class Rob < Bob

  def my_name
    puts "rob"
  end

end
