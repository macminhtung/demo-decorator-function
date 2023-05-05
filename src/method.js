//########################
//# ==> NO ARGUMENTS <== #
//########################
function myDecorator(target, name, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    console.log("argumentsList =", args);
    const oldResult = originalMethod.apply(this, args);
    console.log("oldResult =", oldResult);

    const newResult = oldResult * 10;
    return newResult;
  }

  return descriptor;
}

class MyClass {
  @myDecorator
  sum(a, b) {
    return a + b;
  }
}

const myObj = new MyClass();
const newResult = myObj.sum(2, 3);
console.log("newResult =", newResult);

//##########################
//# ==> WITH ARGUMENTS <== #
//##########################
function argumentDecorator(argDecorator) {
  console.log("argDecorator =", argDecorator);

  return function(target, name, descriptor) {
    // target -> refers to the class prototype
    // name -> refers to the name of the method being decorated
    // descriptor -> refers to the method descriptor object
    console.log("target =", target);
    console.log("methodName =", name);
    console.log("descriptor =", descriptor);

    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      console.log("argumentsList =", args);
      const oldArgResult = originalMethod.apply(this, args);
      console.log("oldArgResult =", oldArgResult);
  
      const newArgResult = oldArgResult * 10;
      return newArgResult;
    }

    return descriptor;
  }
}

class ARGClass {
  @argumentDecorator("my argument")
  sumMethod(a, b) {
    return a + b;
  }
}

const argObj = new ARGClass();
const newArgResult = argObj.sumMethod(2, 3);
console.log("newArgResult =", newArgResult);