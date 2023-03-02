## DOM Objects

### window - object describing the browsers state

* location - browser navigation section description
```JavaScript
window.location
```

* localStorage & sessionStorage - place to store browser related data
  * Can store only first level date, for arrays and objects `JSON.stringify()` for saving and  `JSON.parse()` for reading has to be used
* Can also be used without specifying the `window` keyword
```JavaScript
// Only first level objects can be stored in localStorage & sessionStorage
window.localStorage.open_time = new Date();

console.log(window.localStorage.open_time) // logs "Thu Aug 19 2019 15:23:49 GMT+0300 (Eastern European Summer Time)" to console

// Saving and reading arrays and objects
var arr = [1,2,3]
window.localStorage.numberList = JSON.stringify(arr)

console.log(JSON.parse(window.localStorage.numberList)) 
```
* innerHeight/innerWidth - reads the window dimensions
```JavaScript
window.innerHeight
window.innerWidth
```
* actions
  * open()
  * close()
  * moveTo()
  * resizeTo()
  * focus()
  * other - [link](https://www.w3schools.com/jsref/obj_window.asp)



### [window handling](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)

```JavaScript
// window.open(URL, targe, windowFeatures)
var myWindow = window.open("https://google.com", '_blank', 'width=320,height=320,popup=0');

myWindow.resizeTo(500, 300);
myWindow.focus();
myWindow.(100, 100);
myWindow.close();
```
### document - object describing the DOM (HTML)

* write() & writeln()
```JavaScript
// Writes writes the newly stated content
document.write('<p>This is a write document function test</p>');
// writeln adds a newline at the end of written statement
```

* cookie
```JavaScript
document.cookie = "test_cookie = Wooho it works"
// There are some issues regarding the way cookies ar retrieved
```

* activeElement
```JavaScript
document.activeElement // Returns currently active element
```

* classList - prints all the classes that are attached to the element
  * classList.add() - add a class to element
  * classList.remove() - remove the class from element
  * classList.toggle() - remove if the class is set, add if not
  
* element getter functions
  * getElementById()
  * getElementsByClassName()
  * getElementsByName()
  * getElementsByTagName()
```JavaScript
document.getElementById('footer') // Returns a single object
document.getElementsByClassName('font-small') // Returns an array with all elements that have this class
```

* addEventListener()
```JavaScript
// Triggers a function when the element with id "email" is clicked
document.getElementById('email').addEventListener('click', function(){})

// Triggers a function when the element body is active and a keyup event is triggered
document.getElementsByTagName('body')[0].addEventListener('keyup', function() {})
```
* others - [link](https://www.w3schools.com/js/js_htmldom_document.asp)

## Selectors

* firstChild & lastChild
```JavaScript
// Takes the first element from nested items
document.getElementsByTagName('ul')[0].firstChild
```

* childNodes
```JavaScript
// Selects all body child elements
document.getElementsByTagName('body')[0].childNodes
```

* nextSibling
```JavaScript
// Selects the next li element (in this case with index 1)
document.getElementsByTagName('li')[0].nextSibling
```
* previousSibling
```JavaScript
// Selects the previous li element (in this case with index 2)
document.getElementsByTagName('li')[3].previousSibling
```

## Events / Listeners
* click
```JavaScript
// Trigger a function when the element is clicked
document.getElementsByTagName('button')[0].addEventListener('click', function() {})
```
* scroll
```JavaScript
// Trigger a function when the element is scrolled
document.getElementById('scroll-wrapper').addEventListener('scroll', function() {})
```

* resize
```JavaScript
// Trigger a function when the window is resized
window.addEventListener("resize", function(){});
```
* load
```JavaScript
// It is called when the DOM is ready which can be prior to images and other external content is loaded
document.addEventListener("load", function(){});
```
* keyup/keydown/keypress
```JavaScript
// Triggers a function on any keyup event when the document is active (in focus)
document.addEventListener("keyup", function(){});
```
* others - [link](https://developer.mozilla.org/en-US/docs/Web/Events)

### Checkup

### add a new file named task-8-DOM-events.html where all these actions will be performed

1. Retrieve the domain name (hostname)
2. Save and then retrieve some data with localStorage
    1. A simple data type, like string, boolean, number, etc.
    2. A complex data type, like object or array
3. Create an HTML list, loop thru the list elements and add a class to each of the list elements
4. Create some HTML and add three different event listeners to created HTML
