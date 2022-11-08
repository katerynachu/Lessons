// // MINIMUM
// // Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водій)

let car ={
    manufacturer:"Daewoo",
    model:"Matiz",
    year: 2004,
    speed:158,
    'fuel tank':1,
    'fuel consumption':5,
    driver:"Oleg"
}

    // Метод, який виводить на екран інформацію про автомобіль.
    car.aboutCar = function(){
        return alert(this.manufacturer + ' ' + this.model + ' ' + this.year +' year.Have middle speed  '+ this.speed +' and fuel tank :' + this["fuel tank"] +"litre." + " Fuel consumption per 100 km approximately:  " + this["fuel consumption"]+ " litre.")
    };
    car.aboutCar();



    // Зміна імені водія
    car.newDriver = function(a){
        if (a == null || a == ''){
            return alert('Enter correct name ,please')
       }else{
        this.driver == (a);
        return alert("Name " + this.driver + " change to " + a );
       }
    };
    let newName = prompt('Enter new name for driver')
    car.newDriver(newName);

    // Метод для перевірки імені водія
    car.checkName = function(){
    while(true){
        let checkDriver = prompt('Enter name driver for check');
        if(checkDriver == this.driver)
        return alert('Yes ' + this.driver + " correct name !")
        break;
    }
    return alert('Sorry!You are not right.Try again');

};
car.checkName();
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
let distance = +prompt('Distance?');
car.calcFuel = function(a){
    return ((a * this["fuel consumption"])/this.speed)
};
car.calcFuel(distance);
car.calcTime = function(a){
    return (a / this.speed)
}
car.calcTime(distance);
let timeForDistance = car.calcTime(distance);

car.restTime = function(){
    return (timeForDistance / 4)
}
car.restTime();
let restTime = car.restTime(distance);
car.allTime = function(){
    return (timeForDistance - restTime)
}
car.allTime();
let optimalTime = Math.ceil(car.allTime(distance));
let fuelDistance = Math.floor(car.calcFuel(distance));

confirm("If you would like drive" + car.manufacturer +" " + car.model  + " for distance " + distance + " you need :"  + fuelDistance + " litre petrol.And if you will lucky , after " + optimalTime + " hours  you will drive whole distance")

// MIDDLE
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
date = new Date ();
Hour = date.getHours();
Minutes = date.getMinutes();
Seconds = date.getSeconds();
showTime = function(){
   alert("Time now " + Hour + ":" + Minutes + ":" + Seconds);
}
showTime();
// Зміни часу на передану кількість секунд.
changesecond = function(){
    let secondChange = (date.getSeconds() - 15);
    alert("Time now " + Hour + ":" + Minutes + ":" + secondChange);
 
}
changesecond()
// Зміни часу на передану кількість хвилин.
changeMiinuts = function(){
    let minute = (date.getMinutes() + 7)
    alert("Time now " + Hour + ":" + minute + ":" + Seconds);
}
changeMiinuts()
// Зміни часу на передану кількість годин.
changeHour = function(){
let hours = (date.getHours() + 1);
alert("Time now " + hours + ":" + Minutes + ":" + Seconds);
}
changeHour()










