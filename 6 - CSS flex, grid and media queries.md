### Flex model
```css
    .wrapper {
        display: flex;

        /* Witch direction is the flex property applied*/
        flex-direction: row | row-reverse | column | column-reverse;

        /* What happens when there is no space for all child elements to fit */
        flex-wrap: nowrap | wrap | wrap-reverse;

        /* Describes how the elements will be distributed thru the container */
        justify-content: special values;

        /* How to align the items along horizontal middle axis */
        align-items: special values;

        /* How to align the items vertically */
        align-content: special values;
    }

    .child:first-child {
        /* In what place does the element stand in the list */
        order: number;

        /* Proportionally how big is the element comparing with siblings  */
        flex-grow: number;

        /* Defines the ability for a flex item to shrink if necessary */
        flex-shrink: number;

        /* Sets default size of an element before the remaining space is distributed  */
        flex-basis: length | auto; /*example:  20%; 10em; */

        /* Special element position that overwrites container justify-content value */
        align-self: special values;
    }
```
![flex support for browsers](img/W02L03-flex-support.png)
### Grid model

```css
    .wrapper {
        display: grid;

        /* Sets the size of each colum */
        grid-template-columns: size of each column; /*example: 300px 30% auto*/

        /* Sets the size of each row */
        grid-template-rows: size of each row; /*example: 50px auto*/

        /* Can set the grid layout based on grid-area naming*/
        grid-template-areas: grid-area list;

        /* Sets the spacing between grid columns */
        grid-column-gap: line-size;

        /* Sets the spacing between grid rows */
        grid-row-gap: line-size;

        /* align all items in it's grid position cell horizontally */
        justify-items: special-value;

        /* align all items in it's grid position cell vertically */
        align-items: special-value;

        /* Where to place the grid elements horizontally its wrapper (if the elements don't take the full space*/
        justify-content: special-value;

        /* Where to place the grid elements vertically its wrapper (if the elements don't take the full space*/
        align-content: special-value;

        /* Set default width for all grid elements */
        grid-auto-columns: track-size;

        /* Set default height for all grid elements */
        grid-auto-rows: track-size;

        /* If no specific placement set for grid items, this property handles the default alignment */
        grid-auto-flow: special-value:
    }

    .child:first-child {
        /* Sets the column where the element starts */
        grid-column-start: number;

        /* Sets the column where the element ends */
        grid-column-end: number;

        /* Sets the row where the element starts */
        grid-row-start: number;

        /* Sets the row where the element ends */
        grid-row-end: number;

        /*  Shorthand for column-start & column-end */
        grid-column: 1 / 4;

        /*  Shorthand for row-start & row-end */
        grid-row: 2 / 4;

        /* row-start / colum-start / row-end /colum-end */
        grid-area: number / number / number / number;

        /* Every section can have a name to reference to */
        grid-area: area-name;

        /* align item in it's grid position cell horizontally */
        justify-self: special-value;

        /* align item in it's grid position cell vertically */
        align-self: special-value;
    }
```
![grid support for browsers](img/W02L03-grid-support.png)
### Media queries

```css
/* When the width is between 1000px and 1500px and a specific orientation is set */
@media screen and (min-width: 1000px) and (max-width: 1500px) and (orientation: landscape | portrait) {
    selector {
        property: value;
    }
}

/* When the width is between 900px and 120px OR above 1700px */
@media screen and (max-width: 1200px) and (min-width: 900px), (min-width: 1700px) {
  .wrapper {
        property: value;
  }
}



/* example --------------------------- */
body {
  background: #009900;
}

@media screen and (min-width: 400px) {
  body {
    background: #990000;
  }
}

@media screen and (min-width: 800px) {
  body {
    background-color: #000099;
  }
}
/* ----------------------------------- */
```
![media queries support for browsers](img/W02L03-media_queries-support.png)

### Flex checkup
1. Create a block that distributes 5 images equally spaced;
2. Set that if there is no space for the images they jump to a new row;
3. Create another block with different images and align them vertically so that the space between them it distributed equally
4. Order the second list so that it is not the same order as stated in HTML
5. Create a third block that centers vertically and horizontally it's content

### Grid checkup

1. Create a grid element that looks like this:

![grid task](img/W02L03-grid-task.png)

[solution](local-env-setup/src/grid.html)

### Media query checkup
1. Create a media query that changes changes the default font size if the screen is smaller than 1024px;
2. Create a media query that shows a hidden element it he screen is between 320px and 1024px;
3. Create a media query that aligns items vertically when in portrait (that means that the default state is that they are aligned horizontally)