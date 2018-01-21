require 'byebug'

# Write a recursive method that takes in a base 10 number n and
# converts it to a base b number. Return the new number as a string
#
# E.g. base_converter(5, 2) == "101"
# base_converter(31, 16) == "1f"

def base_converter(num, b)
  nums = %w(0 1 2 3 4 5 6 7 8 9 a b c d e f)
  return nums[num] if num < b
  base_converter(num / b, b) + nums[num % b]
end

class Array

  # Write a monkey patch of binary search:
  # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4
  def my_bsearch(target, &prc)
    prc ||= Proc.new { |x,y| x <=> y }
    return nil if self.empty?
    return nil if self.length == 1 && self.first != target
    mid = self.length / 2
    left = self[0...mid]
    right = self[mid..-1]
    case prc.call(self[mid], target)
      when 1
        left.my_bsearch(target, &prc)
      when 0
        mid
      when -1
        right_result = right.my_bsearch(target, &prc)
        return nil unless right_result
        mid + right_result
    end
  end
end


class Array
  def bubble_sort!(&prc)
    prc ||= Proc.new { |x, y| x <=> y }
    sorted = false
    until sorted
      sorted = true
      (0...self.length - 1).each do |i|
        if prc.call(self[i], self[i+1]) == 1
          self[i], self[i+1] = self[i+1], self[i]
          sorted = false
        end
      end
    end
    self
  end

  def bubble_sort(&prc)
    self.dup.bubble_sort!(&prc)
  end

end



# Back in the good old days, you used to be able to write a darn near
# uncrackable code by simply taking each letter of a message and incrementing it
# by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
# to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
# will take a message and an increment amount and outputs the encoded message.
# Assume lowercase and no punctuation. Preserve spaces.
#
# To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
# the position of a letter in the array, you may use `Array#find_index`.

def caesar_cipher(str, shift)
  shifted = str.split(" ").map do |word|
    word.chars.map { |x| ((x.ord + shift - 96) % 26 + 96).chr }.join
  end

  shifted.join(" ")

end

# Using recursion and the is_a? method,
# write an Array#deep_dup method that will perform a "deep" duplication of the interior arrays.

def deep_dup(arr)
  return arr.dup unless arr.is_a?(Array)
  arr.map { |el| deep_dup(el) }
end

# Write a method, `digital_root(num)`. It should Sum the digits of a positive
# integer. If it is greater than 10, sum the digits of the resulting number.
# Keep repeating until there is only one digit in the result, called the
# "digital root". **Do not use string conversion within your method.**
#
# You may wish to use a helper function, `digital_root_step(num)` which performs
# one step of the process.

def digital_root(num)
  return num if num < 10
  digital_root(num % 10 + digital_root(num / 10))

end

# Write a method that doubles each element in an array
def doubler(array)
  array.map { |el| el * 2 }
end

class Array

  # Write an Array#dups method that will return a hash containing the indices of all
  # duplicate elements. The keys are the duplicate elements; the values are
  # arrays of their indices in ascending order, e.g.
  # [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  def dups
    results = Hash.new { Array.new }
    self.each.with_index { |el, i| results[el] += [i] }
    results.select { |k,v| v.length > 1 }
  end
end

# return b^n recursively. Your solution should accept negative values
# for n
def exponent(b, n)
  return 1 if n == 0
  if n < 0
    exponent(b, n + 1) / b.to_f
  else
    exponent(b, n - 1) * b
  end
end

# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.

def factorials_rec(num)
  return [1] if num == 1
  prev = factorials_rec(num - 1)
  prev << prev.last * (num - 1)
end

# Write a method that returns the factors of a number in ascending order.

def factors(num)
  (1..num).select { |n| num % n == 0}
end

# Implement a method that finds the sum of the first n
# fibonacci numbers recursively. Assume n > 0
def fibs_sum(n)
  fibs(n).reduce(:+)
end

def fibs(n)
  return [1] if n == 1
  return [1,1] if n == 2
  prev = fibs(n - 1)
  prev << prev[-1] + prev[-2]
end

# return the sum of the first n even numbers recursively. Assume n > 0
def first_even_numbers_sum(n)
  return 2 if n == 1
  n * 2 + first_even_numbers_sum(n-1)
end

# Jumble sort takes a string and an alphabet. It returns a copy of the string
# with the letters re-ordered according to their positions in the alphabet. If
# no alphabet is passed in, it defaults to normal alphabetical order (a-z).

# Example:
# jumble_sort("hello") => "ehllo"
# jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

def jumble_sort(str, alphabet = nil)
  alphabet ||= ("a".."z").to_a
  str.chars.sort_by { |letter| alphabet.index(letter.downcase) }.join
