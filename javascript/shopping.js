let button = document.getElementById('enter');
let input = document.getElementById('userInput');

//function to add event listener to existing li elements
function addClick() {
  let li = document.getElementsByTagName("li");
  for(q = 0; q < li.length; q++) {
    complete(li[q]);
  }
}

//function to toggle the class done on each item
function complete(item) {
  item.addEventListener("click", (e) => e.target.classList.toggle("done"));
}

addClick();
