# EASY

def get_evens(arr)
  arr.select { |element| element.even? }
end

def calculate_doubles(arr)
  arr.map {|el| el * 2}
end

def calculate_doubles!(arr)
  arr.map! {|el| el * 2}
end

def array_sum_with_index(arr)
  sum = 0

  arr.each_with_index do |number, index|
    sum += (number * index )
  end

  sum
end


# MEDIUM

def price_is_right(bids, actual_retail_price)
  lower_bids = bids.reject { |bid| bid > actual_retail_price}
  lower_bids.max
end

def at_least_n_factors(numbers, n)
  numbers.select { |number| num_factors(number) >= n }
end

def num_factors(number)
  (1..number).count { |n| number % n == 0 }
end


# HARD

def ordered_vowel_words(words)
  words.select do |word|
    ordered_vowel_word?(word)
  end
end

def ordered_vowel_word?(word)
  vowels = "aeiou"

  vowels_in_word = word.chars.select do |letter|
    vowels.include?(letter)
  end

  vowels_in_word == vowels_in_word.sort
end

def products_except_me(numbers)
  numbers.map.with_index do |num, idx|
    sub_array = numbers[0...idx] + numbers[(idx + 1)..-1]
    array_product(sub_array)
  end
end

def array_product(array)
  array.reduce(:*)
end

#Part 2

def array_sum(arr)
  arr.reduce(:+)
end

def in_all_strings?(long_strings, substring)
  long_strings.all? {|string| string.include?(substring)}
end

def non_unique_letters(string)
  characters = string.chars.uniq
  characters.delete(" ") # get rid of spaces!

  characters.select {|char| string.count(char) > 1}
end

def longest_two_words(string)
  string.delete!(",.;:!?")
  string.split.sort_by {|word| word.length}[-2..-1]
end


# MEDIUM

def missing_letters(string)
  alphabet = ("a".."z")
  alphabet.reject do |el|
    string.downcase.include?(el)
  end
end

def no_repeat_years(first_yr, last_yr)
  (first_yr..last_yr).select do |year|
    no_repeat_year?(year)
  end
end

def no_repeat_year?(year)
  year_digits = year.to_s.chars
  year_digits == year_digits.uniq
end


# HARD

def one_week_wonders(songs)
  uniq_songs = songs.uniq
  uniq_songs.select do |song|
    no_repeats?(song, songs)
  end
end

def no_repeats?(song_name, songs)
  songs.each_with_index do |song, idx|
    if song == song_name
      return false if song == songs[idx + 1]
    end
  end

  true
end

def for_cs_sake(string)
  remove_punctuation(string)
  c_words = string.split.select { |word| word.downcase.include?("c") }
  return "" if c_words.empty?
  c_words.sort_by { |word| c_distance(word) }.first
end

def c_distance(word)
  word.reverse.index("c")
end

def remove_punctuation(string)
  string.delete!(",.;:!?")
end

def repeated_number_ranges(numbers)
  ranges = []
  start_index = nil

  # start walking
  # set the start_index when we're at the beginning of a range
  # when we reach the end of a range, add the range to the list and reset the start_index

  numbers.each_with_index do |el, idx|
    next_el = numbers[idx + 1]
    if el == next_el
      start_index = idx unless start_index #i.e., reset the start_index if it's nil
    elsif start_index # i.e., if the start index isn't nil (the numbers switched)
      ranges.push([start_index, idx])
      start_index = nil # reset the start_index to nil so we can capture more ranges
    end
  end

  ranges
end
