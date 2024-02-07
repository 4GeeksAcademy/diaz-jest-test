// Importar la función sum del archivo app.js


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One yen should be 0.0053 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(1);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 1* 0.0053;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe(0.0053); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 148.14 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen} = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(1);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 1* 148.14;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(1)).toBe(148.14); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})