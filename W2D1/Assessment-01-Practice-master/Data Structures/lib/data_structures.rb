# EASY

# Write a method that returns the range of its argument (an array of integers).
def range(arr)
  [arr.min, arr.max]
end

# Write a method that returns a boolean indicating whether an array is in sorted
# order. Use the equality operator (==), which returns a boolean indicating
# whether its operands are equal, e.g., 2 == 2 => true, ["cat", "dog"] ==
# ["dog", "cat"] => false
def in_order?(arr)
  arr == arr.sort
end


# MEDIUM

# Write a method that returns the number of vowels in its argument
def num_vowels(str)
  str.scan(/[aeiou]/).length
end

# Write a method that returns its argument with all its vowels removed.
def devowel(str)
  str.chars.reject { |ch| ch =~ /[aeiou]/}.join
end


# HARD

# Write a method that returns the returns an array of the digits of a
# non-negative integer in descending order and as strings, e.g.,
# descending_digits(4291) #=> ["9", "4", "2", "1"]
def descending_digits(int)
  int.to_s.chars.sort_by { |dig| -1 * dig.to_i }
end

# Write a method that returns a boolean indicating whether a string has
# repeating letters. Capital letters count as repeats of lowercase ones, e.g.,
# repeating_letters?("Aa") => true
def repeating_letters?(str)
  str.downcase.chars.uniq == str.downcase.chars
end

def repeating_letters?(str)
  str.downcase.each_cons(2).to_a.map(&:uniq).any? { |el| el.length == 1}
end

# Write a method that converts an array of ten integers into a phone number in
# the format "(123) 456-7890".
def to_phone_number(arr)
  "(#{arr[0,3]}) #{arr[3,3]}-#{arr[6,4]}"
end

# Write a method that returns the range of a string of comma-separated integers,
# e.g., str_range("4,1,8") #=> 7
def str_range(str)
  str.split(",").map(&:to_i).minmax.reduce(:-) * -1
end


#EXPERT

# Write a method that is functionally equivalent to the rotate(offset) method of
# arrays. offset=1 ensures that the value of offset is 1 if no argument is
# provided. HINT: use the take(num) and drop(num) methods. You won't need much
# code, but the solution is tricky!
def my_rotate(arr, offset=1)
  shift = offset % arr.length
  arr.drop(shift) + arr.take(shift)
end
