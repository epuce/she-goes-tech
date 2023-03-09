console.log(Math.max(3,4,5,6,88))
console.log(Date());

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;

  this.howManypages = function () {
    console.log("This book has" + this.pages);
  };

  this.whoWritenthis = function () {
    console.log("This book is written by " + this.author);
  };
}

var book1 = new Book("Murder on the Orient Express", "Agatha Christie", 256);
book1.whoWritenthis();
book1.howManypages();

function SummerRead() {
  Book.apply(this, arguments);

  this.SummerRead = true;

  this.howManypages = function () {
    return console.log("This you'll read for " + this.pages / 20 + " days");
  }
}

var book2 = new SummerRead("Philosopher's Stone", "J. K. Rowling", 223);
book2.howManypages();
