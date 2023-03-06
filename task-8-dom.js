// Retrieve the domain name (hostname)
console.log(window.location.hostname, location.hostname);

// Save and then retrieve some data with localStorage
// A simple data type, like string, boolean, number, etc.

const userNameInput = document.querySelector("#user-name");
const userAge = document.querySelector("#user-age");

document.querySelector(".js-save").addEventListener("click", function () {
  localStorage.userName = userNameInput.value; //save data
  localStorage.userAge = userAge.value;
  console.log(localStorage.userName, localStorage.userAge); // retrieve data
});

// A complex data type, like object or array
document.querySelector(".js-save").addEventListener("click", function () {
  try {
    var list = JSON.parse(localStorage.list);
  } catch {
    var list = [];
  }

  list.push(userNameInput.value, userAge.value);
  localStorage.list = JSON.stringify(list); //save the data
});

console.log(JSON.parse(localStorage.list)); //retrieve data

// Create an HTML list, loop thru the list elements and add a class to each of the list elements
Object.values(document.getElementsByClassName("js-save-data")).forEach(
  function (elem) {
    elem.addEventListener("click", function () {
      alert("Nice click!");
    });
  }
);

// Create some HTML and add three different event listeners to created HTML
document.querySelector(".js-save").addEventListener("click", function () {
  alert("You've just saved the data");
});
document.getElementById("user-name").addEventListener("focus", function () {
  console.log("I am active");
});
document.addEventListener("keydown", function () {
  document.querySelector("#user-age").classList.add("key-pressed");
});

// REVIEW
console.log(window.localStorage);

// window.lert("123") is the same as alert("123")

console.log(window.navigator.userAgent); //shows on what view I'm. Shows, what is the user's device.

console.log(document.querySelector("button"));
console.log(document.querySelector(".js-save-date"));
console.log(document.querySelector("#user-name"));
console.log(document.querySelector("button.js-save-data"));
console.log(document.querySelectorAll("button"));
console.log(document.getElementById("user-name"));

//Event listeners
window.addEventListener("resize", function () {
  console.log("resized");
});
window.addEventListener("mouseleave", function () {
  console.log("MOUSE MOVED");
});
window.addEventListener("keydown", function () {
  console.log("press");
});
window.addEventListener("keyup", function () {
  console.log("up");
});
window.addEventListener("keydown", function (event) {
  console.log(event);
});
//blur is event for when you got out of focus

console.log(localStorage); //read the data from localStorage
localStorage.email = "test@test.com";
console.log(localStorage.email);
//local storage saves data as strings. If we know that data is not string, we need to stringify it ()

localStorage.userList = ["ed", "jim", "Max"]; //we cannot do this
console.log(localStorage.userList); //we get this: ed,jim,Max
localStorage.userList = JSON.stringify(["ED", "JIM", "MAX"]); //we get this:["ED","JIM","MAX"]. This is what we need to do
console.log(localStorage.userList);

localStorage.userList = JSON.stringify([
  ["ed", "jim"],
  [1, 2, 3],
]);
console.log(localStorage.userList);

console.log(JSON.parse(localStorage.userList));
