// window
// console.log()
// alert()
// Kaip mes naudojam window objekta mum window zodzio nereikia naudoti
// window.console.log('Test window object', window);

// Matematiniai veiksmai
// Geroji praktika
// Kai kuriame pavadinima sujungtinis antras zodis is didziosios raides - camelCase
// let myNumber; // undefined
// ctrl + d shortcut pasirinkti visus tuos pacius pavadinimus
// number add
// myNumber = 2 + 5;
// skaiciaus atemimas
// myNumber = 10 - 3 - 5;
// skaiciaus daugyba
// myNumber = 110 * 2;
// skaiciaus dalyba
// myNumber = 60 / 2;
// console.log('My number is:', myNumber);
// alert(myNumber);

// window.prompt()
// const myFirstNumber = prompt('Enter a first number');
// const mySecondNumber = prompt('Enter a second number');
// sudedant du string '5' + '10' = '510'
// const result = parseInt(myFirstNumber) + Number(mySecondNumber);
// alert(result);
// let number = 5;
// console.log('this is string', number.toString());
// clo - clg
// console.log(`myFirstNumber`, myFirstNumber);
// console.log(`mySecondNumber`, mySecondNumber);

// ==========================================================================================
// Math advanced funkcijos
// ==============================================================================================

// let advacedMath;
// apvalina i didziaja puse
// advacedMath = Math.ceil(3.7);
// apvalina i mazaja puse
// advacedMath = Math.floor(3.9);
// normalus apvalinimas
// advacedMath = Math.round(3.4);
// Saknis
// advacedMath = Math.sqrt(64);
// Suranda didziausia reiksme
// advacedMath = Math.max(1, 6, 3, 7, 2, 10);
// Suranda maziausia reiksme
// advacedMath = Math.min(1, 6, 3, 7, 2, 10);
// advacedMath = Math.pow(2, 5);
// advacedMath = Math.random() * 100;
// advacedMath = Math.round(Math.random() * 100);
// const random = Math.random() * 100;
// advacedMath = Math.round(random);

// advacedMath = 5;
// Didina vienu dydziu
// advacedMath++;
// Mazina vienu dydziu
// advacedMath--
// pre increment
// ++advacedMath
// console.log(`advacedMath`, advacedMath);

// =========================================================================
// operatoriai
// ==========================================================================
// Daznas entry interview klausimas
// == arba ===
// True
// const myOperator = 2 == 2;
// True - nes Javascriptas naudojant == pavercia i ta pati duomenu tipa abu skaicius
// const myOperator = 2 == '2';
// False
// const myOperator = 2 === '2';
// True
// const myOperator = 2 === 2;

// > - >= - < - <=
// > operatoriu - false
// const myOperator = 3 > 5;
// < operatorius - true
// const myOperator = 3 < 5;
// <= operatorius - true
// const myOperator = 5 <= 5;
// >= operatorius - true
// const myOperator = 5 >= 5;

// && - || - ir arba
// && abi salygos turi buti teisingos kad butu true
// true
// const myOperator = 5 >= 5 && 5 < 7;
// False - 5>=5 -teisinga salyga taciau 5<3 neteisinga tai gauname false
// const myOperator = 5 >= 5 && 5 < 3;
// True - nes viena is puses -  salyga yra teisinga
// const myOperator = 3 === 3 || 5 < 3;
// False - nei viena is salygu netenkina
// const myOperator = 3 === 4 || 5 < 3;

// console.log('myOperator: ', myOperator);
