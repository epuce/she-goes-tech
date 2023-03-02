// Retrieve the domain name (hostname)
console.log(window.location.hostname);
// Save and then retrieve some data with localStorage
// A simple data type, like string, boolean, number, etc.

const userNameInput = document.querySelector("#user-name");
const userAge = document.querySelector("#user-age");

document.querySelector(".js-save").addEventListener("click", function () {
  localStorage.userName = userNameInput.value;
  localStorage.userAge = userAge.value;
});

// A complex data type, like object or array
document.querySelector(".js-save").addEventListener("click", function () {
  try {
    var list = JSON.parse(localStorage.list);
  } catch {
    var list = [];
  }

  list.push(userNameInput.value, userAge.value);
  localStorage.list = JSON.stringify(list);
});

console.log(localStorage.list);
console.log(JSON.parse(localStorage.list));

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
