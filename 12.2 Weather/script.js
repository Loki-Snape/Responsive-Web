async function getWeather(city) {
    try {
        const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

async function showWeather(city) {
    const data = await getWeather(city);
    
    if (!data) {
        alert('Something went wrong, please try again later.');
        return;
    }

    document.getElementById('weather-display').classList.remove('hidden');

    const getValue = (val) => val !== undefined ? val : 'N/A';

    document.getElementById('location').textContent = getValue(data.name);
    
    const weatherMain = data.weather && data.weather[0] ? data.weather[0].main : undefined;
    document.getElementById('weather-main').textContent = getValue(weatherMain);

    const iconSrc = data.weather && data.weather[0] ? data.weather[0].icon : undefined;
    const iconElement = document.getElementById('weather-icon');
    
    if (iconSrc) {
        iconElement.src = iconSrc;
        iconElement.style.display = 'inline';
    } else {
        iconElement.src = '';
        iconElement.style.display = 'none';
    }

    const temp = data.main ? data.main.temp : undefined;
    document.getElementById('main-temperature').textContent = getValue(temp);

    const feelsLike = data.main ? data.main.feels_like : undefined;
    document.getElementById('feels-like').textContent = getValue(feelsLike);

    const humidity = data.main ? data.main.humidity : undefined;
    document.getElementById('humidity').textContent = getValue(humidity);

    const windSpeed = data.wind ? data.wind.speed : undefined;
    document.getElementById('wind').textContent = getValue(windSpeed);

    const windGust = data.wind ? data.wind.gust : undefined;
    document.getElementById('wind-gust').textContent = getValue(windGust);
}

document.getElementById('get-weather-btn').addEventListener('click', () => {
    const citySelect = document.getElementById('city-select');
    const selectedCity = citySelect.value;
    
    if (selectedCity) {
        showWeather(selectedCity);
    }
});