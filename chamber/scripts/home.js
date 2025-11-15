const tempElement = document.querySelector("#current-temp");
const iconElement = document.querySelector("#weather-icon");
const descElement = document.querySelector("#weather-desc");
const forecastList = document.querySelector("#forecast");

const lat = 33.35;
const lon = -111.79;
const units = "imperial";
const apiKey = "25a903185f7bab2413adcb92527045bf";

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentUrl),
            fetch(forecastUrl)
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error("Weather API Error");
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);

    } catch (error) {
        console.error("Weather fetch error:", error);
        tempElement.textContent = "--°F";
        descElement.textContent = "Unavailable";
        iconElement.src = "images/weather-fallback.png";
    }
}

function displayCurrentWeather(data) {
    const temp = data.main.temp.toFixed(1);
    const description = data.weather[0].description;

    tempElement.textContent = `${temp}°F`;
    descElement.textContent = description;

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    iconElement.src = iconUrl;
    iconElement.alt = description;
}

function displayForecast(data) {
    forecastList.innerHTML = "";

    const today = new Date().getDate();
    const byDay = [];

    for (const item of data.list) {
        const date = new Date(item.dt * 1000);
        const dayNum = date.getDate();

        if (dayNum === today) continue;

        if (!byDay.find(d => d.dayNum === dayNum)) {
            byDay.push({
                dayNum,
                date,
                temp: item.main.temp,
                desc: item.weather[0].description
            });
        }

        if (byDay.length === 3) break;
    }

    byDay.forEach(day => {
        const weekday = day.date.toLocaleDateString("en-US", { weekday: "short" });
        const li = document.createElement("li");
        li.textContent = `${weekday}: ${day.temp.toFixed(1)}°F — ${day.desc}`;
        forecastList.appendChild(li);
    });
}

const spotlightContainer = document.querySelector("#spotlight-container");
const membersUrl = "./data/members.json";

function getLevelName(level) {
    return level === 3 ? "Gold Member" :
        level === 2 ? "Silver Member" :
            "Member";
}

async function fetchSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) throw new Error("Members fetch error");

        const data = await response.json();

        const eligible = data.members.filter(m =>
            m.membership === 2 || m.membership === 3
        );

        const selected = eligible
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        spotlightContainer.innerHTML = "";

        selected.forEach(member => {
            const card = document.createElement("section");
            card.classList.add("member-card");

            card.innerHTML = `
                <img src="images/${member.image}" 
                     alt="${member.name} logo" 
                     loading="lazy">

                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>

                <a href="${member.website}" target="_blank" rel="noopener">
                    Visit Website
                </a>

                <p class="level-${member.membership}">
                    ${getLevelName(member.membership)}
                </p>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Spotlight fetch error:", error);
    }
}

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

fetchWeather();
fetchSpotlights();
