// MINIMUM
// first task
{
let age = prompt("How old are you?");
console.log(age);
if (age >0 && age < 12){
    alert("You are child")
}else if (age >= 12 && age <=17){
    alert("You are teenager");
}else if(age > 17 && age<= 59){
    alert("You are adult")
}else if (age > 59 ){
    alert("You are retiree")
}
else {
    alert("Are you sure you've entered your age?Try late")
}
}
// second task
// {
// let userNumber = prompt("Please,enter number from 0 to 9");
// if (userNumber == 0){
//     alert("It is your symbol )")
// }else if (userNumber == 1 ){
//     alert("It is your symbol !")
// }else if (userNumber == 2 ){
//     alert("It is your symbol @")
// }
// else if (userNumber == 3 ){
//     alert("It is your symbol £")
// }else if (userNumber == 4 ){
//     alert("It is your symbol $")
// }else if (userNumber == 5 ){
//     alert("It is your symbol %")
// }
// else if (userNumber == 6 ){
//     alert("It is your symbol ^")
// }else if (userNumber == 7 ){
//     alert("It is your symbol &")
// }
// else if (userNumber == 8 ){
//     alert("It is your symbol *")
// }
// else if (userNumber == 9 ){
//     alert("It is your symbol (")
// }
// else {
//     alert("Incorrect data");
// }
// }
{
    let userNumber = +prompt("Please,enter number from 0 to 9");
    console.log(userNumber)
    switch(userNumber){
        case 0:
            alert("It is your symbol )");
            break;
        case 1:
            alert("It is your symbol !");  
            break;
        case 2:
            alert("It is your symbol @");
            break; 
         case 3:
            alert("It is your symbol £");
            break;  
         case 4:
            alert("It is your symbol $"); 
            break; 
         case 5:
            alert("It is your symbol %"); 
            break;
         case 6:
            alert("It is your symbol ^");
            break;
         case 7:
            alert("It is your symbol &"); 
            break;
         case 8:
            alert("It is your symbol *"); 
            break;  
         case 9:
            alert("It is your symbol ("); 
            break;  
         default:
            alert("Incorrect data");                
    }
}

  



// // third task   // (a+b)×(b-a+1)/2
{
    confirm('Choose a number range');
    let userStart = +prompt("Range from ..(enter the fist number)")
        userEnd = +prompt(" to .. (enter the last number)");
     summa=(userStart+userEnd)*(userEnd - userStart + 1)/2; 
    alert(summa);
}
// fourth task 
confirm('We wil help you find a common divisor of two numbers ');
let  a = +prompt('Enter fist number')
     b = +prompt ('Enter second number');
     nod = '';

     while (a!=b) {
       if (a>b) {
         a = a -b;
       }
       else {
         b = b - a;
       }
     }
     nod = a;
    console.log(nod);
    alert(nod)
// NORMAL 
// first task

let userNumber = prompt('Enter 5-numbers ');
// console.log(userNumber);
    polyNumber = userNumber.split("").reverse().join("");
    // console.log(polyNumber);

    if (userNumber == polyNumber){
        alert('That is a palindrome')
    }else {
        alert('That is a normal number')
    }
// second task
let sum = +prompt('Enter the amount of your purchase');
price =+"";
sale =+"";
if(sum <=0){
alert('Enter correct sum')
}else if(sum <=200){
    alert('Sorry,your amount will be without sale ')
}else if(sum >200 && sum<=300){
sale = Math.floor(sum/100)*3;
price = sum - sale;
alert('Your amount including discount will be ' +price);
}else if (sum>300 && sum<=500){
    sale = Math.floor(sum/100)*5;
    price = sum - sale;
    alert('Your amount including discount will be ' +price);
}else if (sum >500){
    sale = Math.floor(sum/100)*7;
    price = sum - sale;
    alert('Your amount including discount will be ' +price);
}
// // // third task  тут якась біда
let positivNumber = 0,
    negatiNumber = 0,
    nullNumber = 0,
    coupleNumber = 0,
    aloneNumber = 0;

for( i = 0 ; i<=10; i++){
    let num = +prompt("Enter  number ,please");
    console.log(num)
if(num==0 ){
    nullNumber++;
}else if(num<=-1){
    negatiNumber++;
}else if(num<0){
    positivNumber++;
}else if(num % 2 == 0){
    coupleNumber++;
}else if (num % 2!= 0 ){
    aloneNumber++;
}
else 
    alert('Enter numbers !')
}
alert(`Totally we got null : ${nullNumber}, negativ nubmers : ${negatiNumber}, positiv numbers : ${positivNumber},couple numbers:${coupleNumber},alone numbers : ${aloneNumber}`)

// fourth task
{
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let a = 0;
  while (confirm(`${days[a]}.Want to see the next day?`)) {
//    a = (a + 1)
a++;
if(a>6){
    a=0
}
  }
}








