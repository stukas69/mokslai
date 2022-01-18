export async function fetchCoctails() {
	try {
		const response = await fetch(
			'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
