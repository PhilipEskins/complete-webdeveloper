const first = prompt("Enter first number");
if (isNaN(first) === true) {
  alert("That is not a number");
} else {
  const second = prompt("Enter second number");
  if (isNaN(second) === true) {
    alert("That is not a number");
  } else {
    const operator = prompt("Enter operator (ie +, -, *, /, %)");
    if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%") {
      let total = eval(first + operator + second);
      alert(first + " " + operator + " " + second + " = " + total);
    } else {
      alert("You didn't enter a valid operator");
    }
  }
}
// var total = Number(first) + operator + Number(second);
