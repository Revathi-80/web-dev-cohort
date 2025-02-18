# Prototype

## Objective 
- The JavaScript prototype chain.
- Shadowing Properties
- Setting prototypes
- Prototype and Inheritance


### What is Prototype?

- Prototype is itself an object.
- So prototype will have its own properties making it a chain which generally refer as prototype chain.
- The chain ends where the prototype is null.

### Prototype Chain
- When we try to access a property or methods in JS, the JS engine first looks for the property or method inside the object itself, if it is not found there then it will search in the prototype of the object. Still if it is not found there then it will search in the prototype of the prototype. This is called prototype chain.

```
 const obj = {
    name: 'revathi',
    getFullName: function() {
        console.log(this.name);
    }
 }
```

- In the above code, if we do `obj.__proto__` then it will return the prototype of the object, and if we do `obj.__poto__.__proto__` then we'll get null.

### Shadowing Properties
- If we create a property or method which is already present in Object's prototype, then the user created property or method will override the in-built property or method.

- Because when we call the method it will first check in the object itself, if it is not found then it will check in the prototype.

- This is called shadowing the property.

```
const obj = {
    age: 22,
    toString: function() {
        console.log('Hi there over written the property')
    }
    
}

obj.toString(); // Hi there over written the property
```