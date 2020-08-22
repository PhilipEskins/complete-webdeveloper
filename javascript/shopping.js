let button = document.getElementById('enter');
let input = document.getElementById('userInput');
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  complete(li);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0  && e.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

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
