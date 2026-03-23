
// console.log(1);
// const fn = () => {
//   console.log(2)
//   setTimeout(() => {
//     console.log(3)
    
//   }, 0);
//   const a = new Promise((res, rej) => {
//       res(4)
//     });
//     a.then((res) => {
//       console.log('res', res)
//     })
// }
// fn()


//
function timeout(ms) {
  return new Promise(function(resolve){
    setTimeout(resolve, ms, 'done');
  })
}
timeout(1000).then(res => {
  console.log('res', res)
})