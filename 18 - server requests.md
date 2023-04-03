## fetch - native JavaScript to communicate with the server

### public API endpoints
* https://reqres.in/api/users
* https://documenter.getpostman.com/view/11369613/SzmjyaXZ
* list of more public endpoints - (https://github.com/public-apis/public-apis)



## [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

* GET - used for reading data
```JS
fetch("https://reqres.in/api/users", {
    method: "GET",
    // other params
})
.then(response => response.json())
.then(function(data) {
    // returns list of users
    console.log(data)
})
```

* POST - used for creating data
```JS
var data = JSON.stringify(
    {
        name: "Ed",
        job: "farmer"
    }
)

fetch("https://reqres.in/api/users", {
    method: "POST",
    body: data,
    // other params
})
.then(response => response.json())
.then(function(data) {
    // returns id, and crated timestamp together with other data
    console.log(data)
})
```
* PUT - used for updating data
* PATCH - to update a specific part of an item where comparing to PUT the whole item is intended to be updated
```JS
var data = JSON.stringify(
    {
        name: "Ed",
        job: "farmer"
    }
)

// For this endpoint we have to specify the ID we are updating within the URL `../api/users/{id}`
fetch("https://reqres.in/api/users/2", {
    method: "PUT",
    body: data,
    // other params
})
.then(response => response.json())
.then(function(data) {
    // returns id, and crated timestamp together with other data
    console.log(data)
})
```
* DELETE - used for deleting data
```JS
// For this endpoint we have to specify the ID we are deleting within the URL `../api/users/{id}`
fetch("https://reqres.in/api/users/2", {
    method: "DELETE",
    // other params
})
.then(response => response.json())
.then(function(data) {
    console.log(data)
})
```

### jQuery syntax
```JavaScript
$.ajax({
  method: "GET",
  url: "https://reqres.in/api/users"
})
.done(function( response ) {
    $('body').append('<ul class="new-list"></ul>')

    response.data.forEach(function(val) {
        $('.new-list').append('<li>'+val.email+'</li>')
    })
});
```

## Most often Server response codes

* 1xx - Informational responses
* 2xx - Success
    * 200 - everything worked as expected
* 3xx - Redirection
* 4xx - Client errors
    * 403 - forbidden
    * 404 - not found
    * 410 - the endpoint is not there anymore 
* 5xx - Server errors
    * 500 - internal error
    * 505 - HTTP request no supported (only secure request are accepted)

---
### [full list](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### add a new file named task-14.html where all these actions will be performed

1. Create a picture gallery by loading the data from: https://fakerapi.it/api/v1/persons
2. Add needed css to style the layout as in the expected result

### Expected result

![](img/task-14.png) 


