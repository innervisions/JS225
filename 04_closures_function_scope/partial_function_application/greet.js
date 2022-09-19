function greet(greeting, name) {
  console.log(`${greeting[0].toUpperCase()}${greeting.slice(1)}, ${name}!`);
}

function partial(primary, arg1) {
  return function (arg2) {
    return primary(arg1, arg2);
  };
}

greet('howdy', 'Joe');
greet('good morning', 'Sue');

let sayHello = partial(greet, 'Hello');
let sayHi = partial(greet, 'Hi');

sayHello('Brandon');
sayHi('Sarah');
