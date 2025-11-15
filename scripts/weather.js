
const tempElement = document.querySelector("#current-temp");
const iconElement = document.querySelector("#weather-icon");
const descElement = document.querySelector("#weather-desc");


const lat = 49.75;
const lon = 6.64;


const units = "imperial";


const apiKey = "25a903185f7bab2413adcb92527045bf";


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("API Fetch Error:", error);
    }
}

apiFetch();

function displayResults(data) {
    tempElement.innerHTML = `${data.main.temp.toFixed(1)}°`;

    const description = data.weather[0].description;
    descElement.textContent = description;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    iconElement.src = iconUrl;
    iconElement.alt = description;
}
