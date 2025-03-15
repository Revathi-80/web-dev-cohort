function increment() {
  let count = 0;
//   this is closure 
  return function () {
    count++;
    return count;
  };
}


const x = increment();

function createCounter(stepSize = 1, initialValue=0) {
    return function () {
        initialValue = initialValue + stepSize
        return initialValue
    }
}

const f = createCounter(3,2)

console.log(f())
console.log(f())
console.log(f())



// lexical scope in JS is a convection that determines 
// how variables are accessible in a block of code.


//  a closure is a function that has 
// access to the variable of its outer function even after the outer function 
// has finished executing

// inner function maintains the reference of lexical scope