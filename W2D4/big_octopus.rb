def sluggish_octopus(arr)
  result = ""
  arr.each_index do |i|
    arr.each_index do |j|
      result = arr[i] if arr[i].length >= arr[j].length
    end
  end
  result
end

def dominant_octopus(arr)
  arr.sort.last
end

def clever_octopus(arr)
  result_index = 0
  arr.each_index do |i|
    result_index = i if arr[i].length > arr[result_index].length
  end
  arr[result_index]
end

def slow_dance(dir, arr)
  i = 0
  until arr[i] == dir
    i += 1
  end
  i
end

def constant_dance(dir, arr)
  arr[dir]
end
