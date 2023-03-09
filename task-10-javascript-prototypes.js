function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;

  this.howManypages = function () {
    console.log("This book has" + this.pages);
  };

  this.whoWritenthis = function () {
    console.log("This book is writen by" + this.author);
  };
}

var book1 = new Book("Murder on the Orient Express", "Agatha Christie", 256);
book1.whoWritenthis;

function SummerRead() {
  Book.apply(this.arguments);

  this.howManyDaysToRead = () => console.log(this.howManypages / 20);
}

var book2 = new SummerRead("Philosopher's Stone", "J. K. Rowling", 223);
book2.howManyDaysToRead;
