window.onload = function () {
  var swiper1 = new Swiper("#swiper1", {
    loop: true
  });

  var swiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiper3 = new Swiper('#swiper3', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiper4 = new Swiper('#swiper4', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  setTimeout(() => {
    setInterval("uplis()", 5000);
  }, 3000);

  $('.enter_img').mousedown(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).children('.enter_bg').fadeIn();
  })
  $('.enter_img').mouseup(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).children('.enter_bg').fadeOut();
  })

};
var count = 0;
function uplis() {
  if (count < $('.radio_li').length) {
    $(".radio_li").eq(count).slideUp().next().slideDown();
    count++;
  }
  if (count == $('.radio_li').length ) {
    count = 0;
    $(".radio_content").children(':first').slideDown();
  }
}
var startY, moveEndY;
document.addEventListener('touchstart', function (e) {
  startY = e.touches[0].pageY;
}, { passive: false });
document.addEventListener('touchmove', function (e) {
  moveEndY = e.touches[0].pageY;
  var y = moveEndY - startY;  
  if (y > 0 ) {
    $('.shop_top').fadeOut();
  }else {
    $('.shop_top').fadeIn();
  }
}, { passive: false });

// $('#shop_top').click(function (e) {
//   // e.stopImmediatePropagation();
// })


