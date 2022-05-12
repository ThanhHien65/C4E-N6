function checkAge(age){
    return (Number(age) < 18 ? true : Boolean(confirm("did parents allow your?")=== false)
}
function checkAge(age){
    return((Number(age) < 18) || Boolean(Number(age) > 18) === false) === true ? true : Boolean(confirm("did parents allow your?")=== false)
}
