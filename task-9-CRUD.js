
function saveForm() {
    var isFormValid = true;

    if (isFormValid) {
        var user = {
            item: itemInput.value
        };

        try {
            var list = JSON.parse(localStorage.itemList);
        } catch {
            var list = getItemList ();
        }
    }

    list.push(user)
}

function getItemList() {
    try {
      var list = JSON.parse(localStorage.itemList);
    } catch {
      var list = [];
    }
    return list;
  }

  document.querySelector(".js-add").addEventListener("click", function () {
    saveForm();
  });



 

   