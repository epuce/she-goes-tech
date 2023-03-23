## jQuery - JavaScript library

* Using $ means that we are referring to a jquery selector

### Initialization
```HTML
<head>
    <!-- other head scripts/tags-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- other head scripts/tags-->
</head>
```

```JavaScript
// javascript file
$(function() {
})

$(window).on('load', function() {
})

$(document).ready(function() {
})
```

### Selectors (almost same as for css)
* \* - wild selector (all elements)
* .class - based on stated class
* tag - based on tag name
* #id - based on id
* .class, .class, tag - multi element selector

```JavaScript
$('#footer') // same as document.getElementById('footer')

$('.my-class') // similar to document.getElementsByClassName('my-class')

$('.my-class, table') // no equivalent for plain JavaScript

$('span.font-small') // combined selector similar to document.querySelectorAll('span .font-small')
```

### Pseudo-selectors
* :visible/:hidden - based on the element state
* [type="email"] - attribute based (close to css)
* .find() - find in child nodes
* .filter() - filter by selected elements
* .eq() - select a specific element based on it's index in list

```JavaScript
$('input[type="email"]') // Attribute based

$('.nav:hidden') // selects hidden elements that have class nav
$('#popup').is(':hidden') // return true or false

$('.header').find('.logo') // Look for child elements that contain .logo class

$('li').filter('.active') // Looks between li elements and select those that have active class

$('div').eq(1) // same as document.getElementsByClassName('div')[1]
```

### CSS related
* .addClass()
* .removeClass()
* .css()
* .hasClass()
* .toggleClass()
```JavaScript
$('selector').css('property', value) // Set a single property
$('selector').css({
    "property": "value",
    "property": "value"
}) // Set multiple css properties
$('selector').css('property') // Read the property value
```

* .offset()
* .position()
* .scrollTop()/.scrollLeft() - manage element scroll
* .height()/.width() - get element dimensions
```JavaScript
$('selector').offset() // gets the element placement according to documents
$('selector').position() // gets the element placement according to parent element

$('body').scrollTop(100) // Scroll 100 pixels down
```

### Manipulations
* .clone()
* .prepend()/.prependTo() - add element as first in HTML parent element list
* .append()/.appendTo() add element as last in HTML parent element list
* .insertAfter()/.insertBefore()
```JavaScript
var $cloneEl = $('selector').clone() // Clone element

// These two do the same only from what element reference point
// The element that is set in the new element is set as the last one
$('selector').append($cloneEl) 
$cloneEl.appendTo($('selector'))

// These two do the same only from what element reference point
// The element that is set in the new element is set as the first one
$('selector').prepend($cloneEl) 
$cloneEl.prependTo($('selector'))
```

### Visual effects
* .hide()/.show()/.toggle() - handles css display property
* .fadeIn()/.fadeOut()/.fadeToggle() - time can be specified how fast does the element showup or hides
* .slideDown()/.slideUp()/.slideToggle() - slide animation to show/hide element

### Event Handling
* .on('event', function(){}) - adds event to the element
* .ajax(params) - communicate with server
  * jQuery wrapper that handles the communication with server

```JavaScript
$('selector').on('click', function() {}) // Adds the function to all elements

// same as:
var allElements = document.getElementsByTagName('selector');
for (var i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('click', function() {})
}
```
  
### All jQuery options: [cheat-sheet](https://oscarotero.com/jquery/)

### Checkup

### add a new file named task-12-jquery.html where all these actions will be performed
### all javascript related actions hav eto be performed using jquery

1. Add a save button that when clicked would read the value from an input
    1. The input should have a validation of minimum 3 characters that's being highlited when invalid 
2. When the input is valid show a popup within the page (NOT an alert) that writes `Thank you for subscribing "value from input"`
3. Add a close button to the popup that will close it
    1. Add the option to close the popup when clicking `Escape` key
4.  When the popup is closed, the input field should be cleared and don't have the validation error visible
