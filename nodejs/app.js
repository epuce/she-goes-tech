var express = require('express')

var app = new express()

var router = express.Router()

router.get('/api/users', function(r, response) {
    var users = [
        {
          id: 1,
          avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          name: 'Jam Jimmies',
        },
        {
          id: 7,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'Jack Jimmies',
        },      
        {
          id: 10,
          avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
          name: 'Jamson Jimmies',
        },
        {
          id: 2,
          avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          name: 'Andy',
        },      
        {
          id: 5,
          avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'Johnie Jimmies',
        },
    ];

    response.send(JSON.stringify(users))
})

router.get('*', function(reject, response) {
    console.log("Response was sent to the browser")
    response.send("You accessed the node server")
})

app.use(router)

app.listen(8002, function() {
    console.log('Server is up on http://localhost:8002')
})