let globalVar = "I'm global var";

function modify() {
  globalVar = "Modified";
  let blockVar = "I'm blocked";
}

modify();
console.log(globalVar);
