{// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

// // {
// //     let productList = [] ;
// //     function product(name, amount, price, bought) {
// //         this.name = name;
// //         this.amount = amount;
// //         this.price = price;
// //         this.bought = bought;
// //         this.summa = 0;
// //         this.calculateSumma = () => this.summa = this.amount * this.price;

// //         this.calculateSumma()
// //     };

// //     productList[0] = new product('tomato', 2, 5, true);
// //     productList[1] = new product('cake', 1, 15, true);
// //     productList[2] = new product('lemon', 0, 3, false);
// //     productList[3] = new product('tea', 6, 1, true);
// //     productList[4] = new product('coffee', 0, 13, false);
// //     console.log(productList)

// //     let table = document.querySelector('.table');
// //     let tr;
// //     let td;
// //     let tm;
// //     let tp;
// //     let ts;
// //     console.log(table)
// //     for (let i in productList) {
// //         tr = document.createElement('tr');
// //         tr.setAttribute("class", "element__tr");
// //         td = document.createElement('td');
// //         td.setAttribute("class", "element__name");
// //         tm = document.createElement('td');
// //         tp = document.createElement('td');
// //         ts = document.createElement('td');
// //         td.append(productList[i].name);
// //         tm.append(productList[i].amount);
// //         tp.append(productList[i].price)
// //         ts.append(productList[i].summa);
// //         tr.append(td);
// //         tr.append(tm);
// //         tr.append(tp);
// //         tr.append(ts);
// //         table.append(tr);

// //     }
// // let nameList;
// // function gh(){
// //   nameList= productList.map(productList => productList.name + ' ')
// //     return nameList;
// // }
// // gh();
// // console.log(nameList)
// // let nameTable = document.querySelector('.table__product');
// // nameTable.addEventListener('click', e => {
// //    for(let i in productList){

// //    }
// //    td.innerHTML =  nameList.sort()
    
// //    });

// //     }




let tableList = [
    {
        city: 'London',
        year: 1863,
        kilometres: 394,
        passengers: 775
    }, 
    {
        city: 'Paris',
        year: 1900,
        kilometres: 199,
        passengers: 1191
    }, 
    {
        city: 'Los Angeles',
        year: 2001,
        kilometres: 28,
        passengers: 50
    }, 
    {
        city: 'Tokyo',
        year: 1927,
        kilometres: 155,
        passengers: 1927
    }, 
    {
        city: 'Kyoto',
        year: 1981,
        kilometres: 11,
        passengers: 45
    },
    {
        city: 'Washington',
        year: 1976,
        kilometres: 126,
        passengers: 144
    }
];

    let sortType = null;
    let div = document.getElementById('table');
    let table = document.createElement('table');
    let headTable = document.createElement('thead');
    let bodyTable = document.createElement('tbody');
    div.append(table);
    table.append(headTable);
    table.append(bodyTable);
    headTable.setAttribute("class", "table__head");

    function addHeading () {
        let i = 0;
        for (let param in tableList[0]) {
            let heading = document.createElement('th');
            heading.innerHTML = param;
            heading.id = `${param}-heading`;
            i++;
            headTable.append(heading);
        }
    }
    addHeading();

    function addContentTable () {
        for (let item of tableList) {
            let tableRow = document.createElement('tr');
            bodyTable.append(tableRow);
            for (let param in item) {
                let tableCell = document.createElement('td');
                tableCell.innerHTML = item[param];
                tableRow.append(tableCell);
            }
        }
    }
    addContentTable();

    headTable.addEventListener('click', sort);

    function sort (event) {
        if ((event.target.id.includes('heading'))) {
            let sortedBy = event.target.id.replace('-heading', '');
            tableListSort(sortedBy);
            bodyTable.innerHTML = '';
            addContentTable();
        }
    }

    function tableListSort (sortedBy) {
        if (!sortType) sortType = 'ASC';
        if (sortType === 'ASC') {
            tableList.sort((a,b) => a[sortedBy] > b[sortedBy] ? 1 : -1);
            sortType = 'DESC';
            return;
        }
        if (sortType === 'DESC') {
            tableList.sort((a,b) => a[sortedBy] > b[sortedBy] ? -1 : 1);
            sortType = 'ASC';
            return;
        }
    }

}