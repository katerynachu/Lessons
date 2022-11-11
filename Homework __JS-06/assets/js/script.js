// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// let productList = [
//     {
//         name:'tomato',
//         amount:2,
//         price:4,
//         bought:true,
//  sum:function(){
//     return (this.amount * this.price)
//  }
//     },
//     {
//         name:'bread',
//         amount:1,
//         price:3,
//         bought:true,
//         sum:function(){
//             return (this.amount * this.price)
//          }

//     },
//     {
//         name:'milk',
//         amount:0,
//         price:4,
//         bought:false,
//         sum:function(){
//             return (this.amount * this.price)
//          }
//     },
//     {
//         name:'cake',
//         amount:2,
//         price:15,
//         bought:true,
//         suma:function(){
//             return (this.amount * this.price)
//                  }

//     },
//     {
//         name:'coffee',
//         amount:0,
//         price:13,
//         bought:false,
//         sum: function(){
//             return (this.amount * this.price)
         
//          }
       

//     }

// ]
let productList = [];
productList[0]= new Object();
product();
function product(name,amount,price,bought,summa){
 this.name = name;
this.amount = amount;
 this.price = price;
 this.bought = bought;
  this.summa = summa;
};

productList[0]= new product('tomato',2,5,true,(this.amount*this.price));
productList[1]= new product('cake',1,15,true,(this.amount*this.price));
productList[2]= new product('lemon',0,3,false,(this.amount*this.price));
productList[3]= new product('tea',6,1,true,(this.amount*this.price));
productList[4]= new product('coffee',0,13,false,(this.amount*this.price));
console.log(productList)



// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
    function sortProduct(a) {
        if (a.bought == true) {
            return -1;
        }
        if (a.bought !== true) {
            return 1;
        }
        return 0;
    }
productList.sort(sortProduct);
// console.log(productList)


// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
let nameProduct = prompt('Enter name product');
function buyProduct(a){
    if(a !== product.name || a === null || a == "" ){
        alert('Enter correct name')
    }else if (product.bought === true){
       alert('You already have this product')
    }else {
        product.bought = true;
        alert('Ok.YOu bought')
    }
}
console.log(productList)
console.log(productList[0].name)







