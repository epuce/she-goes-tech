var thingsToDo = document.querySelector(".js-things-to-do")

function saveForm() {
    var list = getToDoList()

    if(saveBtn.dataset.index) {
        list[saveBtn.dataset.index] = thingsToDo.value;
        saveBtn.dataset.index = ""
    } else {
    list.push(thingsToDo.value)
    }

    thingsToDo.value = ""

    localStorage.thingsToDoList = JSON.stringify(list)

    renderList()
}

function getToDoList() {
    try {
        var list = JSON.parse (localStorage.thingsToDoList)
    } catch {
        var list = []
    } 
    return list;
}


var saveBtn = document.querySelector(".js-save")
saveBtn.addEventListener("click", function() {
    saveForm()
})

document.querySelector("input")
.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            saveForm()
        }
    })



function renderList () {
var list = getToDoList()
var orderedListContent = ""

list.forEach(function(toDo, index) {
    var row = `
        <li>`+toDo+`<button class="js-modify"
                            data-index="`+index+`">
                        Modify
                    </button> 
                    <button class="js-mark-as-done" 
                             data-index="`+index+`">
                             Mark as done
                    </button>
        </li>
     `
     orderedListContent = orderedListContent + row
})

document.querySelector(".js-list").innerHTML = orderedListContent

document.querySelectorAll(".js-list .js-mark-as-done")
    .forEach (function(button) {
        button.addEventListener("click", function() {
            var list = getToDoList();

            list.splice(button.dataset.index, 1)
            localStorage.thingsToDoList = JSON.stringify(list);
            renderList()
    })
})

document.querySelectorAll (".js-list .js-modify")
    .forEach (function(button) {
        button.addEventListener("click", function() {
            var list = getToDoList();
            var toDo = list[button.dataset.index]

            thingsToDo.value = toDo

            saveBtn.dataset.index = button.dataset.index
        })
    })
}

renderList()