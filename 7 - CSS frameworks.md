## CSS Frameworks

### Bootstrap
[link](https://getbootstrap.com/)

* Layout (Grid - not the same as css display: grid)
* Content (Native styling, images, code, tables, figures)
* Components (buttons, nav bar, spinner, card, etc.)
* Utilities (display, float, shadows, sizing, etc. )

### Font-awesome (icons)
[link](https://fontawesome.com/)
- No need to look for icons, just add the icon class to an element
- Can stye as any other font (size, color, etc.)
``` html
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<style>
    .container {
        display: flex;
        width: 300px;
        justify-content: space-between;
        font-size: 50px; 
    }

    i {
        width: 50px;
        height: 50px;
        font-size: 50px;
        display:inline-block;
    }

    i:first-child {
        color: red;
    }

    i:nth-child(2):hover {
        opacity: 0.5;
    }

    i:nth-child(3) {
        font-weight: 700;
    }
</style>

<body>    
    <i class="fa fa-camera"></i>
    <i class="fa fa-smile-wink"></i>
    <i class="fa fa-code"></i>
</body>
```
result:

![Font Awesome icons example](img/FA-icons.png)

### Google material design & Angular material
[Google material design](https://material.io)

[Angular material](https://material.angular.io/)

### Other:
* [Foundation](https://foundation.zurb.com)
* [Zimit](https://firezenk.github.io/zimit/)
* [InK](http://ink.sapo.pt/)
* [HTML KickStart](http://www.99lime.com/elements/)
* [Kickstrap](http://getkickstrap.com.s3-website-us-east-1.amazonaws.com/)
* [Pure](https://purecss.io/)
* [HTML5 Boilerplate](https://html5boilerplate.com/)
* [YUI](https://yuilibrary.com/)
