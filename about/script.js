const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween:40,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //reposion break
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    640: {
      slidesPerView:2,
    },
    1280: {
      slidesPerView:3,
    }
  }

  });
