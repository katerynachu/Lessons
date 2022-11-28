{// // Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.
    let block = document.getElementById('size')
    let resize = document.getElementById('size__area');
    
    
    
    
    let X,
        Y,
        startWidth,
        startHeight;
    
    function startResize (event) {
        event.preventDefault();
        X = event.clientX;
        Y = event.clientY;
        startWidth = block.offsetWidth;
        startHeight = block.offsetHeight;
        window.addEventListener('mousemove', resizing);
        window.addEventListener('mouseup', stopResize);
    }
    
    function resizing (event) {
        let changeX = event.clientX - X;
        let changeY = event.clientY - Y;
        block.style.width = `${startWidth + changeX}px`;
        block.style.height = `${startHeight + changeY}px`;
    }
    
    function stopResize () {
        window.removeEventListener('mousemove', resizing);
    }
    
    resize.addEventListener('mousedown', startResize);
      
    }