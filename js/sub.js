const $onArr = document.querySelectorAll(".method > div > div > div  i");
console.log($onArr);

$onArr.forEach((title) => {
  title.addEventListener("click", (e) => {
    let divH = e.target.parentElement.parentElement;
    divH.classList.toggle("on");
    e.target.classList.toggle("on");
  });
});
