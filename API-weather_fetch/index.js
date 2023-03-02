window.onclick = (weather) => {

    City(weather.target.id);

    function City(weather) {
        document.getElementById("output").style.display = "block";

        var loc = document.getElementById("location");
        var temp = document.getElementById("temperature");
        var con = document.getElementById("conditions");
        var icons = document.getElementById("icon");
        var sun = document.getElementById("sunrise");

        const apiKey = "b23b252e287641676ad168aaf8e77432";



        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + weather + "&appid=" + apiKey + "&units=metric";

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = xhr.response;
                    const iconUrl = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
                    


                    loc.innerHTML = data.name;
                    temp.innerHTML = data.main.temp + "&#176;C";
                    con.innerHTML = data.weather[0].description;
                    icons.innerHTML = "<img src=" + iconUrl + " />";
                    var time = new Date(data.sys.sunrise);
                    sun.innerHTML = time.toLocaleTimeString();
                    console.log(xhr.response);
                    

                } else {
                    loc.innerHTML = "API call was not successful";
                    console.log(xhr.status);
                }
            }
        }
        xhr.open('GET', url, true);
        xhr.responseType = "json";
        xhr.send(null);


    }
}

