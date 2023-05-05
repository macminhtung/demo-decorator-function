function sumDecorator(fn) {
  console.log("fn =", fn);

  function wrapper(...args) {
    console.log("argumentsList =", args);
    const oldResult = fn.apply(this, args);
    console.log("oldResult =", oldResult);

    const newResult = oldResult * 10;
    return newResult;
  }

  return wrapper;
}

function sumFunction(a, b) {
  return a + b;
}

const decoratedFunction = sumDecorator(sumFunction);
const newResult = decoratedFunction(2, 3);
console.log("newResult =", newResult);