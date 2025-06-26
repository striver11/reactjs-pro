var message="hello"
var message ="world"
console.log(message)

let message2="hi"
// let message2="hye"//SyntaxError: Identifier 'message2' has already been declared
//console.log(message2) 
message2="hye";
console.log(message2)

//const message3; //SyntaxError: Missing initializer in const declaration
 
const message3="hello world";
//message3="bye world" //TypeError: Assignment to constant variable.
//const message3="bye hello" //SyntaxError: Identifier 'message3' has already been declared



//var is function scope if its inside function or global scope outside the function and also see the hoisting thing
(function() {
    var value = "before if block";
    console.log(value)
    if (true) {
        var value = 'inside if block';
        console.log(value)
    }
    console.log(value);
})();

//console.log(value)//ReferenceError: value is not defined
//console.log("let is block scope")// when i add this line it is giving this error //TypeError: console.log(...) is not a function -->got to know that this happens due to semicolon
(function() {
    let value = "before if block";
    console.log(value)
    if (true) {
        let value = 'inside if block';
        console.log(value)
    }
    console.log(value);
})();
console.log("let is block scope")


//hoisting and temporal dead zone should also be done
//Hoisting is JavaScript's way of moving declarations to the top of their scope (not initializations!).

// TL;DR:
// var → hoisted and initialized as undefined

// let and const → hoisted but not initialized = TDZ error if accessed early

// TDZ = "Don’t touch me, I’m not declared yet!"

// var declarations are hoisted to the top of their function or global scope, and initialized with undefined. So:

console.log(x); // undefined
var x = 10;

//Behind the scenes, it's like:
var x;
console.log(x); // undefined
x = 10;
//let and const are also hoisted, but not initialized. That means:
//console.log(y); // ❌ ReferenceError
let y = 5;
// Temporal Dead Zone (TDZ):
// The TDZ is the time between the hoisting of a variable and when it’s actually declared.

// For let and const, during this "zone," you can’t access the variable at all. JavaScript throws a ReferenceError to protect you from using something that’s not ready.


function greet() {
   // console.log(name); // ❌ ReferenceError
    let name = "Alice";
}
greet()
