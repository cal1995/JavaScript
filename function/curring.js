// 函数柯里化

function add(a, b, c, d){
  return a + b + c + d
}

const sum = add(1, 2, 3, 4)
// console.log(sum)

function curring(fn, ...args) {
  return function(...rest) {
    const allArgs = args.concat(rest)
    if(allArgs.length === fn.length) {
      return fn.apply(null, allArgs)
    }
    return curring(fn, ...allArgs)
  }
}

const sum1 = curring(add, 1, 2)(2, 3);
console.log(sum1)
