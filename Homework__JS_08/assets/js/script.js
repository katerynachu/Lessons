// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
let textDiv = document.getElementById('text');
let textArea = document.getElementById('text-area');

document.addEventListener('keydown',function keyClick (event)
{
    console.log(event)
if(event.ctrlKey &&  event.keyCode == '69'){
        event.preventDefault()
textDiv.style.display = 'none';
textArea.style.display = 'block' ;
   textArea.innerHTML = textDiv.innerHTML;
 return textArea;
}else if(event.ctrlKey && event.keyCode == '83'){
    event.preventDefault()
    textDiv.style.display = 'block';
     textArea.style.display = 'none' ;
    textDiv.innerHTML =  textArea.value;
    return textDiv;
}
})

