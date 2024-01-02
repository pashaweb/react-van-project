class myProm {
  constructor(fn) {
    this.callbacks = [];
    this.data = null;
    fn((data) => {
      this.data = data;
      let calData = this.data;
      this.callbacks.forEach((cb) => {
        calData = cb(calData);
      });
    });
  }

  then(cb) {
    if (this.data || this._calllNext) {
      this._calllNext = true;
      this.data = cb(this.data);
      return this;
    } else {
      this.callbacks.push(cb);
      return this;
    }
  }
}

const p = new myProm(function (resolve) {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}).then((res) => {
  console.log(res);
  return res + 1;
});
