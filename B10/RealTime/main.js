setInterval(() => {
  var today = new Date();
  let ConvertString = today.toString();
  let PushArray = ConvertString.split(" ");
  let time = PushArray[4].split(":");
  document.getElementsByClassName("day")[0].innerHTML = PushArray[0];
  document.getElementsByClassName("Hour")[0].innerHTML = time[0];
  document.getElementsByClassName("minutes")[0].innerHTML = time[1];
  document.getElementsByClassName("second")[0].innerHTML = time[2];
}, 1000);
