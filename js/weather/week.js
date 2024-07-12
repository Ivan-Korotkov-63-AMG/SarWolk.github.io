const keyApi = '9fe4014855734c44b4394202240407';
const town = 'Sarapul';
const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${keyApi}&q=${town}&days=7&aqi=no&alerts=no`;

fetch('weatherUrl')
    .then(function (res) { return res.json() }) // Convert data to json
    .then( function (data) { 
        console.log(data); //

        // Иконки
        webIcon = '<img src=' + "https:" + data.forecast.forecastday[0].day.condition.icon + '>';
        document.querySelector('.today').innerHTML = webIcon;
        webIcon = '<img src=' + "https:" + data.forecast.forecastday[1].day.condition.icon + '>';
        document.querySelector('.tomorrow').innerHTML = webIcon;
        webIcon = '<img src=' + "https:" + data.forecast.forecastday[2].day.condition.icon + '>';
        document.querySelector('.post-tomorrow').innerHTML = webIcon;

        // Температура днём
        document.querySelector('.today-tempD').innerHTML = Math.round(data.forecast.forecastday[0].day.maxtemp_c) + '&deg' + 'C';
        document.querySelector('.tomorrow-tempD').innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c) + '&deg' + 'C';
        document.querySelector('.post-tomorrow-tempD').innerHTML = Math.round(data.forecast.forecastday[2].day.maxtemp_c) + '&deg' + 'C';

        // Температура ночью
        document.querySelector('.today-tempN').innerHTML = Math.round(data.forecast.forecastday[0].day.mintemp_c) + '&deg' + 'C';
        document.querySelector('.tomorrow-tempN').innerHTML = Math.round(data.forecast.forecastday[1].day.mintemp_c) + '&deg' + 'C';
        document.querySelector('.post-tomorrow-tempN').innerHTML = Math.round(data.forecast.forecastday[2].day.mintemp_c) + '&deg' + 'C';
    })
    .catch(function () {
        // catch any errors
    });
