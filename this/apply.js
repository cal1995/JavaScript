const obj = {
  a: 1,
  b: 2,
}

const fn = function(...args){
  //console.log(args, typeof args, Array.isArray(args))
  let sums = 0, logs = '';

  for(let i = 0; i < args.length; i++) {
    sums += args[i];
    if(i === args.length - 1) {
      logs += `${args[i]} = `;
      break;
    }
    logs += `${args[i]} + `
  }
  console.log(logs, sums)
  return sums;
  // console.log('a + b = ', a + b);
  // return a + b
}

// fn.apply(obj, [1, 2, 3])

// fn(1, 2, 3, 4)

fn.apply(obj, [2, 3, 4, 6, 7])