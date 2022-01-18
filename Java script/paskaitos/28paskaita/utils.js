export function getIngredients(data) {
	const arr = [];
	for (let item in data) {
		if (item.includes('strIngredient')) {
			if (data[item]) arr.push(data[item]);
		}
	}
	return arr;
}
