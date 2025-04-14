const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromYenToPound = function(valueInYen) {
    
    let valueInPounds = valueInYen * 0.87 / oneEuroIs['JPY'];
    return valueInPounds;

}


const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5 / oneEuroIs['USD'];
    return valueInYen;
}



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };