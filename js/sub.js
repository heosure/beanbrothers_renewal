const $onTitle = document.querySelectorAll(".method > div > div h4");
const $arrow = document.querySelectorAll(".method > div > div h4 i");

$onTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    let parH = e.target.parentElement;
    parH.classList.toggle("on");
  });
});
