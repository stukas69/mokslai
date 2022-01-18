// Kodel naudojame?
// console.log('CodeAcademy');
// console.log('CodeAcademy');
// console.log('CodeAcademy');
// console.log('CodeAcademy');
// Sumazinti repetetive koda

// Kokie ciklai egzistuoja JS
// for - for in - for of
// while - do while

// syntax for loop
// for(variable;condition; increment) {}
// for (let i = 0; i <= 10; i++) {
// 	console.log('CodeAcademy', i);
// }

// for (let i = 11; i >= 10; i++) {
// 	console.log('CodeAcademy', i);
// }
// hardcoded value - kai pats irasau koda
// for mes galime naudoti visada
// for (let i = 10; i >= 1; i--) {
// 	console.log('CodeAcademy', i);
// }
// for in
// let object = {
// 	name: 'Vidmantas',
// 	surname: 'Vidmanats',
// };
// for in mes naudosim tik kai dirbame su objektais
// aprasymas ir syntax skiriasi naudodami for in ir for of
// for (let result in object) {
// 	// console.log(result);
// 	// console.log(object[result]);
// }
// let array = ['Code', 'Academy', 'Vidmantas', 'TEst'];
// for (let result of array) {
// 	console.log(result);
// }

// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// =========================================================================
// While loop
// =========================================================================

// Syntax while(condition) {}
// dazniausiai naudojame kai turime kintamaji

// Didiname
// let count = 0;
// while (count <= 7) {
// 	console.log('CodeAcademy', count);
// 	count++;
// }
// maziname
// let count = 0;

// while (count >= 1) {
// 	console.log('CodeAcademy', count);
// 	count--;
// }

// let array = [[''], ['']];
// while (count < 7) {
// 	if (count % 2 === 0 && count !== 0) {
// 		console.log('juoda', count);
// 	}
// 	if (count % 2 === 1) {
// 		console.log('balta', count);
// 	}
// 	count++;
// }

// do - while
// syntax do { } while(condition) {}

// Sitas ciklas visada ivyks viena karta nesvarbu nuo salygos
// Salyga neteisinga tai visitiek kodas viena karta bus paleidziamas
// do {
// 	console.log('CodeAcademy');
// } while (count > 2);
// Kai salyga yra normali ir teisinga, gauname normalu while looop
// do {
// 	console.log('CodeAcademy');
// 	count++;
// } while (count < 2);
