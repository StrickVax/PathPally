import React, { useEffect, useState } from "react";

const Weather = ({ destination }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"London"}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

            .then((response) => response.json())
            .then((data) => {
                setWeather(data)
                console.log(`https://api.openweathermap.org/data/2.5/weather?q=${"London"}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
            });
    }, [destination]);

    return (
        <div>
            {weather ? (
                <div>
                    <h3>{weather.name}</h3>
                    <p>{weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading weather...</p>
            )}
        </div>
    );
};

export default Weather;