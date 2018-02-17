JAVASCRIPT BUILT-IN ARRAY METHODS


ITERATIVE METHODS

arr.forEach(callback) => undefined
// accepts a function as an argument, and calls the callback on each
// element of the array in turn, returns undefined.
// CALLBACK IS UNARY AND NEED NOT RETURN

arr.map() => NEW ARRAY
// accepts a function as an argument, and returns a new array containing
// the return value of each element when fed into the callback.
// CALLBACK IS UNARY AND RETURNS A MAPPED COPY OF AN ELEMENT

arr.every(callback) => BOOLEAN
// accepts a function as an argument, and returns true only if every element in arr returns
// true when fed to the callback function (essentially equivalent to Ruby's Array#all)
// CALLBACK IS UNARY AND RETURNS A BOOLEAN

arr.some(callback) => BOOLEAN
//accepts a function as an argument, returns true if ANY element in the
// array returns true when fed into the callback.
// CALLBACK IS UNARY AND RETURNS A BOOLEAN

arr.filter(callback) => NEW ARRAY
//accepts a function as an argument, returns a new array with only the elements which
// return true when fed to the callback function (essentially equivalent to Ruby's Array#select)
// CALLBACK IS UNARY AND RETURNS A BOOLEAN

arr.find(callback) => ELEMENT
//accepts a function as an argument, returns the first ELEMENT in the array that
// returns true when fed to the function. returns UNDEFINED if no match.
// CALLBACK IS UNARY AND RETURNS A BOOLEAN

arr.findIndex(callback) => NUMBER (index)
//exactly like arr.find() but returns the INDEX of the found element, not the element itself
// CALLBACK IS UNARY AND RETURNS A BOOLEAN

arr.reduce(callback, startingVal) => VALUE (results vary)
//accepts a callback function with an arity of 2, and an (optional) seed value
// for the reduction. callback arguments are in the order (acc, el), just like in Ruby's Array#reduce.
// CALLBACK IS BINARY AND RETURNS A VALUE

arr.reduceRight(callback, startingVal) => VALUE (results vary)
//exactly like arr.reduce(), but performs the reduction in last-to-first order.
// CALLBACK IS BINARY AND RETURNS A VALUE


OTHER METHODS

arr.length => NUMBER
// returns number of elements in array.

arr.pop() => ELEMENT (mutates arr)
// behaves predictably, removes last element and returns it

arr.push(a, ...) => NUMBER (mutates arr)
// appends argument(s) to array, returns the new LENGTH of the array

arr.shift() => ELEMENT (mutates arr)
//behaves predictably, like pop(), removes first element and returns it

arr.unshift(a, ...) => NUMBER (mutates arr)
// adds arguments to beginning of array, returns new LENGTH of array

arr.concat(a, ...) => NEW ARRAY
// returns a new array composed of the elements of arr, with arguments appended
// N.B.: accepts both arrays and non-arrays as arguments.  Examples:
// [1,2,3].concat(4) => [1,2,3,4]  ACCEPTS NON-ARRAY
// [1,2,3].concat([4,5]) => [1,2,3,4,5] ACCEPTS AND UNWRAPS ARRAY
// [1,2,3].concat([4,5],6) => [1,2,3,4,5,6] ACCEPTS AND COMBINES ARRAYS WITH NON-ARRAYS
// [1,2,3].concat([[4],5]) => [1,2,3,[4],5] DOES NOT RECURSE INTO NESTED ARRAYS

arr.slice(begin, [end]) => NEW ARRAY
// with no arguments, returns shallow copy of arr
// with one argument, returns copy of array beginning at specified index
// with two arguments, returns copy of the array between specified indices, where the endpoint is non-inclusive

arr.reverse() => MUTATED ARRAY
// mutates arr, reversing the order of its elements. Returns arr.

arr.sort() => MUTATED ARRAY
// sorts the array in place (mutating it), and returns sorted array.

arr.includes(val) => BOOLEAN
// returns boolean indicating whether the argument is present in arr

arr.indexOf(val) => NUMBER (index)
// returns the index of the first matching element in array (by equality), or -1 if none

arr.lastIndexOf(val) => NUMBER (index)
//like arr.indexOf() but taking the last found match, also returns -1 if none found.

arr.join(separator) => STRING
// aggregates all the elements into a string, with the separator between each. returns the resulting string.

arr.fill(filler, startIdx, endIdx); => MUTATED ARRAY
// fills all the elements from startIdx to endIdx with filler
// endIdx is noninclusive
// mutates arr, returns mutated arr
