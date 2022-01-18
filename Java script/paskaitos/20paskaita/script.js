// sinchroniskai
// console.log('object');
// console.log('object2');
// console.log('object21');
// console.log('object22');
// console.log('object23');
// console.log('object24');
// console.log('object25');
// console.log('object26');
// /////////////
// console.log('Tai yra pirma mano eilut');
// setTimeout(() => {
// 	console.log('Tai yra asinchroniskas metodas');
// }, 1000);
// console.log('Tai yra antra mano eilut');

// console.log('1');
// setTimeout(() => {
// 	console.log('2');
// }, 0);
// console.log('3');
// setTimeout(() => {
// 	console.log('4');
// }, 200);
// console.log('5');
// console.log('6');
// console.log('/////////////');
// setTimeout(() => {
// 	console.log('1')
// }, 10000);

// setTimeout(() => {
// 	console.log('3');
// }, 5000);

// setTimeout(() => {
// 	console.log('4');
// }, 0);
// setTimeout(() => {
// 	console.log('2');
// }, 0);
// console.log('1');
// setTimeout(() => {
// 	console.log('5');
// }, 200);

// setTimeout(() => {
// 	console.log('4');
// }, 0);
// console.log('2');
// console.log('3');
const myName = 'Vidmantas';
console.log('Tikrinu ar async ar ne');
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (myName === 'Vidmantas') {
			resolve('Tai yra mano tikras vardas1');
		} else {
			reject('Tai yra ne mano tikras vardas');
		}
	}, 2000);
});
const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (myName === 'Vidmantas') {
			resolve('Tai yra mano tikras vardas2');
		} else {
			reject('Tai yra ne mano tikras vardas');
		}
	}, 1000);
});
// promise.then((name) => console.log(name)).catch((err) => console.log(err));
// console.log('Tikrinu ar async ar ne2');

// let arr = Promise.all([promise, promise2]);
// console.log(arr.then((result) => console.log(result)));

// let race = Promise.race([promise, promise2]);
// console.log(race.then((result) => console.log(result)));

// fetch
// fetch('url').then ....  .catch() error ....

fetch(
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false'
)
	.then((result) => result.json())
	.then((res) => console.log(res));

let myData = fetch(
	'https://my-json-server.typicode.com/typicode/demo/comments'
).then((result) => result.json());

myData
	.then((data) => console.log(data))
	.catch((err) => console.log(err))
	.finally(() => console.log('Tai yra finally'));