end

# make better change problem from class
# make_better_change(24, [10,7,1]) should return [10,7,7]
# make change with the fewest number of coins

# To make_better_change, we only take one coin at a time and
# never rule out denominations that we've already used.
# This allows each coin to be available each time we get a new remainder.
# By iterating over the denominations and continuing to search
# for the best change, we assure that we test for 'non-greedy' uses
# of each denomination.

def make_better_change(value, coins)
  coins_to_check = coins.select { |coin| coin <= value }
  return nil if coins_to_check.empty?

  solutions = []

  coins_to_check.sort.reverse.each do |coin|
    remainder = value - coin
    if remainder > 0
      remainder_solution = make_better_change(remainder, coins_to_check)
      solutions << [coin] + remainder_solution if remainder_solution
    else
      solutions << [coin] # in case one coin matches the exact value
    end
  end
  sorted = solutions.sort_by(&:length)
  sorted[0]
end

# Write a method that returns the median of elements in an array
# If the length is even, return the average of the middle two elements
class Array
  def median
    return nil if self.empty?
    return self[0] if self.length == 1
    mid = self.length / 2
    sorted = self.sort
    if self.length.odd?
      sorted[mid]
    else
      (sorted[mid] + sorted[mid - 1]) / 2.0
    end
  end
end

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(&prc)
    prc ||= Proc.new { |x,y| x <=> y }
    return self if self.length < 2
    mid = self.length / 2
    left = self[0...mid]
    right = self[mid..-1]
    Array.merge(left.merge_sort(&prc), right.merge_sort(&prc), &prc)
  end

  def self.merge(left, right, &prc)
    results = []
    until left.empty? || right.empty?
      if prc.call(left.first, right.first) == 1
        results << right.shift
      else
        results << left.shift
      end
    end
    results + left + right
  end
end

class Array

  def my_all?(&prc)
    self.each { |el| return false unless prc.call(el) }
    true
  end

end

class Array

  def my_any?(&prc)
    self.each { |el| return true if prc.call(el) }
    false
  end

end

class Array

  def my_each(&prc)
    i = 0
    until i == self.length
      prc.call(self[i])
      i += 1
    end
    self
  end

  def my_each_with_index(&prc)
    i = 0
    until i == self.length
      prc.call(self[i], i)
      i += 1
    end
    self
  end

end

class Hash

  # Write a version of my each that calls a proc on each key, value pair
  def my_each(&prc)
    self.keys.each { |key| prc.call(key, self[key]) }
  end

end

class Array

  # Takes a multi-dimentional array and returns a single array of all the elements
  # [1,[2,3], [4,[5]]].my_controlled_flatten(1) => [1,2,3,4,5]
  def my_flatten
    results = []
    self.map do |el|
      if el.is_a?(Array)
        results += el.my_flatten
      else
        results << el
      end
    end
    results
  end

  # Write a version of flatten that only flattens n levels of an array.
  # E.g. If you have an array with 3 levels of nested arrays, and run
  # my_flatten(1), you should return an array with 2 levels of nested
  # arrays
  #
  # [1,[2,3], [4,[5]]].my_controlled_flatten(1) => [1,2,3,4,[5]]
  def my_controlled_flatten(n)
    return self if n < 1
    results = []
    self.map do |el|
      if el.is_a?(Array)
        results += el.my_controlled_flatten(n-1)
      else
        results << el
      end
    end
    results
  end
end

class Array

  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(acc = nil, &prc)
    proxy = self.dup
    acc ||= proxy.shift
    proxy.each do |el|
      acc = prc.call(acc, el)
    end
    acc
  end
end

class Array

  def my_join(str = "")
    self.reduce { |acc, el| acc + str + el }
  end

end

class Hash

  # Write a version of merge. This should NOT modify the original hash
  def my_merge(hash2, &prc)
    prc ||= Proc.new { |k,v1,v2| v2 }
    results = self.dup
    overlap = self.keys & hash2.keys
    hash2.each { |k,v| results[k] = v }
    overlap.each { |k| results[k] = prc.call(k, self[k], hash2[k]) }
    results
  end

end

class Array

  def my_reject(&prc)
    results = []
    self.each { |el| results << el unless prc.call(el) }
    results
  end

end

class Array

  def my_reverse
    results = []
    self.length.times { results << self.dup.pop }
    results
  end

  def my_reverse
    return self if self.length < 2
    [self[-1]] + self[0...-1].my_reverse
  end
end

