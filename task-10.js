location.hostname

localStorage.isAdminUser = 1

localStorage.favFoods = JSON.stringify(["Burger", "Pizza", "borsch"])

Object.values(document.getElementsByClassName('list-item')).forEach(function(element){
    element.classList.add('some-class')
});

document.getElementsByTagName('body')[0].addEventListener('scroll',()=> {
        console.log("scrolled")
})


document.getElementsByTagName('some-input')[0].addEventListener('keydown',(e)=> {
    console.log(e)
})