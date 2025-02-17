Function.prototype.describe = function () {
    console.log('bind');
}

function greet(name) {
    console.log(`Hello ${name}`);
}

greet('revathi')
greet.describe()
greet.describe('hhiiih')
// console.log(greet('revathi').describe)


// function declaration
function add(a, b) {
    return a + b;
}

// function expression
const substract = function (aa,b) {
    return aa - b;
}

console.log(add(1,2));
console.log(substract(1,2));


// first class function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const result = applyOperation(1,2,(x,y) => x/y);
console.log(result);


// tiffin concept
function createCounter(){
    let count = 0;
    return function () {
        count++;
        return count;
    } 
}

const counter = createCounter();
console.log(counter());


function onef() {
    let myName  = 'revathi'
}

// IIFE - Immediately Invoked Function Expression
(function (){
    console.log('revathi chh');
}) ()

