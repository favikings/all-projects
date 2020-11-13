const api = {
    key: "c75e3822911a9952b8df570ed8cb9464",
    base : 'https://api.openweathermap.org/data/2.5/'
}

const searchbox =document.querySelector(".search-box");
searchbox.addEventListener('keypress', setQuery);

function setQuery(e){
    if (e.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city  = document.querySelector('.location .city');
    city.textContent = `${weather.name}, ${weather.sys.country}`;

    let date = documen.querySelector('.location .date');
    date.textContent  = dateBuilder(date);
}

function dateBuilder(d){
    let months = '';
}