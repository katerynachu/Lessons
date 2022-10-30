// task1

let userName = prompt('Please,enter your name')
console.log(userName)
let userMessage = `Hello,${userName}`
alert(userMessage);

// task2

const yearNow = 2022;
let userYear = prompt ('Please,enter your year of birth')
let userAge = (yearNow - userYear)
console.log(userAge)
alert(`You are ${userAge} years old`)

// task3

let sideSquare = prompt ('Please,enter the details of the square side')
let perimetrSquare = (sideSquare * 4 )
console.log(perimetrSquare)
alert(`Perimetr your square ${perimetrSquare}` )

// task4

let radiusCircle = prompt ('Please,enter the details of the circle radius')
let squareCircle = (3.14* `${radiusCircle}`**2)
console.log(squareCircle)
alert(`Square your circle ${squareCircle}` )

// task5
let distance = prompt ('Please enter distace between your city')
let time = prompt ('Please enter time for which you want to be in place')
let speed = (`${distance}`/`${time}`)
console.log(speed)
alert(`Your speed mast be ${speed}`)

// task6
let valueUSD = prompt('How much USD you would like change?')
let valueEURO = (1)
const change = (`${valueUSD}`*`${valueEURO}`)
console.log(change)
alert(`${change} EURO you will be have`)

// task7
let valueUAH = prompt('How much UAH you would like change?')
let valueGBR = (0.023)
const changing = (`${valueUAH}`*`${valueGBR}`)
console.log(changing)
alert(`${changing} GBR you will be have`)
