let button = document.getElementById('enter');
let input = document.getElementById('userInput');

function addClick() {
  let li = document.getElementsByTagName("li");
  for(q = 0; q < li.length; q++) {
    li[q].addEventListener("click", (e) => e.target.classList.toggle("done"));
  }
}
