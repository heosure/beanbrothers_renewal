const $down = document.createElement("div");
$down.setAttribute("class", "down");
$down.innerHTML = `<span>down</span>`;
$wrap.prepend($down);

let swiper = new Swiper(".infoSlide", {
  pagination: {
    el: ".pg1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let swiper2 = new Swiper(".productSlide", {
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: ".proNext",
    prevEl: ".proPre",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

var swiper3 = new Swiper(".businessSlide", {
  navigation: {
    nextEl: ".busNext",
    prevEl: ".busPre",
  },
});
