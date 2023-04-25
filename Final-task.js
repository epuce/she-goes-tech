const btnOpenForm = document.querySelector(".btn-open");
const guestsTrue = document.querySelector(".js-checkbox");
let guestNumberList = document.querySelector(".js-guest-number-list");
let active = false;

btnOpenForm.addEventListener("click", () => {
  const openForm = document.getElementById("form-wrapper");
  active = !active;
  if (active) {
    openForm.style.display = "block";
    btnOpenForm.classList.add("active");
    btnOpenForm.innerHTML = "Close form";
  } else {
    openForm.style.display = "none";
    btnOpenForm.classList.remove("active");
    btnOpenForm.innerHTML = "Open form";
  }
});

guestsTrue.addEventListener("change", function () {
  if (this.checked) {
    guestNumberList.style.display = "block";
  } else {
    guestNumberList.style.display = "none";
  }
});

function saveForm() {
  let nameInput = document.querySelector(".js-name");
  let emailInput = document.querySelector(".js-email");
  let guestNumberInput = document.querySelector(".js-guest-number");
  let isFormValid = true;

  if (nameInput.value.length < 3) {
    nameInput.classList.add("validation-error");
    isFormValid = false;
    alert("The name should be at least 3 letters!")
  } else {
    nameInput.classList.remove("validation-error")
  }

  if (emailInput.value.length < 3) {
    nameInput.classList.add("validation-error");
    isFormValid = false;
    alert("The name should be at least 3 letters!")
  } else {
    nameInput.classList.remove("validation-error")
  }

  if (isFormValid) {
    let user = {
      name: nameInput.value,
      email: emailInput.value,
      guestNumber: guestNumberInput.value,
    };

    let list = getGuestList();

    list.push(user);

    localStorage.guestList = JSON.stringify(list);

    nameInput.value = "";
    emailInput.value = "";
    document.querySelector(".js-checkbox").checked = false;
    guestNumberList.style.display = "none";

    renderTable();
  }
}

function getGuestList() {
  try {
    var list = JSON.parse(localStorage.guestList);
  } catch {
    var list = [];
  }

  return list;
}

document.querySelector(".js-submit").addEventListener("click", function () {
  saveForm();
});

function renderTable() {
  let list = getGuestList();
  let tableContent = "";

  list.forEach(function (user, index) {
    var row =
      `
        <tr>
            <td>` +
      (index + 1) +
      `</td>
            <td>` +
      user.name +
      `</td>
            <td>` +
      user.email +
      `</td>
            <td>` +
      user.guestNumber +
      `</td>
        </tr>
    `;
    tableContent = tableContent + row;
  });

  document.querySelector(".js-guest-table").innerHTML = tableContent;
}

renderTable();
