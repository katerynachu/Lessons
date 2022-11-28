{// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
    let textDiv = document.getElementById('text');
    let textArea = document.getElementById('text-area');

    document.addEventListener('keydown', function keyClick(event) {
        console.log(event)
        if (event.ctrlKey && event.keyCode == '69') {
            event.preventDefault()
            textDiv.style.display = 'none';
            textArea.style.display = 'block';
            textArea.innerHTML = textDiv.innerHTML;
            return textArea;
        } else if (event.ctrlKey && event.keyCode == '83') {
            event.preventDefault()
            textDiv.style.display = 'block';
            textArea.style.display = 'none';
            textDiv.innerHTML = textArea.value;
            return textDiv;
        }
    })
}

// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

// {
//     let productList = [] ;
//     function product(name, amount, price, bought) {
//         this.name = name;
//         this.amount = amount;
//         this.price = price;
//         this.bought = bought;
//         this.summa = 0;
//         this.calculateSumma = () => this.summa = this.amount * this.price;

//         this.calculateSumma()
//     };

//     productList[0] = new product('tomato', 2, 5, true);
//     productList[1] = new product('cake', 1, 15, true);
//     productList[2] = new product('lemon', 0, 3, false);
//     productList[3] = new product('tea', 6, 1, true);
//     productList[4] = new product('coffee', 0, 13, false);
//     console.log(productList)

//     let table = document.querySelector('.table');
//     let tr;
//     let td;
//     let tm;
//     let tp;
//     let ts;
//     console.log(table)
//     for (let i in productList) {
//         tr = document.createElement('tr');
//         tr.setAttribute("class", "element__tr");
//         td = document.createElement('td');
//         td.setAttribute("class", "element__name");
//         tm = document.createElement('td');
//         tp = document.createElement('td');
//         ts = document.createElement('td');
//         td.append(productList[i].name);
//         tm.append(productList[i].amount);
//         tp.append(productList[i].price)
//         ts.append(productList[i].summa);
//         tr.append(td);
//         tr.append(tm);
//         tr.append(tp);
//         tr.append(ts);
//         table.append(tr);

//     }
// let nameList;
// function gh(){
//   nameList= productList.map(productList => productList.name + ' ')
//     return nameList;
// }
// gh();
// console.log(nameList)
// let nameTable = document.querySelector('.table__product');
// nameTable.addEventListener('click', e => {
//    for(let i in productList){

//    }
//    td.innerHTML =  nameList.sort()
    
//    });

//     }




// {const div = document.getElementById("table");
// const table = document.getElementById("body__table");
// let productList = [] ;
//     function product(name, amount, price) {
//         this.name = name;
//         this.amount = amount;
//         this.price = price;


//     };
// let arrProd = [
//   new product("Cucumber", 3, 15),
//   new product("Cucumber", 3, 15),
//   new product("aucumber", 3, 15),
//   new product("Cucumber", 3, 15),
//   new product("Cucumber", 3, 15),
//   new product("bucumber", 3, 15),
//   new product("Cucumber", 3, 15),
//   new product("tucumber", 3, 15),
//   new product("Cucumber", 3, 15),
// ]
// console.log(arrProd)

//    let head = document.createElement("tr");
//     // head.setAttribute("style", "font-size: 18px;");
//    let th1 = document.createElement("th");
//     th1.textContent = "Name";
//     th1.setAttribute("id", "content__th1");
//     // th1.style.cursor = "pointer";
//   let th2 = document.createElement("th");
//     th2.textContent = "Amount";
//     th2.setAttribute("id", "content__th2");
//     // th2.style.cursor = "pointer";
//    let  th3 = document.createElement("th");
//     th3.textContent = "Price";
//     th3.setAttribute("id", "content__th3");

//     head.append(th1);
//     head.append(th2);
//     head.append(th3);
//    table.append(head);

//     for (let i in arrProd) {
//         let tr = document.createElement("tr");
//         table.append(tr);
//         for (let j in arrProd[i]) {
//           let td = document.createElement("td");
//           td.textContent = arrProd[i][j];
//           tr.append(td);
//         }
//       }
//       let nameList;
//       function gh(){
//         nameList= arrProd.map(arrProd => arrProd.name + ' ')
//           return nameList;
//       }
//       gh();
//       console.log(nameList)
//       let nameTable = document.querySelector('#content__th1');
//       nameTable.addEventListener('click', e => {
//          for(let i in arrProd){
      
//          }
//          table.innerHTML =  nameList.sort()
          
//          });
 


//         }
