console.log("Hello World");
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
let oneDollarIs={
    "EUR": 0.93,
    "JPY": 148.14,
    "GBP": 0.79   
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let oneYenIs={
    "GBP": 0.0053,
    "USD": 0.0067,
    "EUR": 0.0063,
      
}

const fromEuroToDollar=(num)=>{
    let result=num*oneEuroIs.USD
    return result
}
const fromDollarToYen=(num)=>{
    let result=num*oneDollarIs.JPY
    return result
}
const fromYenToPound=(num)=>{
    let result=num*oneYenIs.GBP
    return result
}

// Solo un registro en consola para nosotros
console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(3.5));



// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };
module.exports = { fromDollarToYen,fromYenToPound,fromEuroToDollar };