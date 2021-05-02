
let weather = {
    apiKey: '36e3395d2bacfe1a03e867206ad06b9e',
    axiosWeather: function(city){
        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=' + this.apiKey)
        .then(weatherData => {
            console.log(weatherData);
            this.displayData(weatherData);
        })
    },

    displayData: function(data){
        const {name} = data.data;
        const{country} = data.data.sys;
        const{temp} = data.data.main;
        const{feels_like} = data.data.main;
        const{icon} = data.data.weather[0];
        const{description} = data.data.weather[0];

        console.log(name, country,temp,icon, description);
        
        document.querySelector('.location').innerText = name+',' + country;
        document.querySelector('.temp').innerText = parseFloat((temp).toFixed(1)) +'°C';
        document.querySelector('.feelsLike').innerText = 'Feels like ' + parseFloat((feels_like).toFixed(1)) +'°C';
        document.querySelector('.description').innerText = description;
        document.querySelector('.flag').src = 'country-squared/'+ country +'.svg';
        document.querySelector('.logo').src = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
        
    },

    search: function(){
        this.axiosWeather(document.querySelector('.searchBar').value);
    }

};


document.querySelector('.searchCity').addEventListener('click', function(){
    weather.search();
    document.querySelector('.searchBar').value = '';
});

document.querySelector('.searchBar').addEventListener('keypress',function(enter){
    if(enter.key === 'Enter'){
        weather.search();
        document.querySelector('.searchBar').value = '';
    }
});