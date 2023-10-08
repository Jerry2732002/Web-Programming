document.addEventListener("DOMContentLoaded", () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=`;

    const searchButton = document.querySelector(".search_button");
    const searchBar = document.querySelector(".search_bar");
    const weatherIcon = document.querySelector(".weather_img img");
    const card = document.querySelector(".card");
    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".close-button");
    

    async function checkWeather(city) {
        try {
            const response = await fetch(url + `${city}` + `&appid=f7df5ad2ec4821164e714851e4f7678a&units=metric`);
            var data = await response.json();
            console.log(data);
            if (data.cod === "404") {
                showPopup();
            }
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            switch(data.weather[0].main){
                case "Clouds":
                    weatherIcon.src = "./images/clouds.png";
                    card.style.background = "linear-gradient(135deg,rgb(177, 255, 254),rgb(25, 163, 217)";
                    break;
                case "Clear":
                    weatherIcon.src = "./images/clear.png";
                    card.style.background = "linear-gradient(135deg,rgb(109, 109, 109),rgb(60, 89, 144)";
                    break;
                case "Rain":
                    weatherIcon.src = "./images/rain.png";
                    card.style.background = "linear-gradient(135deg,rgb(109, 109, 109),rgb(60, 89, 144)";
                    break;
                case "Drizzle":
                    weatherIcon.src = "./images/drizzle.png"
                    card.style.background = "linear-gradient(135deg,rgb(109, 109, 109),rgb(60, 89, 144)";
                    break;  
                case "Mist":
                    weatherIcon.src = "./images/mist.png"
                    card.style.background = "linear-gradient(135deg,rgb(109, 109, 109),rgb(158, 169, 190)";
                    break;
                default:
                    showPopup();
        } 
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }

    searchButton.addEventListener("click", () => {
        value = searchBar.value;
        checkWeather(value);
    });

    closeBtn.addEventListener("click", hidePopup);
    
    function showPopup() {
        popup.style.display = "flex";
    }

    function hidePopup() {
        popup.style.display = "none";
    }
});