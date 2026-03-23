const obj = {
  name: 'aaa',
  fn: () => {
    console.log(this.name)
  },
  fn2() {
    (() => {
      console.log(this.name)
    })()
  }
}
obj.fn();
obj.fn2()