$('.slider__item').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  let h3 = document.getElementsByClassName('card__h3--active')
  let path = document.getElementsByClassName('path-active')
  $(function(){
    $(".card__tabs-item").click(function() {
  $(h3).css({
    "color": "white"
  })
  $(path).css({
    "stroke": "white"
  })
    });
});
