// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
let productList = [];

function product(name,amount,price,bought){
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.bought = bought;
    this.summa = 0;
    this.calculateSumma = () => this.summa = this.amount * this.price;

    this.calculateSumma()
};

productList[0] = new product('tomato', 2, 5, true);
productList[1] = new product('cake', 1, 15, true);
productList[2] = new product('lemon', 0, 3, false);
productList[3] = new product('tea', 6, 1, true);
productList[4] = new product('coffee', 0, 13, false);
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

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
let nameProduct = prompt('Enter name product');

function buyProduct (a){
  
  for(i = 0 ; i < productList.length ; i++){
    let x = productList[i].amount
    if( a == 0 ){
        return alert('Enter correct name')
    }else if(productList[i].name == a && productList[i].bought == true){
      alert ('You are already bought this product');
      return productList[i].amount++
        break;
      
    }else if(productList[i].bought !== true){
      alert('You bought this ' + a );
      return  productList[i].amount++;
      productList[i].bought = true;
       
    }

  }
};
console.log(buyProduct(nameProduct))
console.log(productList)

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
let productDel = prompt('Enter name product,which you would like delete');
let newProductList = productList.slice();
function deleteProduct (a){
    for(i = 0 ; i < productList.length ; i++){
      if( a == 0 ){
          return alert('Enter correct name')
      }else if(newProductList[i].name == a && productList[i].bought == true){
        alert ('You delete this product');
     newProductList.splice(i,1);
     return newProductList
          break;
        
      }

    }
}
deleteProduct(productDel)
console.log(newProductList)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
let yourProduct = prompt('Enter name product ');


function buyNewProduct (a){
    for(i = 0 ; i < productList.length ; i++){
        if (a == 0 || a == " "){
            alert( "Enter correct name product");
            break;
        }else if(a == productList[i].name){
            productList[i].amount++;
        }else if (productList[i].name !== a ){
            return productList.push(new product);
        }
    } 
 


    
}
buyNewProduct(yourProduct);
function addProduct(a){
    let x = (productList.length - 1);
    console.log(x)
    productList[x].name = a;
}
addProduct(yourProduct)

console.log(productList)

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
let sum = 0;
function sumAllProduct(a){
    arr = [];
  for(i = 0 ; i < productList.length ; i++){
    if (productList[i].bought == true){  
sum += productList[i].summa
    }
  }
  return sum;

}
sumAllProduct(productList);
console.log(sum)
// Підрахунок суми всіх (не) придбаних продуктів.
let sumNotBought = 0;
function sumNotBoughts(a){
    arr =[];
    for(i = 0 ; i < productList.length ; i++){
        if (productList[i].bought == false){  
            sumNotBought += productList[i].summa
                }
              }
              return  sumNotBought;
    }
sumNotBoughts(productList);
console.log(sumNotBought)

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
function compareNumbers(a, b) {
    return a.summa - b.summa;
  }
  productList.sort(compareNumbers);
  console.log(productList);
  productList.reverse(compareNumbers);
  console.log(productList)


