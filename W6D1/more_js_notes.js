MATH

// Math is a global built-in object.
// It is not a constructor, but offers a large library of mathematical
// functions and some constants.

Basic Mathematical Functions
// All the trigonometric functions from sin(x) to atanh(x)

Math.trunc(x)
// Removes the decimal portion of a number, returning only
// the integer part.

Math.ceil(x)
// The ceiling function (rounds to nearest whole number >= x.)

Math.floor(x)
// The floor function (rounds to nearest whole number <= x.)

Math.max(x, ...)
// Returns the largest of the provided arguments.

Math.min(x, ...)
// Returns the smallest of the provided arguments.

Math.random
// Returns a pseudorandom number between 0 and 1.

Math.round(x)
// Rounds x to the nearest whole number.

Math.sign(x)
// Returns the sign of x, i.e. 1, 0, or -1.





NUMBER

// All numbers in Javascript are DOUBLES, i.e. double-precision floating point numbers. Integer values are merely instances of the same data type as any other float in JS.

// A related fact is that all division in Javascript is float division. In order to perform integer division, one must employ an auxiliary Math function like Math.floor() or Math.trunc().

// The absence of integer division is especially important when calculating the middle index in array.  Here the correct answer is:

Math.floor(arr.length / 2);




REGULAR EXPRESSIONS

// RegEx in Javascript follows the usual conventions, with the usual literal construction and the usual flags (e.g. g, i).  



