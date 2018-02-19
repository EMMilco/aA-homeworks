var Surrogate = function(){};
Surrogate.prototype = Animal.prototype;

function Dog(name){
  this.name = name;
  this.arf = function () { console.log("arf!"); };
}

Dog.prototype = new Surrogate();
Dog.prototype.constructor = Dog;

Dog.prototype.woof = function(){
  console.log("woof, I am " + this.name);
};

var Cat = function(name){
  this.name = name;
};

Cat.prototype = new Surrogate();

Cat.prototype.meow = function(){
  console.log("Meow, I am " + this.name)
};

function Animal(name){
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log("mm. food...");
};




// var inherits = function (parent, child) {
//  var Surrogate = function(){};
//  Surrogate.prototype = parent.prototype;
//  child.prototype = new Surrogate();
//  child.prototype.constructor = child;
//};
//var canvas = document.getElementById('canvas'); 
//var c = canvas.getContext('2d'); 
//c.fillStyle = "red"; 
//c.fillRect(100,100,400,300); 


// REMINDER: The order in which code is loaded matters.  getElementById does not work if the element has not yet been built on the page when the JS script is loaded.
//
//
//
//




Function.prototype.myBind2 = function (context) {
  return () => this.apply(context)
};

