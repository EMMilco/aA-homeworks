JAVASCRIPT BUILT-IN ARRAY METHODS



arr.length -> NUMBER
// returns number of elements in array.

arr.fill(filler, startIdx, endIdx); => MUTATED ARRAY
// fills all the elements from startIdx to endIdx with filler
// endIdx is noninclusive
// mutates arr, returns mutated arr

arr.pop() => ELEMENT (mutates arr)
// behaves predictably, removes last element and returns it

arr.push() => NUMBER (mutates arr)
// appends arguments to array, returns the new LENGTH of the array

arr.reverse() => MUTATED ARRAY
// mutates arr, reversing the order of its elements. Returns arr.

arr.shift() => ELEMENT (mutates arr)
//behaves predictably, like pop(), removes first element and returns it

arr.sort() => MUTATED ARRAY
// sorts the array in place (mutating it), and returns sorted array.

arr.unshift() => NUMBER (mutates arr)
// appends arguments to beginning of array, returns new LENGTH of array

arr.concat() => NEW ARRAY
// returns a new array composed of the elements of arr, with arguments appended

arr.includes() => BOOLEAN
// returns boolean indicating whether the argument is present in arr

arr.indexOf() => NUMBER (index)
// returns the index of the first matching element in array (by equality), or -1 if none

arr.lastIndexOf() => NUMBER (index)
//like arr.indexOf() but taking the last found match, also returns -1 if none found.

arr.join(joiningElement) => STRING
// aggregates all the elements into a string, with the joiningElement separating each. returns the resulting string.

arr.slice(begin, [end]) => NEW ARRAY
//with no arguments, returns shallow copy of arr
//with one argument, returns copy of array beginning at specified index
//with two arguments, returns copy of the array between specified indices, where the endpoint is non-inclusive


ITERATIVE METHODS

arr.every() => BOOLEAN
//accepts a function as an argument, and returns true only if every element in arr returns true when fed to the callback function (essentially equivalent to Ruby's Array#all)

arr.filter() => NEW ARRAY
//accepts a function as an argument, returns a new array with only the elements which return true when fed to the callback function (essentially equivalent to Ruby's Array#select)

arr.find() => ELEMENT
//accepts a function as an argument, returns the first VALUE in the array that returns true when fed to the function. returns UNDEFINED if no match.

arr.findIndex() => NUMBER (index)
//exactly like arr.find() but returns the index of the found element, not the element itself

arr.map() => NEW ARRAY
//accepts a function as an argument, and returns a new array containing the return value of each element when fed into the callback.

arr.reduce(callback, startingVal) => VALUE (results vary)
//accepts a callback function with an arity of 2, and an (optional) seed value for the reduction. callback arguments are in the order (acc, el), just like in Ruby's Array#reduce.

arr.reduceRight(callback, startingVal) => VALUE (results vary)
//exactly like arr.reduce(), but performs the reduction in last-to-first order.

arr.some() => BOOLEAN
//accepts a function as an argument, returns true if ANY element in the array returns true when fed into the callback.


