let playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];
let sectionContent = document.querySelector('.body__content');
console.log(sectionContent)
let ol = document.createElement('ol');
console.log(ol)
sectionContent.append(ol);

for (let i in playList) {
    let li = document.createElement('li');
    let paragraph = document.createElement('p');
    paragraph.append(playList[i].author);
    paragraph.append(' : ')
    paragraph.append(playList[i].song);
    li.append(paragraph);
    ol.append(li)
}
// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
let btn = document.createElement('button'),
    p = document.createElement('p');
    p.textContent = "Open";
    btn.setAttribute("class", "content__btn");
btn.append(p)
sectionContent.append(btn);
let modalWindow;
btn.addEventListener("click", () => {
    let divModal = document.createElement("div");
    divModal.setAttribute("class", "content__modal");
    let divModalContent = document.createElement("div");
    divModalContent.setAttribute("class", "content__text");
    divModal.append(divModalContent);
    divModalContent.textContent = "This is text."
    
    let modalBtn = document.createElement("button");
    modalBtn.setAttribute("class", "content__btn");
    modalBtn.textContent = "Close";
    divModal.append(modalBtn);
    sectionContent.append(divModal);
    btn.disabled = true;
    modalBtn.addEventListener("click", () => {
        divModal.remove();
        btn.disabled = false;
    });
});
let trafficLight = document.querySelector('.body__traffic');
console.log(trafficLight);
let trafficRed = document.getElementById('red');
let trafficYellow = document.getElementById('yellow');
let trafficGreen = document.getElementById('green');
let trafficBtn = document.createElement('button');
trafficBtn.textContent = " Click ";
trafficLight.append(trafficBtn);

trafficBtn.addEventListener("click", function() {
        if (trafficRed.classList.contains("traffic__red")) {
            trafficRed.classList.remove("traffic__red");
            trafficYellow.classList.add("traffic__yellow");
          } else if (trafficYellow.classList.contains("traffic__yellow")) {
            trafficYellow.classList.remove("traffic__yellow");
           trafficGreen.classList.add("traffic__green");
          } else if (trafficGreen.classList.contains("traffic__green")) {
            trafficGreen.classList.remove("traffic__green");
           trafficRed.classList.add("traffic__red");
          }
        });

// let trafficGreen = document.createElement('div');
// trafficGreen.setAttribute("class", "traffic__red");
// let trafficYellow = document.createElement('div');
// trafficYellow.setAttribute("class", "traffic__light");
// let trafficRed = document.createElement('div');
// trafficRed.setAttribute("class", "traffic__light");
// let trafficBtn = document.createElement('button');
// trafficBtn.textContent = " Click "
// trafficLight.append(trafficGreen);
// trafficLight.append(trafficRed);
// trafficLight.append(trafficYellow);
// trafficLight.append(trafficBtn)
// console.log(trafficLight);
// trafficBtn.addEventListener("click", function() {
//     if (trafficRed.classList.contains("traffic__red")) {
//         trafficRed.classList.remove("traffic__red");
//         trafficYellow.classList.add("traffic__yellow");
//       } else if (trafficYellow.classList.contains("traffic__yellow")) {
//         trafficYellow.classList.remove("traffic__yellow");
//        trafficGreen.classList.add("traffic__green");
//       } else if (trafficGreen.classList.contains("traffic__green")) {
//         trafficGreen.classList.remove("traffic__green");
//        trafficRed.classList.add("traffic__red");
//       }
// });




