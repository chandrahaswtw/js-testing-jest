const employee = {
  myName: null,
  set name(val) {
    console.log("CHAN ", val);
    this.myName = val;
  },
  get name() {
    return this.myName;
  },
};

module.exports = employee;
