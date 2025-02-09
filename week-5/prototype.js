Object.prototype.chai = function () {
  console.log("chai");
};

const arr = [1, 2, 3];

const str = "Revathi";
str.length;

const obj = { x: 1 };
obj.x;
// Dot operator is used access properties of objects
obj.chai();

if(!Array.prototype.fill) {
    //Fallback - Polyfill function 
    Array.prototype.fill = function() {
        console.log("fill");
    }
}

arr.fill();