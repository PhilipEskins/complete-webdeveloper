var database = [
  {
    username: "andrei",
    password: "supersecret"
  },
  {
    username: "sally",
    password: "123"
  },
  {
    username: "ingrid",
    password: "777"
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
  },
  {
    username: "Mitch",
    timeline: "Javascript is pretty cool!"
  }
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function isUserValid(username, password) {
  for(var i=0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
    return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    console.log("Sorry wrong username or password");
  }
}

signIn(userNamePrompt, passwordPrompt);
