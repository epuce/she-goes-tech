Math.min(1,2,3,4)
Math.max(1,2,3,4)
var user = {
    name: "Ed",
    email: "test@test.com"}

var userJim = {
    name: "Jim",
    age: 11
}

Object.assign(user, userJim)



function Country (capital, continent, inhabitants) {
    if (typeof capital === "string") {
        this.capital = capital;
    } else {
        this.capital = ""
    }

    if (typeof continent === "string") {
        this.continent = continent;
    } else {
        this.continent =""
    }

    this.inhabitants =
        Number.isNaN(parseInt(inhabitants)) ? undefined : parseInt(inhabitants)

    this.getCapital = function () {
        console.log(this.capital)
    }
}

var Latvia = new Country ("Riga", "Europe", 20000000) 

Latvia.getCapital()

function Estonia() {
    Country.apply(this, arguments)
    this.popularFood = "kama"

    this.getCapital = function() {
        console.log(this.capital + " loves eating " + this.popularFood)
    }
}

var newEstonia = new Estonia ("Tallinn", "Europe", 30000000)

newEstonia.getCapital()