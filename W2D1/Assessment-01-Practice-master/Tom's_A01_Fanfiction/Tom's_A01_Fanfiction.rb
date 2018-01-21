# Write a method that returns the range of a string of comma-separated integers,
# e.g., str_range("4,1,8") #=> 7
def str_range(str)
  # your code goes here
end


# The binary search algorithm begins by comparing the target value to the
# value of the middle element of the sorted array. If the target value is
# equal to the middle element's value, then the position is returned and
# the search is finished. If the target value is less than the middle
# element's value, then the search continues on the lower half of the array;
# or if the target value is greater than the middle element's value,
# then the search continues on the upper half of the array.
# This process continues, eliminating half of the elements, and comparing
# the target value to the value of the middle element of the remaining elements -
# until the target value is either found (and its associated element position is returned),
#   or until the entire array has been searched (and "not found" is returned).
#
# Write a recursive binary search: bsearch(array, target).
# Note that binary search only works on sorted arrays.
# Make sure to return the location of the found object (or nil if not found!).
# Hint: you will probably want to use subarrays.

def bsearch(nums, target)

end


# Define a method that takes a string of lower-case letters and returns an array
# of all the letters that do not occur in the method's argument.
def missing_letters(string)
end


# Return an array of integers from 1 to n (inclusive), except for each multiple
# of 3 replace the integer with "fizz", for each multiple of 5 replace the
# integer with "buzz", and for each multiple of both 3 and 5, replace the
# integer with "fizzbuzz".
def fizzbuzz(n)

end


# Using recursion and the is_a? method,
# write an Array#deep_dup method that will perform a "deep" duplication of the interior arrays.

class Array
  def deep_dup

  end
end


# Write a recursive and an iterative Fibonacci method.
# The method should take in an integer n and return the first n Fibonacci numbers in an array.

def rec_fib(n)

end

def it_fib(n)

end
