function myDecorator(cls) {
  // Modify the class here
  cls.prototype.newMethod = function() {
    console.log("Hello, world!");
  };
  return cls;
}

@myDecorator
class MyClass {}

const myObj = new MyClass();
myObj.newMethod();