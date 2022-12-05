addEventListener('DOMContentLoaded', (event) => {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    // centerMode:true,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
           
          }
        }

      ]
})

$('.fist-screen__slider').slick({
    dots: true,
    infinite: true,
    vertical: true,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplaySpeed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    easing: 'ease',
    waitForAnimate: false

});
// BURGER_MENU
let burgerMenu = document.getElementById('burger-menu');

let overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// BTN

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


});
