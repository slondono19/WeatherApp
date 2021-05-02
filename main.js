
let weather = {
    apiKey: '36e3395d2bacfe1a03e867206ad06b9e',
    axiosWeather: function(city){
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + this.apiKey)
        .then(weatherData => {
            console.log(weatherData);
        })
    },

    search: function(){
        this.axiosWeather(document.querySelector('.searchBar').value);
    }

};


document.querySelector('.searchCity').addEventListener('click', function(){
    weather.search();
});

document.querySelector('.searchBar').addEventListener('keypress',function(enter){
    if(enter.key === 'Enter'){
        weather.search();
        document.querySelector('.searchBar').value = '';
    }
});