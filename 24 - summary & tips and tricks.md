<!-- TODO add a short questions/answer summary -->
### css animations
* All animation options: [link](https://www.w3schools.com/css/css3_animations.asp) 
* All transition options: [link](https://www.w3schools.com/cssref/css3_pr_transition.asp)
```HTML
<div class="loader">
    <div class="dot"></div>
</div>

<!-- Transform animation -->
<style>
.loader {
  width: 60px;
  height: 60px;
  padding: 30px;
  border-radius: 50%;

  transition-duration: 0.8s;
  transition-property: transform;
}

.loader .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: green;
}

.loader:hover {
    transform: rotate(360deg);
}
</style>

<div class="line-loader">
  This is a long text that will be shown when hovered
</div>

<style>
.line-loader {
    width: 0;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    background: red;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    transition: width 1.5s ease-in;
}

.line-loader:hover {
    width: 400px;
}
</style>

<div class="wrapper">
    <div class="cube"></div>
</div>

<!-- keyframe animations -->
<style>
.wrapper {
    position: relative;
    width: 100px;
    height: 100px
}

.wrapper .cube {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    animation: move 4s infinite;
}

@keyframes move {
    25% {
        left: 100%;
        top: 0;      
    }
    50% {
        left: 100%;
        top: 100%;
    }
    75% {
        top: 100%;
        left: 0;
    }
    100% {
        top: 0;
        left: 0;
    }
}
</style>
```
### iframes
* Call to a different html with all the related logic
* [Documentation](https://www.w3schools.com/html/html_iframe.asp)
```HTML
<iframe src="edit.html" width="400" height="200"></iframe>
```

### canvas
* Canvas draws a 2d or 3d model based on passed parameters, they tend to become quite complex really fast
* [Documentation](https://www.w3schools.com/tags/ref_canvas.asp)
* [Example](local-env-setup/src/W08L01/index.html)

### video tag
```HTML
```
### doctrine
```PHP
```
### AI with JavaScript https://observablehq.com/@mpj/neural-network-from-scratch-part-1
