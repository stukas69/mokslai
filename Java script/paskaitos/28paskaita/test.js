export const hello = 'Hello';
// export function sayHello() {
// 	return 'Hello World1!';
// }
function sayHello() {
	return 'Hello World1!';
}
// console.log(sayHello()) galime naudoti ir tame faile su export zodziu
// const myName = 'Esu Vidmantas';

// export default myName;

// export default function sayName() {
//     return 'Vidmantas'
// }
function sayName() {
	return 'Vidmantas';
}
export { sayHello, sayName };
export default sayName;

// ctr + / komentavimas
// ctrl vaiksciojimas tarp zodziu
// shift zymejimas zodziu
// alt stumdymas eiluciu
