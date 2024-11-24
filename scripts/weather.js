// variables
var temperature = 10;
var wind_speed = 5;

// call the function
addEventListener("load", (event) => {
    document.getElementById("temp").innerHTML = temperature;
    document.getElementById("wind_speed").innerHTML = wind_speed;
    var wind_chill = document.getElementById("wind_chill");

    if (temperature <= 10 && wind_speed > 4.8)
    {
        var result = calculateWindChill();
        wind_chill.innerHTML= result.toFixed(1);
    }
    else
    {
        wind_chill.innerHTML="N/A";
    }
});

function calculateWindChill()
{
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind_speed,0.16) + .3965 * temperature * Math.pow(wind_speed,0.16);
}