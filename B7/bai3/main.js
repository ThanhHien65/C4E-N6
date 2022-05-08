// let oneyear = document.createElement("h2");
// oneyear.innerText = `So thang trong nam`
// document.body.appendChild(oneyear)
// for (let month = 1; month < 13; month++) {
//     // console.log(month);
//     // document.write("thang ", month )
//     const pushcontent = document.createElement("p");
//     pushcontent.innerText = `Thang ${month}`;
//     document.body.appendChild(pushcontent);
// }
let getinput = parseInt(prompt("Enter a Value", "1"));
if (isNaN(getinput)) {
    alert('It is not a number'); 
} else if (getinput === 0) {
    alert('0 x n = 0 ');
} else {
   let createtittle = document.createElement("h2")
   createtittle.innerText =`bang cuu chuong ${getinput}`
   document.body.appendChild(createtittle)
    for (let i = 1; i < 11; i++){
        const result = document.createElement("p")
        result.innerText = `${getinput} x ${i} = ${getinput * i}`
        document.body.appendChild(result)
    }
}
