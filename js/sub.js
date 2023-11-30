const $onTitle = document.querySelectorAll(".method > div > div h4");

$onTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    let parH = e.target.parentElement;
    parH.classList.toggle("on");
  });
});
