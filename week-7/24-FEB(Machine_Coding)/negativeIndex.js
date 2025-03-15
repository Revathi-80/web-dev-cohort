let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr[-1]);

const user = {
  name: "revathi",
  age: 23,
  password: "123",
};

const proxyUser = new Proxy(user, {
  get(target, property) {
    console.log(target, property);
    if (property === "password") {
      throw new Error("Access Denied");
    }
    return target[property];
  },
  set(target, prop, user) {
    target[prop] = user;
  },
});

// console.log(proxyUser.password)

function negativeIndex() {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}

let newArr =  negativeIndex(arr)

console.log(newArr[-1])

newArr[-1] = 22
console.log(arr)
console.log(newArr)

// proxy pollyfills
//  proxy set function in browser -> loads in browser
// cdn -> map to new server -> main server ( ex) purchase power parity )
