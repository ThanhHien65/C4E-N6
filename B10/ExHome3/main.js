let myfamily = {
  quantity: 4,
  member: ["dad", "mom", "me", "daughter"],
  location: "viet nam",
};
let family = { myfamily };
Object.entries(family.myfamily).forEach(([value, key]) => {
  console.log(value);
  console.log(key);
});
