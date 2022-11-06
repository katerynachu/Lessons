// MINIMUM
// Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function showArgu(a,b,c){
//     console.log(showArgu.length);
// }
// showArgu();
let showArgu =(a,b,c) => alert(showArgu.length);
showArgu()

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
{let num1 = prompt('Enter first number');
    num2 = prompt('Enter second number');
    function showNumber(a,b){
        if(a < b){
          return alert("-1")
        }else if (a > b){
            return alert('1')
        }else if(a = b){
            return alert('0')
        }else {
            alert('Error');
        }
      }
     showNumber(num1,num2);}

// Напиши функцію, яка обчислює факторіал переданого їй числа.
{let num = prompt('Enter your number');

let factorial = function (n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
alert(factorial(num))}

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
{let num1 = prompt('Enter your fist number');
    num2 = prompt('Enter your second number');
    num3 = prompt('Enter your third number');

let conectNumbers = function(a,b,c){
    if(a === 0 || b === 0 || c === 0){
        return alert('Enter correct all your numbers');
    }else {
     return alert(a + b +c)
    }
}
conectNumbers(num1,num2,num3)}

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
{let fistSide = +prompt('Enter fist side rectangle');
    secondSide = +prompt('Enter second side rectangle');

function calcArea(a,b){
    if ( a == '' && b == '' ){
        alert ('Empty!Enter your number,please');
    }else if(a == '' || b == ''){
      return (a*4);
    }else{
       return (a*b);
    }
}
let area = calcArea(fistSide,secondSide);
if (isNaN(area)){
    alert("You can't use letters or symbols")
}else {
    alert(area);
}}

// NORMAL
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
{let num = +prompt('Enter your number'),
    sum = 0;


let checkPerfectNumber = function (a) {
    for(i = 1;i < a - 1; i++){
        if(a%i == 0){
            sum += i;
        }
    }
    if(a === sum){
        alert(a + " Perfect");
    }else{
        alert(a + ' Not Perfect')
    }
}
let cheksNumber =checkPerfectNumber(num);
}


// console.log(checkPerfectNumber(num))
// let num1 = +prompt('Enter your number');
// function perfectNum(num){
//     let sum = 0;
//     let reminder;
//     for(let i =1 ;i<num-1;i++){
//         reminder = num%i;
//         if(reminder === 0){
//             sum +=i;
//         }
//     }
//     if (num === sum){
//         alert(num + 'perfect');
//     }else {
//         alert('net')
//     }
// }
// perfectNum(num1);

{confirm("You mast choode range");
let min = +prompt('Enter minimum value for range'),
    max = +prompt('Enter maximum value for range');
    sum = 0,
    list = [],
    sum = 0;

function showPerfectFromRange(a, b) {

    for (let i = a; i <= b; i += 1) {
        list.push(i);
    }
    if (a > b || a == b) {
        alert('Min mast be less than Max')
    }
    return list;
}
let result = showPerfectFromRange(min, max);
console.log(result);
// let filter = list.filter(function (a) {
//     for (i = 1; i < a - 1; i++) {
//         if (a % i == 0) {
//             sum += i;
//         }
//     }
//     if (a === sum) {
//         alert(a + " Perfect");
//     } else {
//         alert(a + ' Not Perfect')
//     }
// });
// console.log(filter)
let filter = list.filter(function perfectNum(num){
        let sum = 0;
        let reminder;
        for(let i =1 ;i<num-1;i++){
            reminder = num%i;
            if(reminder === 0){
                sum +=i;
            }
        }
        if (num === sum){
            alert(num + ' Perfect');
        }else {
            alert(num + ' Not Perfect')
        }
    });
    console.log(filter)
}














