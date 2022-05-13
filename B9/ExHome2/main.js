ask = (question, yes, no) => constructor(question) ? yes() : no()
ask(
  "Do you agree?",
  () => console.log("You agreed"),
  () => console.log("You canceled the execution.")
);

