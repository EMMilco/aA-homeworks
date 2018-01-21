def str_range(str)
  arr = str.split(",")
  arr = arr.sort
  arr[-1].to_i - arr[0].to_i
end

def bsearch(nums, target)
  # nil if not found; can't find anything in an empty array
  return nil if nums.empty?

  probe_index = nums.length / 2
  case target <=> nums[probe_index]
  when -1
    # search in left
    bsearch(nums.take(probe_index), target)
  when 0
    probe_index # found it!
  when 1
    # search in the right; don't forget that the right subarray starts
    # at `probe_index + 1`, so we need to offset by that amount.
    sub_answer = bsearch(nums.drop(probe_index + 1), target)
    sub_answer.nil? ? nil : (probe_index + 1) + sub_answer
  end

  # Note that the array size is always decreasing through each
  # recursive call, so we'll either find the item, or eventually end
  # up with an empty array.
end


def missing_letters(string)
  alphabet = ("a".."z")
  alphabet.reject do |el|
    string.downcase.include?(el)
  end
end


def fizzbuzz
  fizzbuzzers = []
  (1..30).each do |int|
    if int % 3 == 0 && int % 5 == 0
      fizzbuzzers << "fizzbuzz"
    elsif int % 5 == 0
      fizzbuzzers << "buzz"
    elsif int % 3 == 0
      fizzbuzzers << "fizz"
    else
      fizzbuzzers << int
    end
  end
  fizzbuzzers
end


class Array
  def deep_dup
    new_array = []
    self.each do |el|
      new_array << (el.is_a?(Array) ? el.deep_dup : el)
    end
    new_array
  end
end


def fibs_iter(n)
  return [] if n == 0
  return [0] if n == 1

  fibs = [0, 1]

  while fibs.count < n
    fibs << fibs[-2] + fibs[-1]
  end

  fibs
end

def fibs_rec(n)
  if n <= 2
    [0, 1].take(n)
  else
    fibs = fibs_rec(n - 1)
    fibs << fibs[-2] + fibs[-1]
  end
end
