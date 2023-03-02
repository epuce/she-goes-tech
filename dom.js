document.getElementsByClassName("js-save-data");

const mom = "";
console.log(document.getElementsByClassName("js-save-data")); //we select all the elements with this class name, we get HTML Collection
console.log(document.querySelector(".js-save-data")); //we select one element
console.log(document.querySelectorAll(".js-save-data")); //we select all the elements with this class name

document
  .getElementsByClassName("js-save-data")[0] //we apply to only 1 button
  .addEventListener("click", function () {
    console.log("You did a click");
  });

Object.values(document.getElementsByClassName("js-save-data")).forEach(
  function (elem) {
    elem.addEventListener("click", function () {
      console.log("did a click");
    });
  }
); //we get HTML collection, it is not an array. We need to convert to an array using Object.values

document.querySelectorAll("js-save-data").forEach(function (elem) {
  elem.addEventListener("click", function () {
    console.log("did a click");
  });
}); //we can loop through the NodeLIST

document.getElementById("user-name").addEventListener("focus", function () {
  console.log("I am active");
});

const userNameInput = document.querySelector("#user-name");

function activateBlur() {
  userNameInput.classList.toggle("validation-erorr", !userNameInput.value);

  // when we leave an input we should know if input has a value or not. We are checking if there's a value
}

document.querySelector("#user-name").addEventListener("blur", activateBlur); //

document
  .querySelector(".js-save-user-name")
  .addEventListener("click", function () {
    try {
      //try performing.If it doesn't success, got to catch
      var list = JSON.parse(localStorage.list);
      //Get the list from storage, parse it to be used as an array
    } catch {
      //if localStorage.list is not parasble, go to catch. E.G. undefined is not parsable
      var list = [];
    }

    //Add the new element to the end of the list
    list.push(userNameInput.value);
    // localStorage.userName = userNameInput.value;
    // localStorage.setItem("userName", userNameInput.value); //these two are identical.

    //Save the modify list as a string
    localStorage.list = JSON.stringify(list);
  });
//localStorage is similar to an bject. We can see what is in the local storage by writing localStorage in the console

userNameInput.value = localStorage.userName; //the updated value will appear in the input tab. For 1 key it holds the last value

//local storage cannot save lists (objects) and arrays. We need to convert them to strings

// Expected output: "[3,"false",false]"

localStorage.list = JSON.stringify([1, 2, 3, 4]); //convert array to a string. We can convert back to an array
console.log(localStorage.list);
console.log(JSON.parse(localStorage.list));