class Array

  def my_rotate(num = 1)
    sub = self.dup
    (num % sub.length).times { sub << sub.shift }
    sub
  end

end

class Array

  def my_select(&prc)
    results = []
    self.each { |el| results << el if prc.call(el) }
    results
  end

end

class Array

  def my_zip(*arrs)
    results = []
    self.each_index do |i|
      results[i] = [self[i]] + arrs.reduce([]) { |acc, el| acc << el[i] }
    end
    results
  end

end

# Write a recursive method that returns all of the permutations of an array
def permutations(array)
  return [array] if array.length < 2
  duplicate = array.dup
  perms = []
  last = duplicate.last

  prev = permutations(duplicate[0...-1])
  prev.each do |perm|
    (0..perm.length).each do |i|
      perms << perm.take(i) + [last] + perm.drop(i)
    end
  end
  return perms
end

# def permutations(arr)
#   return [arr] if arr.length <= 1
#   result_arr = []
#   last = arr.last
#
#   prev_perms = permutations(arr[0...-1])
#   prev_perms.each do |perm|
#     (0..perm.length).each do |idx|
#       result_arr << perm.take(idx) + [last] + perm.drop(idx)
#     end
#   end
#   return result_arr
# end

# Write a method that translates a sentence into pig latin. You may want a helper method.
# 'apple' => 'appleay'
# 'pearl' => 'earlpay'
# 'quick' => 'ickquay'
def pig_latinify(sentence)
end

# Write a recursive function that returns the prime factorization of
# a given number. Assume num > 1
#
# prime_factorization(12) => [2,2,3]
def prime_factorization(num)
  return [] if num <= 1
  i = 2
  until is_prime?(i) && num % i == 0
    i += 1
  end
  [i] + prime_factorization(num / i)
end

def is_prime?(num)
  (2...num).none? { |x| num % x == 0 }
end

# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.

def primes(num)
  result = []
  i = 2
  until result.length == num
    result << i if is_prime?(i)
    i += 1
  end
  result
end

class Array

  #Write a monkey patch of quick sort that accepts a block
  def my_quick_sort(&prc)
    prc ||= Proc.new { |x,y| x <=> y }
    return self if self.length < 2
    pivot = self.pop
    left = self.select { |x| prc.call(x,pivot) <= 0 }
    right = self.select { |x| prc.call(x,pivot) > 0 }
    left.my_quick_sort(&prc) + [pivot] + right.my_quick_sort(&prc)
  end

end

class String
  # Returns an array of all the subwords of the string that appear in the
  # dictionary argument. The method does NOT return any duplicates.

  def real_words_in_string(dictionary)
    dictionary.select { |word| /#{word}/ =~ self }
  end
end

# Write a recursive method that returns the sum of all elements in an array
def rec_sum(nums)
  return 0 if nums.empty?
  nums.last + rec_sum(nums[0...-1])
end

# Write a recursive method that takes in a string to search and a key string.
# Return true if the string contains all of the characters in the key
# in the same order that they appear in the key.
#
# string_include_key?("cadbpc", "abc") => true
# string_include_key("cba", "abc") => false
def string_include_key?(string, key)
  return true if key.empty?
  return false unless string.index(key[0])
  new_start = string.index(key[0]) + 1
  string_include_key?(string[new_start..-1], key[1..-1])
end

#returns all subsets of an array
def subsets(array)
  return [[]] if array.length == 0
  last = array.last
  prev = subsets(array[0...-1])
  additions = prev.map { |el| el + [last] }
  prev + additions
end

class String

  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.

  def symmetric_substrings
    self.substrings.select { |sub| sub == sub.reverse }.map(&:join)
  end

  def substrings
    subs = []
    (2..self.length).each { |n| subs += self.chars.each_cons(n).to_a }
    subs
  end
end

# Write a method that capitalizes each word in a string like a book title
# Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'
def titleize(title)
  words = title.split
  words.map! do |word|
    if %w(a and of over the).include?(word)
      word
    else
      word.capitalize
    end
  end
  words.first.capitalize!
  words.join(" ")
end

class Array
  # Write a method, `Array#two_sum`, that finds all pairs of positions where the
  # elements at those positions sum to zero.

  # NB: ordering matters. I want each of the pairs to be sorted smaller index
  # before bigger index. I want the array of pairs to be sorted
  # "dictionary-wise":
  #   [0, 2] before [1, 2] (smaller first elements come first)
  #   [0, 1] before [0, 2] (then smaller second elements come first)

  def two_sum
    results = []
    self.each_index do |i|
      self.each_index do |j|
        results << [i, j] if i < j && self[i] + self[j] == 0
      end
    end
    results
  end
end
