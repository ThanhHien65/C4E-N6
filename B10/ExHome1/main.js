let person = {
  name: "bob",
  occupation: "web developer",
  hobbies: "painting",
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
Object.entries(person).forEach(([key, value]) => {
  console.log(key);
  console.log(value);
});
Object.keys(person).forEach((key, value) => {
  console.log(`${person[key]} `);
});
