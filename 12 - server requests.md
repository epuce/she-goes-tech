## fetch - native JavaScript to communicate with the server

* [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```JS
fetch("https://reqres.in/api/users", {
        METHOD: "GET",
        // other params
    })
    .then(response => response.json())
    .then(function(data) {
        console.log(data)
    })
```

* GET - used for reading data
* POST - used for creating data
* PUT - used for updating data
* DELETE - used for deleting data


