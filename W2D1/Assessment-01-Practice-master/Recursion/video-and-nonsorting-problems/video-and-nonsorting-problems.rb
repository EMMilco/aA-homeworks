# write your own recursive upcase(str) method. You're allowed to use
# String#upcase in your method, which feels like that defeats the purpose,
# but for some reason it's in the solution, so idk.

def upcase(str)

end

# Write a recursive method, range, that takes a start and an end and
# returns an array of all numbers in that range, exclusive.
# For example, range(1, 5) should return [1, 2, 3, 4].
# If end < start, you can return an empty array.

def range(num1, num2)

end


# Write two versions of exponent that use two different recursions:
#
# # this is math, not Ruby methods.
#
# # recursion 1
# exp(b, 0) = 1
# exp(b, n) = b * exp(b, n - 1)
#
# # recursion 2
# exp(b, 0) = 1
# exp(b, 1) = b
# exp(b, n) = exp(b, n / 2) ** 2             [for even n]
# exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]

def exp(base, power)

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
