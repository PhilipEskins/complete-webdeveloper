var first = prompt("Enter first number");
if (isNaN(first) === true) {
  alert("That is not a number");
} else {
  var second = prompt("Enter second number");
  if (isNaN(second) === true) {
    alert("That is not a number");
  } else {
    var operator = prompt("Enter operator (ie +, -, *, /, %)");
    if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%") {
      var total = eval(first + operator + second);
      var sum = alert("The sum is: " + total);
    } else {
      alert("You didn't enter a valid operator");
    }
  }
}
// var total = Number(first) + operator + Number(second);
