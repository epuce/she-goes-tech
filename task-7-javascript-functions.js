(function () {
  console.log("I'm an anonymous");
})();

function sayHi() {
  console.log("Hi");
}
sayHi();

function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);

function sumAll(...args) {
  return args.reduce(function (acc, value) {
    return acc + value;
  });
}
console.log(sumAll(1, 2, 5));

function shoppingList(list) {
  var {item1, item2} = list;

  console.log('Need to buy ' + item1 + ' and ' + item2);
};
shoppingList({item1: 'milk', item2: 'bread'});
