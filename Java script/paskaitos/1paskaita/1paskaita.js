// Isvedimas uzraso i narsykles konsole
// console.log('External budas');

// var - let - const

// var - pirmas sukurtas kintamojo tipas kai javascript buvo sukurtas
// var buvo vienas iki 2015;

// var - be value
var firstVar; // neturi reiksmes - value
firstVar = 'AssignedValue';

var secondVar = 5.5;
secondVar = 'SwitchedToText';

// ---var viena is problemu - reasignment.---
// var secondVar = 'SecondAssignment';
// console.log('Test-Variable', secondVar);

// Var - dazniausiai nenaudosim !!

// let - kintamojo kurimas
let letVar;
let variable1Let = 'CodeAcademy';
variable1Let = 15;
// Syntax error
// let variable1Let = 'test';
console.log('let variable', variable1Let);

// const
// const be reiksmes - negalime sukurti
// const constVar;
const constVar1 = 'CodeAcademy - const';
const constVar2 = 5;
// constVar2 = 6;
// su const negalime priskirti kitos reiksmes
// constVar1 = 'CodeAcademy - second';
// su const negalime priskirti kito duomenu tipo;
// constVar1 = 5;
console.log(constVar1);
console.log(constVar2);

// ==============================================================
// Duomenu tipai

// Undefined
let dataType;
console.log('Tikriname data-tipa-undefined', dataType);
// Null
let datTypeNull = null;
console.log('Tikriname data-tipa-null', datTypeNull);
// String - tiek dviejom kabutem tiek vienom kabutem galime priskirti reiksme
// Reiksme - tekstas, duomenu tipas - String
let dataTypeString = '5';
console.log('Tikriname data-tipa-string', dataTypeString);
// Number - gali buti tiek sveikasis skaicius tiek per kableli
let dataTypeNumber = 5.6;
console.log('Tikriname data-tipa-number', dataTypeNumber);

// Boolean - reiksme true/false  - duomenu tipas boolean
let dataTypeBoolean = true;
// let dataTypeBoolean = false;
console.log('Tikriname data-tipa-boolean', dataTypeBoolean);

// array - masyvas
let array = [5, 'My text', true, 'Second Text']; // reiksmiu galime tureti kiek tik norime
console.log('Tikriname data-tipa-array', array);
// naudosime labai daznai

// object
// galime sukurti kiek norime reiksmiu objekte.
let object = {
	name: 'Vidmantas',
	surname: 'Vidmantas2',
};
// naudosime labai daznai

// Data
// let todayDate = new Date();
// console.log(todayDate);

// komentarai rasomi su //
// short cut ctrl + /

//Mano kodas nebus vykdomas
// let commentVar;
//!important code
let secondVar2 = 'test'; // My comment to this line !important
