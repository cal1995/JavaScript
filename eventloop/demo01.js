

const delay = (m) => {
  const start = Date.now();
  while(Date.now() - start < m) {}
}


console.log(1)
delay(1000)   // 死循环，不是阻塞

setTimeout(() => {
  console.log(2)
}, 3000);

//先输出1， 1秒后执行settimeout，3秒后再输出2