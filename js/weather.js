const API_KEY = config.apikey;

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	console.log(url);
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const weather = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather span:last-child');
			weather.innerText = `
      * weather now *
      
      🌍 ${data.weather[0].main}  
			🌡 ${Math.floor(data.main.temp)}'C
      `;
			city.innerText = `📍 ${data.name}`;
		});
}

function onGeoError() {
	alert('cant find where you are, sorry');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
