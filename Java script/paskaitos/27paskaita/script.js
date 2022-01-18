var map = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM(),
		}),
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([0, 0]),
		zoom: 2,
	}),
});
const sidebarEl = document.querySelector('.sidebar');
const weatherDiv = document.querySelector('.weather');
sidebarEl.querySelector('button').addEventListener('click', async () => {
	if (weatherDiv.querySelector('div'))
		weatherDiv.querySelector('div').remove();
	const inputValue = sidebarEl.querySelector('input').value;
	const data = await fetchWeatherData(inputValue);
	console.log(data);
	const divEl = document.createElement('div');
	const cityHeadingEl = document.createElement('h1');
	const tempParagraphEl = document.createElement('p');
	cityHeadingEl.textContent = data.name;
	tempParagraphEl.textContent = Math.round(data.main.temp - 273);
	map.getView().setCenter(
		ol.proj.transform(
			[data.coord.lon, data.coord.lat],
			'EPSG:4326',
			'EPSG:3857'
		)
	);
	map.getView().setZoom(11);
	divEl.append(cityHeadingEl);
	divEl.append(tempParagraphEl);
	weatherDiv.append(divEl);
});

async function fetchWeatherData(city) {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87dff5349bcdb39cdaabd549071c788d`
		);
		return await response.json();
	} catch (err) {
		console.log(err);
	}
}
