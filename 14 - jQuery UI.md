### Initialization
```HTML
<head>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
</head>
```

### Customizable date picker
```HTML
<script>
    $(function() {
        $( ".js-date-picker" ).datepicker();
    })
</script>
<body>
    <input type="date">
    <input class="js-date-picker">
</body>
```

### Autocomplete
```HTML
<script>
    $(function() {
        $( ".js-auto-complete" ).autocomplete({
            source: JSON.parse(localStorage.usernameList)
        });
    })
</script>
<body>
    <input class="js-auto-complete">
</body>
```

### Resizable
```HTML
<script>
    $(function() {
        $( ".js-resize" ).resizable()
    })
</script>
<style>
    .resize {
        display: inline-block;
        padding: 8px;
        width: 500px;
        height: 100px;
        border: 1px solid black;
    }

    .resize h1 {
        margin: 0;
        background: rgba(0,0,0,.4);
    }
</style>
<body>
    <div class="resize js-resize">
        <h1>Some cool heading</h1>
    </div>
</body>
```

### Sortable
```HTML
<script>
    $(function() {
        $('.js-sort').sortable()
    })
</script>
<style>
    .sort {
        padding: 0;
        margin: 0;
        width: 50%;
    }

    .sort li {
        list-style: none;
        margin-bottom: 4px;
    }
</style>
<body>
    <ul class="js-sort sort">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
</body>
```

### Selectable
```HTML
<script>
    $(function() {
        $('.js-select').selectable()
    })
</script>
<style>
    .select {
        padding: 0;
        margin: 0;
        width: 50%;
    }

    .select li {
        list-style: none;
        margin-bottom: 4px;
    }
</style>
<body>
    <ul class="js-select select">
        <li>Pizza</li>
        <li>Burger</li>
        <li>Hot dog</li>
        <li>Wrap</li>
        <li>Sushi</li>
    </ul>
</body>
```
### Draggable & Droppable
```HTML
<script>
    $(function() {
        $('.js-drag').draggable({
            containment: '.js-drag-container'
        })

        $('.js-drop').droppable({
            drop: function() {
                $('.js-drop').css('background', '#'+Math.floor(Math.random()*16777215).toString(16))
            }
        })
    })
</script>
<style>
    .flex-drop {
        display: flex;
    }

    .drag, .drop {
        width: 50%;
    }

    .drag div {
        background: rgba(0,0,0,.4);
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2px;
    }

    .drop {
        background: rgba(2, 186, 103, 0.4);
    }
</style>
<body>
    <div class="flex-drop js-drag-container">
        <div class="drag">
            <div class="js-drag">Block 1</div>
            <div class="js-drag">Block 2</div>
            <div class="js-drag">Block 3</div>
            <div class="js-drag">Block 4</div>
        </div>

        <div class="js-drop drop"></div>
    </div>
</body>
```
