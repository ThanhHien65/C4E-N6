userlogin = () => {
  return prompt("username : ", "Admin");
};
passlogin = () => {
  if (userlogin() === "Admin") {
    let getpass = prompt("password : ");
    switch (true) {
      case getpass === null || getpass == "":
        alert("da huy");
        break;
      case getpass.toLowerCase() !== "mindX".toLowerCase():
        alert("Mat khau sai");
        break;
      case getpass.toLowerCase() === "mindX".toLowerCase():
        alert("Chao Mung");
        break;
    }
  }
};
passlogin();
