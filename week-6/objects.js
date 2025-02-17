const obj1 = {
    fname: 'revathi',
    lname: 'p',
    getFullname: function () {
        return `${this.fname} ${this.lname}`
    }
}

// Violating the DRY principle
const obj2 = {
    fname: 'demo',
    lname: '1',
    // getFullname: function () {
    //     return `${this.fname} ${this.lname}`
    // }

}

obj2.__proto__ = obj1;

console.log(obj1.getFullname());
console.log(obj2.getFullname());
console.log(obj2.toString());
