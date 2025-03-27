async function fetchWeatherData(location) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const tempC = Math.floor(Math.random() * 36);
    const tempF = Math.round((tempC * 9) / 5 + 32);
    const conditions = ["Sunny", "Cloudy", "Partly Cloudy", "Rainy", "Windy"];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const humidity = Math.floor(Math.random() * 100);
    const windSpeed = Math.floor(Math.random() * 30);
    return { location, tempC, tempF, condition, humidity, windSpeed, timestamp: new Date().toLocaleTimeString() };
}

async function fetchWeather() {
    const location = document.getElementById('locationInput').value || "New York";
    document.getElementById('weatherOutput').innerHTML = "Loading...";
    try {
        const data = await fetchWeatherData(location);
        document.getElementById('weatherOutput').innerHTML = `
            <h2>${data.location}</h2>
            <p>${data.condition}</p>
            <p>Temperature: ${data.tempC}°C / ${data.tempF}°F</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Wind Speed: ${data.windSpeed} km/h</p>
            <p>Last Updated: ${data.timestamp}</p>
        `;
    } catch (error) {
        document.getElementById('weatherOutput').innerHTML = "Error fetching weather data";
    }
}

fetchWeather();