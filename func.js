// test
const R = require('ramda')
const addFourNumbers = (a,b,c,d) => a+b+c+d
const curriedAddFourNumbers = R.curry(addFourNumbers)

// console.log(curriedAddFourNumbers(1,2)(3)(5))
var toUpperCase = function(x) { return x.toUpperCase(); };
var head = function(x) { return x[0]; };
var initials = R.compose(R.join('. '), R.map(R.compose(toUpperCase, head)), R.split(' '));
// console.log(initials("hunter stockton thompson"))


var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 5, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 10, in_stock: false},
    // {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    // {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    // {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    // {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
];

var isLastInStock = R.compose(R.prop('in_stock'), R.last)
// console.log(isLastInStock(CARS))

var nameOfFirstCar = R.compose(R.prop('name'), R.head)
// console.log(nameOfFirstCar(CARS))

var _average = xs => R.reduce(R.add, 0, xs) / xs.length

var averageDollarValue = R.compose(_average, R.map((c)=>c.dollar_value) )
// console.log(averageDollarValue(CARS))

var _underscore = R.replace(/\W+/g, '_');
var sanitizeNames = R.compose(R.map(c=>_underscore(c)))
console.log(sanitizeNames(["kfwkfwfkw fdskfsks fdsfksk"]))

var test = (a, b) => {
    return a+b
}

// curry
var curry = (fn) => {
    // return fn
}

var test2 =  curry(test)
test2(a)(b)
