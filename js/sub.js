const $onTitle = document.querySelectorAll(".method > div > div h4");
const $arrow = document.querySelectorAll(".method > div > div h4 i");
console.log($onTitle);

$onTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    let parH = e.target.parentElement;
    parH.classList.toggle("on");
  });
});
