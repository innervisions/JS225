function extend(destination) {
  for (let i = 0; i < arguments.length; i++) {
    let source = arguments[i];
    Object.getOwnPropertyNames(source).forEach(property => {
      destination[property] = source[property];
    });
  }

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
