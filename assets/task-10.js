location.hostname

localStorage.isAdminUser = 1

localStorage.favFoods = JSON.stringify(["Burger", "Pizza", "Hot dog"])

// <table>
//  <tbody>
//    <tr class="list-item">
//        <td>item 1</td>
//    </tr>
//    <tr class="list-item">
//        <td>item 2</td>
//    </tr>
//    <tr class="list-item">
//        <td>item 3</td>
//    </tr>
//  </tbody>
//</table>

Object.values(document.getElementsByClassName('list-item')).forEach(function(element) {
    element.classList.add('some-class')
})

// <button class="js-save-button"></button>

document.getElementsByClassName('js-save-form')[0].addEventListener('click', () => {
    console.log("button clicked")
})

// <body></body>
document.getElementsByTagName('body')[0].addEventListener('scroll', () => {
    console.log("scrolled")
})

// <input id="some-input"/>

document.getElementById('some-input').addEventListener('keydown', (e) => {
    console.log(e.keyCode)
})