// Write a recursive method that takes in a base 10 number n and
// converts it to a base b number. Return the new number as a string
//
// E.g. base_converter(5, 2) == "101"
// base_converter(31, 16) == "1f"

function baseConverter(num, b) {
  if ( num < b ) { return num.toString(); }
  const leadingDigit = (num % b).toString();
  const remainder = Math.trunc(num / b)
  return baseConverter(remainder, b) + leadingDigit;
}

// # Write a monkey patch of binary search:
// # E.g. [1, 2, 3, 4, 5, 7].my_bsearch(5) => 4

Array.prototype.myBsearch = function (target, func) {
  func = func || function (a,b) { return Math.sign(a - b); };
  const mid = Math.trunc(this.length / 2);
  if (this[mid] === target) {
    return mid;
  } else if (this.length <= 1) {
    return -1;
  } else if (func(this[mid], target) === -1) {
    return mid + this.slice(mid).myBsearch(target, func);
  } else { return this.slice(0,mid).myBsearch(target, func);}

};

Array.prototype.bubbleSort = function (func) {
  func = func || function (a,b) { return Math.sign(a-b); };
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        sorted = false;
        [this[i], this[i+1]] = [this[i+1], this[i]];
      }
    }
  }
  return this;
};

// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing it
// by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
// to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
// will take a message and an increment amount and outputs the encoded message.
// Assume lowercase and no punctuation. Preserve spaces.
//
// To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
// the position of a letter in the array, you may use `Array#find_index`.

function caesarCipher(str, shift) {
  const result = [];
  str.split("").forEach((el) => {
    if (el === " ") { result.push(" "); }
    else { result.push(String.fromCharCode((el.charCodeAt(0) - 96 + shift) % 26 + 96)); }
  });
  return result.join();
}

// Using recursion and the is_a? method,
// write an Array#deep_dup method that will perform a "deep" duplication of the
// interior arrays.

function deepDup(arr) {

}

// Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process.

function digitalRoot(num) {
  if (num < 10) { return num; }
  let result = 0;
  let workingNum = num;
  while (workingNum > 0) {
    result += workingNum % 10;
    workingNum = Math.trunc(workingNum / 10);
  }
  return digitalRoot(result);
}

// Write a method that doubles each element in an array

function doubler(array) {
  return array.map((el) => el*2);
}

// Write an Array#dups method that will return a hash containing the indices of
// all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.
// [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

Array.prototype.dups = function() {
  const results = {};
  this.forEach((el, i) => {
    results[el] ? results[el] = results[el].concat(i) : results[el] = [i];
  });
  return results;
};

// return b^n recursively. Your solution should accept negative values
// for n

function exponent(b, n) {
  if (n === 0) {
    return 1;
  }
  return b * exponent(b, n - 1);
}

// Write a recursive method that returns the first "num" factorial numbers.
// Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
// is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
  if (num === 1) { return [1]; }
  if (num === 2) { return [1,1]; }
  const prev = factorialsRec(num - 1);
  return prev.concat(prev[prev.length - 1] * (num - 1));
}

// Write a method that returns the factors of a number in ascending order.

function factors(num) {
  const results = [];
  for (var i = 0; i <= num; i++) {
    if (num % i === 0){results.push(i);}
  }
  return results;
}


// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

function fibsSum(n) {
  return fibs(n).reduce((acc, el) => { return acc + el; });
}


function fibs(n) {
  if (n === 1) { return [1]; }
  if (n === 2) { return [1,1]; }
  const prev = fibs(n-1);
  return prev.concat(prev[prev.length -2] + prev[prev.length - 1]);
}

// return the sum of the first n even numbers recursively. Assume n > 0

// function firstEvenNumbersSum(n) {
//   return (n ** 2) + n;
// }

function firstEvenNumbersSum(n) {
  let result = 0;
  for (var i = 1; i <= n; i++) {
    result += i*2;
  }
  return result;
}

// write Function.prototype.inherits.

Function.prototype.inherits = function (Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// Example:
// jumble_sort("hello") => "ehllo"
// jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(str, alphabet = null) {
  if (alphabet) {
    return str.split("").sort((a,b) => {
      return alphabet.indexOf(a) - alphabet.indexOf(b);
    }).join("");
  }
  return str.split("").sort().join("");
}

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

Array.prototype.median = function () {
  const mid = this.length / 2;
  if (this.length % 2 === 0) {
    return (this[mid - 1] + this[mid]) / 2;
  }
  else {
    return this[Math.trunc(mid)]; }
};

// Write an Array#merge_sort method; it should not modify the original array.

Array.prototype.mergeSort = function (func) {
  if (this.length <= 1) { return this; }

  const mid = Math.trunc(this.length / 2);
  const left = this.slice(0,mid);
  const right = this.slice(mid);

  return left.mergeSort(func).merge(right.mergeSort(func));
};

