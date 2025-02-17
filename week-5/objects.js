let fname = "revathi";
let fname2 = fname;

console.log(fname);

fname2 = "P";

console.log(fname);

let p1 = {
  fname: "revathi",
  lname: "p",
  address: {
    house_no: '11 '
  }
};
// let p2 = p1;
// let p2 = {
//     fname: p1.fname,
//     lname: p1.lname
//     address: p1.address   // reference is copied
// }

let p2 = { ...p1 }; // spread operator: copies first level of objects  ----- shallow copy 

p2.fname = "demo";
console.log(p2);
console.log(p1);
