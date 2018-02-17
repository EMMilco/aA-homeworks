JAVASCRIPT BUILT-IN METHODS



PART I: ARRAY METHODS

ITERATIVE METHODS

arr.forEach(callback) => undefined
// accepts a function as an argument, and calls the callback on each
// element of the array in turn, returns undefined.
// CALLBACK IS UNARY AND NEED NOT RETURN

arr.map(callback) => NEW ARRAY
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



OTHER ARRAY METHODS

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
// -- EASIEST WAY TO REMEMBER: It strips off the outermost array-layer of
// -- each argument (if there is one), and lumps all the results onto arr.

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




PART II: MISCELLANY


MATH

// Math is a global built-in object.
// It is not a constructor, but offers a large library of mathematical
// functions and some constants.

Basic Mathematical Functions
// All the trigonometric functions from sin(x) to atanh(x) are available.
// All the expected mathematical constants are available.
// All the expected elementary functions are available.

Math.trunc(x)
// Removes the decimal portion of a number, returning only the integer part.

Math.ceil(x)
// The ceiling function (rounds to nearest whole number >= x.)

Math.floor(x)
// The floor function (rounds to nearest whole number <= x.)

Math.max(x, ...)
// Returns the greatest of the provided arguments.

Math.min(x, ...)
// Returns the least of the provided arguments.

Math.random
// Returns a pseudorandom number between 0 and 1.
// Note that it does not take an argument. Random positive integers
// in a desired range can be acquired through multiplication, etc.

Math.round(x)
// Rounds x to the nearest whole number.

Math.sign(x)
// Returns the sign of x, i.e. 1, 0, or -1.



NUMBER

// All numbers in Javascript are DOUBLES, i.e. double-precision
// floating point numbers. Integer values are merely instances of the
// same data type as any other float in JS.

// A related fact is that all division in Javascript is float division.
// In order to perform integer division, one must employ an auxiliary
// Math function like Math.floor() or Math.trunc().

// The absence of integer division is especially important when
// calculating the middle index in array.  Here the correct answer is:

Math.floor(arr.length / 2);



REGULAR EXPRESSIONS

// RegEx in Javascript follows the usual conventions, with the usual
// literal construction and the usual flags (e.g. g, i).
