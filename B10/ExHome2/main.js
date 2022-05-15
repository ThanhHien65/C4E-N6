let obj = {
  a: 2,
  b: 1,
  c: 3,
};
console.log(Object.keys(obj).map((name) => name.toUpperCase()));
console.log(Object.entries(obj).map(([keys, value]) => keys.toUpperCase()));
a = [];
Object.entries(obj).forEach((key, value) => {
  a.push(key[0].toUpperCase());
});
for (key in obj){
  a.push(key.toUpperCase())
}
console.log(a);
