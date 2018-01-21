# Write a quick_sort method that partitions the given array into two parts
# on opposite sides of one element which is in exactly the right place.
# Watch this video if you need more clarity: https://vimeo.com/162569453. (password: go_video_go)

def quick_sort(array)

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


# Merge Sort
# Implement a method merge_sort that sorts an Array:
#
# The base cases are for arrays of length zero or one.
# Do not use a length-two array as a base case. This is unnecessary.
# You'll want to write a merge helper method to merge the sorted halves.
# To get a visual idea of how merge sort works, watch this gif
# and check out this diagram. (Try it on the Array class with a block too! -Tom)

def merge_sort(array)

end

class Array
  def merge_sort(&prc)

  end
end

# Jumble sort takes a string and an alphabet. It returns a copy of the string
# with the letters re-ordered according to their positions in the alphabet. If
# no alphabet is passed in, it defaults to normal alphabetical order (a-z).

# Example:
# jumble_sort("hello") => "ehllo"
# jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

def jumble_sort(str, alphabet = ('a'..'z').to_a)


end


# ### Bubble Sort
#
# http://en.wikipedia.org/wiki/bubble_sort
#
# Implement Bubble sort in a method, `Array#bubble_sort!`. Your method should
# modify the array so that it is in sorted order.
#
# > Bubble sort, sometimes incorrectly referred to as sinking sort, is a
# > simple sorting algorithm that works by repeatedly stepping through
# > the list to be sorted, comparing each pair of adjacent items and
# > swapping them if they are in the wrong order. The pass through the
# > list is repeated until no swaps are needed, which indicates that the
# > list is sorted. The algorithm gets its name from the way smaller
# > elements "bubble" to the top of the list. Because it only uses
# > comparisons to operate on elements, it is a comparison
# > sort. Although the algorithm is simple, most other algorithms are
# > more efficient for sorting large lists.
#
# Hint: Ruby has parallel assignment for easily swapping values:
# http://rubyquicktips.com/post/384502538/easily-swap-two-variables-values
#
# After writing `bubble_sort!`, write a `bubble_sort` that does the same
# but doesn't modify the original. Do this in two lines using `dup`.
#
# Finally, modify your `Array#bubble_sort!` method so that, instead of
# using `>` and `<` to compare elements, it takes a block to perform the
# comparison:
#
# ```ruby
# [1, 3, 5].bubble_sort! { |num1, num2| num1 <=> num2 } #sort ascending
# [1, 3, 5].bubble_sort! { |num1, num2| num2 <=> num1 } #sort descending
# ```
#
# #### `#<=>` (the **spaceship** method) compares objects. `x.<=>(y)` returns
# `-1` if `x` is less than `y`. If `x` and `y` are equal, it returns `0`. If
# greater, `1`. For future reference, you can define `<=>` on your own classes.
#
# http://stackoverflow.com/questions/827649/what-is-the-ruby-spaceship-operator

class Array
  def bubble_sort!
  end

  def bubble_sort(&prc)
  end
end
