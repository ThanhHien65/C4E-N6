let oneyear = document.createElement("h2");
oneyear.innerText = `So thang trong nam`
document.body.appendChild(oneyear)
for (let month = 1; month < 13; month++) {
    // console.log(month);
    // document.write("thang ", month )
    const pushcontent = document.createElement("p");
    pushcontent.innerText = `Thang ${month}`;
    document.body.appendChild(pushcontent);
}