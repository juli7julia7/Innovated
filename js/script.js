const slider = $('.content-reviews').bxSlider({
   pager: false,
   controls: false,
   infiniteloop: true,
   touchEnabled: true,
   hideControlOneEnd: false,
});

$('.button--prev').click((e) => {
   e.preventDefault();
   slider.goToPrevSlide();
});

$('.button--next').click((e) => {
   e.preventDefault();
   slider.goToNextSlide();
});



