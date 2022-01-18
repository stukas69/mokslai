// if(salyga){ norimas kodas } salygos sintakse

// let cars = prompt('Iveskite norima automibili').trim();
// if (cars === 'BMW' || cars === 'Mini' || cars === 'Rolls-Royce') {
// 	alert('Salyga teisinga');
// } else if (cars === 'VW' || cars === 'Audi' || cars === 'Bentley') {
// 	alert('Salyga teisinga');
// } else {
// 	alert('Salyga neteisinga');
// }

//advanced budas
// const VWgroup = ['VW', 'Audi', 'Bentley'];
// const BMWgroup = ['BMW', 'MINI', 'Rols'];
// let cars = prompt('Iveskite norima automibili').trim();
// if (VWgroup.includes(cars)) {
// 	alert('Salyga teisinga');
// } else if (BMWgroup.includes(cars)) {
// 	alert('Salyga teisinga');
// } else {
// 	alert('Salyga neteisinga');
// }
// let cars = prompt('Iveskite norima automibili').trim();
// '' - false / neagzistuoja
// ! - duoda neigiama salyga
// cars !== '' yra tas pats kas tikrinti cars
// if (cars) {
// 	alert('Tesiinga');
// } else {
// 	alert('neteisinga');
// }
// Jeigu kodo eilute if salygos bloke yra viena galime nedeti lauztiniu skliausteliu
// if (cars) alert('Tesiinga');
// else alert('neteisinga');

// Sintakse if() {} else {}

// =================================================================
// Switch
// =================================================================
// Switch rasome kai yra daugiau negu 3 else if
// const age = 23;
// syntax
// switch(age){ case NorimaSalyga: NorimasKodas }
// switch (age) {
// 	case 24:
// 		alert('Teisingas amzius');
// 	case 25:
// 		alert('Teisingas amzius');
// 	case 22:
// 		alert('Teisingas amzius');
// 	case 21:
// 		console.log('yay manio amzius');
// 	default:
// 		alert('Nei vienas nera teisingas');
// }
// true

// switch (age) {
// 	case 24:
// 		alert('Teisingas amzius');
// 	case 25:
// 		alert('Teisingas amzius');
// 	case 22:
// 		alert('Teisingas amzius');
// 	case 21:
// 		console.log('yay manio amzius');
// 	case 'Neteisingas Amzius':
// 		console.log('Tai nera neitinga');
// 	default:
// 		alert('Nei vienas nera teisingas');
// }

// i switch galime ideti salygas, ir case laukelyje tikriname pagal gauta rezultata
// switch (age) {
// 	case true:
// 		console.log('teisinga');
// 		break;
// 	case false:
// 		console.log('neteisinga');
// 		break;
// 	case 21:
// 		console.log('neteisinga');
// 	case 21:
// 		console.log('neteisinga');
// }

// Kiti Operatoriai
// ========================================

// ? - po jo eis teigiamos salygos kodas
// : - po jo eis neigiamos salygos kodas

// const age = prompt('Iveskite amziu');
// const condition18 = age > 22 ? 'My age is correct' : 'My age is incorrect';
// daznai naudojama
// let test;
// age == 18 ? console.log('sfaf') : 'fasfasfa';
// const condition =
// 	age > 22
// 		? 'My age is greater than 22'
// 		: age < 17
// 		? 'My age is less than 17'
// 		: age == 18
// 		? 'My age is 18'
// 		: 'My age is incorrect';

// if (age > 22) {
// 	test = 'My age is greater than 22';
// } else if (age < 17) {
// 	test = 'My age is less than 17';
// } else if (age == 18) {
// 	test = 'My age is 18';
// } else {
// 	test = 'My age is incorrect';
// }
// console.log(test);
// console.log(`condition`, condition);
// if (condition === 'My age is correct') {
// 	alert('Teigiama salyga');
// } else {
// 	alert('neigiama');
// }
