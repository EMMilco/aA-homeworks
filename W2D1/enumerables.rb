class Array
  def my_each(&prc)
    i = 0
    until i == self.length
      prc.call(self[i])
      i += 1
    end
    self
  end

  def my_select(&prc)
    results = []
    self.my_each { |el| results << el if prc.call(el) }
    results
  end

  def my_reject(&prc)
    results = []
    self.my_each { |el| results << el unless prc.call(el) }
    results
  end

  def my_any?(&prc)
    self.my_each { |el| return true if prc.call(el) }
    false
  end

  def my_flatten
    self.reduce([]) do |results, el|
      el.is_a?(Array) ? results += el.my_flatten : results << el
    end
  end

  def my_flatten
    results = []
    self.each do |el|
      if el.is_a?(Array)
        results += el.my_flatten
      else
        results << el
      end
    end
    results
  end

  def my_zip(*args)
    all_together = [self] + args
    Array.new(self.length) { |i| Array.new(all_together.length) { |j| all_together[j][i] } }
  end

  def my_zip(*args)
    self.map.with_index { |el,i| [el] + args.map { |el| el[i] } }
  end

  def my_rotate(n = 1)
    num = n % self.length
    self.drop(num) + self.take(num)
  end

  def my_join(str = "")
    self.reduce {|acc, el| acc + str + el }
  end

  def my_reverse
    result = []
    arr = self.dup
    arr.length.times { result << arr.pop }
    result
  end
end

def factors(num)
  (1..num).select { |n| num % n == 0 }
end

class Array
  def bubble_sort!(&prc)
    prc ||= Proc.new { |x,y| x<=>y }
    sorted = false
    until sorted == true
      sorted = true
      self[0...-1].each_index do |i|
        if prc.call(self[i], self[i+1]) == 1
          sorted = false
          self[i], self[i+1] = self[i+1], self[i]
        end
      end
    end
    self
  end
end

def substrings(string)
  result = []
  (1..string.length).each do |n|
    result += string.chars.each_cons(n).to_a
  end
  result.map(&:join)
end

def subwords(word, dictionary)
  results = []
  dictionary.each do |entry|
    results << entry if /#{entry}/ =~ word
  end
  results
end
