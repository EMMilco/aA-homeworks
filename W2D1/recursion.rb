def range(first, last, step = 1)
  return [] if first >= last
  [first] + range(first + step, last, step)
end

def exponentiation(b, n)
  return 1 if n == 0
  if n > 0
    b * exponentiation(b, n - 1)
  else
    exponentiation(b, n + 1) / b.to_f
  end
end

def deep_dup(obj)
  return obj.dup unless obj.is_a?(Array)
  obj.map { |el| deep_dup(el) }
end

def fibonacci(n)
  return [1] if n == 1
  return [1,1] if n == 2
  prev = fibonacci(n-1)
  prev << prev[-1] + prev[-2]
end

def subsets(arr)
  return [[]] if arr.empty?
  prev = subsets(arr[0...-1])
  last = arr[-1]
  prev + prev.map { |subset| subset.dup << last }
end

def permutations(arr)
  return [arr] if arr.length <= 1
  prev = permutations(arr[0...-1])
  last = arr[-1]
  result = []
  prev.each do |perm|
    (0..perm.length).each do |i|
      result << perm.take(i) + [last] + perm.drop(i)
    end
  end
  result
end

def bsearch(arr, target)
  mid = arr.length / 2
  case arr[mid] <=> target
  when -1
    mid + bsearch(arr[mid..-1], target)
  when 0
    mid
  when 1
    bsearch(arr[0...mid], target)
  end
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |x,y| x<=>y }
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

  def quick_sort(&prc)
    prc ||= Proc.new { |x,y| x <=> y }
    return self if self.length < 2
    me = self.dup
    pivot = me.pop
    left = me.select { |x| x < pivot }
    right = me.select { |x| x >= pivot }
    left.quick_sort + [pivot] + right.quick_sort
  end

  def bubble_sort!(&prc)
    prc ||= Proc.new { |x,y| x <=> y }
    sorted = false
    until sorted == true
      sorted = true
      (0...self.length - 1).each do |i|
        if self[i] > self[i+1]
          self[i], self[i+1] = self[i+1], self[i]
          sorted = false
        end
      end
    end
    self
  end
end
