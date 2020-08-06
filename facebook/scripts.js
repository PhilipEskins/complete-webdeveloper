var database = [
  {
    username: "Andrei",
    password: "supersecret"
  }
];

var newsfeed = [
  {
    username: "Boddy",
    timeline: "So tired from all that learning"
  },
  {
    username: "Sally",
    timeline: "Javascript is so cool"
  }
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    console.log("Sorry wrong username or password");
  }
}

signIn(userNamePrompt, passwordPrompt);
