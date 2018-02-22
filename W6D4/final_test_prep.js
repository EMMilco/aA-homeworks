Function.prototype.myCurry = function (numArgs) {
  const args = []
  const curried = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(null, args);
    } else {
      return curried;
    }
  };
  return curried;
};

  
Function.prototype.myBind = function (context, ...bindArgs) {
  return (callArgs) => this.apply(context, bindArgs.concat(callArgs));
};


Function.prototype.inherits = function(superclass) {
  function Surrogate() {}
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
Function.prototype.inherits = function (superclass) {
  function Surrogate() {};
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.myCurry = function(numArgs) {
  const args = [];
  const curried = (arg) => {
    args.push(arg);
    if (args.length >= numArgs) {
      return this.apply(null, args);
    } else {
      return curried
    }
  };
  return curried;
};

Function.prototype.myBind = function(context, ...bindArgs) {
}


Array.prototype.quickSort = function (func) {
   console.log("quicksort")
   func = func || function (a,b) { return a - b; };
   if (this.length < 2) { return this; }
   const pivot = this[0];
   const left = this.slice(1).filter((el) => func(el, pivot) <= 0);
   const right = this.slice(1).filter((el) => func(el, pivot) > 0);
   return left.quickSort(func).concat(pivot).concat(right.quickSort(func));
};









Array.prototype.quickSort = function(comp) {
  comp = comp || function (a,b) { return Math.sign(a-b); };
  if (this.length < 2) { return this; }
  const pivot = this[0];
  const left = this.slice(1).filter((el) => el < pivot);
  const right = this.slice(1).filter((el) => el >= pivot);
  return left.concat(pivot, right);
};


Function.prototype.inherits = function(superclass) {
  function Surrogate(){}
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
































