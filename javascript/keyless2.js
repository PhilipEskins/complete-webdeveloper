//Function Declaration

// function checkDriverAge() {
//   var age = prompt("What is your age?");
//
//   if (Number(age) < 18) {
//   	alert("Sorry, you are too yound to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//   	alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//   	alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// }
//
// checkDriverAge();

//Function Expression

// let checkDriverAge = function() {
//     var age = prompt("What is your age?");
//
//     if (Number(age) < 18) {
//     	alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//     	alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//     	alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
//
// checkDriverAge();

//Argument;

function checkDriverAge(age) {
  if (Number(age) < 18) {
    console.log("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
  }
}
