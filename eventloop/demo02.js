// function a() {
//   console.log(1)
//   Promise.resolve().then(function(){
//     console.log(2)
//   })
// }

// setTimeout(() => {
//   console.log(3)
//   Promise.resolve().then(a)
// }, 0);

// Promise.resolve().then(function() {
//   console.log(4)
// })

// console.log(5)

// 5、4、3、1、2



// function a() {
//   console.log(1)
//   Promise.resolve().then(function(){
//     console.log(2)
//   })
// }

// setTimeout(() => {
//   console.log(3)
//   Promise.resolve().then(a)
// }, 0);

// Promise.resolve().then(a)

// console.log(5)
//5、1、2、3、1、2 



function a() {
  console.log(1)
  Promise.resolve().then(function(){
    setTimeout(() => {
      console.log(2)
    }, 0);
  })
}

setTimeout(() => {
  console.log(3)
}, 1000);

Promise.resolve().then(a)

console.log(5)