if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; // points to the current object
    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i]);
      result.push(value);
    }
    return result;
  };
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      if (value) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

// Step 1: Understand the real signature of the function
// Step 2: Create a polyfill for the function
// Step 3: Use the polyfill

// Polyfill - ForEach
// No return, function  input, value, index
// calls my fn for every value
arr.myForEach(function (value, index) {
  console.log(`Value ate Index ${index} is ${value}`);
});

//Signature of Map
// Return - new Array, each element iterate, userFn

const mappingArray = arr.myMap((e) => e * 2);
console.log(mappingArray);

//Signature of filter
// return - new array ,| input:  function,
// if userFun true then add current Value

const n3 = arr.filter((e) => e % 2 == 0);
console.log(n3);
const n4 = arr.myFilter((e) => e % 2 == 0);

console.log(n4);
