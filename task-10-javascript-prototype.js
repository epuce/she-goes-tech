// Use two of built in prototype functions
console.log(Math.min(5, 6, 7, 8, 9));
console.log(new Date());

// Create your own prototype
function Food(title, taste, price) {
  this.title = title;
  this.taste = taste;
  this.price = price;
  this.text = function () {
    console.log(`${this.title} is ${this.taste} and costs (${this.price})`);
  };
}

// create new instance
var iceCream = new Food("Ice-cream", "sweet", "3$");
console.log(iceCream);
// call a function from it
console.log(iceCream.text());
// Create an other prototype that extends the previous one

function Snacks() {
  Food.apply(this, arguments);
  this.isPricey = "inexpensive";
  this.summary = function () {
    console.log(
      `${this.title} is ${this.taste} and costs (${this.price}) which is ${this.isPricey}`
    );
  };
}
const chips = new Snacks("chips", "salty", "2$");
console.log(chips);

// Overwrite an existing functions

// Create a new instance and call the function that was declared in the parent prototype and the one that was newly created

var candies = new Snacks("candy", "sweet", "5$");
console.log(candies.summary());
console.log(candies.text());
