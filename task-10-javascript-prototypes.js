var place = {
    city: "Vilnius",
    block: "Bajorai",
}

var placeKaunas = {
    city: "Kaunas",
    price: 1000000
}

Object.assign(place, placeKaunas)

Math.floor(1.7)



function Place (city, price) {
    this.city = city
    this.price = price
    this.sayWhere = function () {
        return "Hello, this place is in " + this.city
    }

    this.iCostThat = function() {
        var thisCost = new Number()

        if (thisCost - this.price>1000000) {
            return "You can't buy it"
        } else {
            return "You can buy it"
        }
    }
}

var place1 = new Place("Riga", 2000000000)

place.sayWhere()

place.iCostThat()

function Admin() {
    Place.apply(this, arguments)


this.isAdmin = true;
this.sayWhere=function() {
    return "Whaaat?"
}}

var admin1=new Place("Riga", 2000000000)
admin1.sayWhere();
admin1.iCostThat()

