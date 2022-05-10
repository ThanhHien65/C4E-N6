// EX-1
// let a = 10
// let b = 15
// console.log(a>b); //false

// a = "10"
// console.log(a == 10); //True
// console.log(a === 10); //false
// let x = "5"
// let y = 6
// console.log(x !== y); //True

// EX-2
// Các giá trị được xem là truthy: chuỗi khác rỗng, số khác 0 và tất cả các object. // Bao gồm cả [ ] và { } vì mảng rỗng và chuỗi rỗng vẫn là object.
// Các giá trị được xem là falsy: undefined, null, false, 0, -0, 0n, NaN, ‘’.
// var a =10
// var b = Number(a)
// var c = a *1
// console.log(a,b,c);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));

// var a = 10
// var b = ''
// if (a){
//     console.log('a is truthy',a);
// }
// if (b){
//     console.log('a is truthy',b);
// }
// console.log(typeof(b));

// EX-3
// let a = 'mindx'
// let b = ''
// if(a || b){
//     console.log("hello");
// }
// console.log(Boolean(a || b)); True
// console.log(Boolean(a && true && !b)); True

// let a = -1 
// let b = 1
// console.log(Boolean(!a));
// console.log(Boolean(b));
// console.log(Boolean(a && b));

// let number = parseInt(prompt("nhap mot so ","3"))
// if (number % 3 == 0){
//     document.write(number + ' chia hết cho 3');
// }else{
//     document.write(number + ' không chia hết cho 3')
// }

// EX-4
// var arr = [13,23,12,45,22,48,66,100]
// for (var i in arr){
//     if (arr[i] % 2 ==0){
//         console.log(arr[i]);
//     }
// }
// var arr = [23,56,78,5,63,45,210,56]
// function deleteElement(element){
//     arr.forEach(function(item,index){
//         // console.log(item);
//         // console.log(index);
//         if (item == element){
//             arr.splice(index,1)
//         }
//     })
//     console.log(arr);
// }
// deleteElement(23)

var createInput = prompt("nhap mot so","123")
var PushtoArr = createInput.toString().split('');
var ConverNum = PushtoArr.map(Number)
console.log(ConverNum.reduce((a,b)=> a + b, 0));
