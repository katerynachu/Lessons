
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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


