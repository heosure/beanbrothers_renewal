const $wrap = document.querySelector(".wrap");
const $hambtn = document.querySelector(".ham");
const $nav = document.querySelector(".hd nav");
const $btnClose = document.querySelector(".event i");
const $event = document.querySelector(".event");
const $hd = document.querySelector(".hd");
const $sub = document.querySelectorAll(".sub");
const $goTop = document.querySelector(".goTop");

$btnClose.addEventListener("click", () => {
  $event.style.cssText = `display: none`;
  $hd.style.cssText = `top : 0`;
  document.querySelector(".wrap > section").style.cssText = `margin-top : 4rem`;
});

$hambtn.addEventListener("click", (e) => {
  const isOn = e.target.classList.toggle("on");
  document.body.style.cssText = `overflow : ${isOn ? "hidden " : "auto"}`;
  $nav.classList.toggle("on");
});

$nav.addEventListener("click", function (e) {
  let A = e.target;
  if (A.matches(".gnb > li > a")) {
    let siblingSub = A.nextElementSibling;
    if (siblingSub) {
      e.preventDefault();
      siblingSub.classList.toggle("on");
      $sub.forEach((sub) => {
        if (sub !== siblingSub) {
          sub.classList.remove("on");
        }
      });
    }
  } else {
    $sub.forEach((sub) => {
      sub.classList.remove("on");
    });
  }
});

$wrap.addEventListener("wheel", (e) => {
  if (scrollY > 50) {
    $goTop.style.cssText = `right : 0`;
  } else {
    $goTop.style.cssText = `right : -8rem`;
  }
});
