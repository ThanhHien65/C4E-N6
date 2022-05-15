let obj = {
  foor: { a: "hello", b: "word" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12],
};
// let ChangeNumber = (obj.bar[3]["xyz"] = 606); //solution-1

Object.entries(obj).forEach((value, key) => {
  for (i = 0; i <= key; i++) {
    if (typeof value[i] === "object") {
      value[i].filter((value) => {
        if (value != null && typeof value == "object") {
          Object.entries(value).forEach(([values, key]) => {
            key === 6 ? (value[values] = 606) : console.log("emtpy");
            console.log(value);
          });
        }
      });
    }
  }
});
console.log(obj);