Array.prototype.merge = function (other, func) {
  func = func || function (a,b) { return a - b; };
  let results = [];

  while (this.length > 0 && other.length > 0) {
    if (func(this[this.length - 1], other[other.length - 1]) > 0) {
      results.push(other.shift());
    } else {
      results.push(this.shift());
    }
  }
  return results.concat(this, other);
};

// write Function.prototype.myBind.
Function.prototype.myBind = function (context, ...bindArguments) {
  return function (...callArumgents) {
    return this.apply(context, bindArguments.concat(callArumgents));
  };
};

Function.prototype.myCall = function (ctx, ...args) {

};

Function.prototype.myCurry = function (numArgs) {

};

Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myEvery = function (func) {
  for (var i = 0; i < this.length; i++) {
    if (func(this[i]) === false) { return false; }
  }
  return true;
};

Array.prototype.myFilter = function (func) {
  const results = [];
  for (var i = 0; i < this.length; i++) {
    if (func(this[i]) === true) { results.push(this[i]); }
  }
  return results;
};

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

Array.prototype.myFind = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {return this[i];}
  }
  return -1;
};

Array.prototype.flatten = function () {
  if (this.every((el) => { return Array.isArray(el) === false; })) {
    return this;
  } else {
    return this.reduce((acc, el) => acc.concat(el).flatten(), []);
  }
};

// Monkey patch the Array class and add a my_inject method. If my_inject receives
// no argument, then use the first element of the array as the default accumulator.

Array.prototype.myReduce = function (func, acc) {
  const arr = this.slice();
  let result = acc || arr.shift();
  for (var i = 0; i < arr.length; i++) {
    result = func(result, arr[i]);
  }
  return result;
};

Array.prototype.myJoin = function (separator) {
  return this.reduce((acc, el) => acc + separator + el.toString());
};

Array.prototype.reject = function (func) {
  return this.filter((el) => func(el) === false);
};

Array.prototype.myReverse = function () {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(this.pop());
  }
  return this.concat(result);
};

Array.prototype.rotate = function (num) {
  for (var i = 0; i < num; i++) {
    this.push(this.pop());
  }
};

// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function (start, end) {
  const final = end || this.length;
  const result = [];
  for (var i = start; i < end; i++) {
    result.push(this[i]);
  }
};

Array.prototype.mySome = function (func) {
  for (var i = 0, len = this.length; i < len; i++) {
    if (func(i)) { return true; }
  }
  return false;
};

// Write a recursive method that returns all of the permutations of an array

function permutations(array) {

}

// Write a method that translates a sentence into pig latin. You may want a
// helper method.
// 'apple' => 'appleay'
// 'pearl' => 'earlpay'
// 'quick' => 'ickquay'

function piglatinify(sentence) {

}

// Write a recursive function that returns the prime factorization of
// a given number. Assume num > 1
//
// prime_factorization(12) => [2,2,3]

function primeFactorization(num) {
  if (num === 2) { return num; }
  for (var i = 2; i <= num; i++) {
    if (num === i) { return num; }
    if (num % i === 0) {return [i].concat(primeFactorization(num / i));}
  }
}

// primes(num) returns an array of the first "num" primes.
// You may wish to use an is_prime helper method.

function primes(num) {
  const result = [];
  let i = 2;
  while (result.length < num) {
    if (isPrime(i)) { result.push(i); }
    i++;
  }

  function isPrime(n) {
    for (var j = 2; j < n; j++) {
      if ( n % j === 0) { return false; }
    }
    return true;
  }
  return result;

}

// Write a monkey patch of quick sort that accepts a callback

Array.prototype.quickSort = function (func) {
  func = func || function (a,b) { return a - b; };
  if (this.length < 2) { return this; }
  const pivot = this[0];
  const left = this.slice(1).filter((el) => func(el, pivot) <= 0);
  const right = this.slice(1).filter((el) => func(el, pivot) > 0);
  return left.quickSort(func).concat(pivot).concat(right.quickSort(func));
};

// Returns an array of all the subwords of the string that appear in the
// dictionary argument. The method does NOT return any duplicates.

String.prototype.realWordsInString = function (dictionary) {

}

// Write a recursive method that returns the sum of all elements in an array

function recSum(nums) {

}

// Write a recursive method that takes in a string to search and a key string.
// Return true if the string contains all of the characters in the key
// in the same order that they appear in the key.
//
// string_include_key?("cadbpc", "abc") => true
// string_include_key("cba", "abc") => false

function stringIncludeKey(string, key) {

}

// returns all subsets of an array

function subsets(array) {

}

// Write a String#symmetric_substrings method that returns an array of substrings
// that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
// Only include substrings of length > 1.

String.prototype.symmetricSubstrings = function () {

}

// Write a method that capitalizes each word in a string like a book title
// Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'

function titleize(title) {

}

function transpose(arr) {

};

// Write a method, `Array#two_sum`, that finds all pairs of positions where the
// elements at those positions sum to zero.

// NB: ordering matters. I want each of the pairs to be sorted smaller index
// before bigger index. I want the array of pairs to be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function () {

}
