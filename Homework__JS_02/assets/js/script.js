// MINIMUM
// fist task
{
    confirm("We are try add 0.1 to 0.2")
    let numbersTogether = ((0.1 * 10) + (0.2 * 10)) / 10
    //  console.log(numbersTogether)
    alert('We Fixed this bug and have  ' + numbersTogether);
}

// second task
{
    confirm("We are try add 1 to 2")
    let fistString = '1';
// alert(typeof fistString);
fistNumber = Number(fistString);
// alert(typeof fistNumber);
secondNumber = 2;

let allTogether = fistNumber + secondNumber;
// console.log(allTogether)
alert('Result will be  ' + allTogether);
}

// third task
{
    let valueFlash1 = prompt('What is size in Gigabytes your flash-drive?','')
console.log(valueFlash1);
let valueFlash2 = Number(valueFlash1);
// console.log(typeof(valueFlash2))
let valueFlashMb = valueFlash2 * 1000
// console.log(valueFlashMb)
let resultFile = valueFlashMb / 820
// console.log(resultFile)
let resultFileFloor = Math.floor(resultFile)
alert(`You can have ${resultFileFloor} files in your flash-drive`  );
}

// NORMAL
// fist task
{
    let userMoney1 = prompt('How much money do you have ?');
// console.log(userMoney1);
userMoney = Number(userMoney1);
// console.log (typeof(userMoney));
let chocolatePrice1 = prompt('How much does one chocolate cost?');
chocolatePrice = Number(chocolatePrice1)

let userResult = userMoney / chocolatePrice;
userResult = userResult.toFixed('');
// console.log(userResult)
alert(`You will have ${userResult} chocolate`)
let change = userMoney % chocolatePrice;
// console.log(change)
alert(`Your change ${change} `)
}

// second task
{
let number = prompt('Say me three-digit number ,please');
let resultNumber = number.split('');
alert(resultNumber.reverse().join(''));
}

// MAXIMUM
// fist task
{
    let bank = prompt('How much do you to deposit?');
    bankNumber = Number(bank);
    let yearPercent = (bankNumber * 5)/100;
    // console.log (yearPercent)
    let monthPercent = yearPercent/12;
    monthPercent = monthPercent.toFixed(2);
    // console.log(monthPercent)
    monthPercent2 = monthPercent*2;
    alert(`You will earn ${monthPercent2}`)
}


