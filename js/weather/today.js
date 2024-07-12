fetch('https://api.weatherapi.com/v1/current.json?key=9fe4014855734c44b4394202240407&q=Sarapul&aqi=no')
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then( function (data) { 
        console.log(data);
        document.querySelector('.price').innerHTML = Math.round(data.current.temp_c) + '&deg' + 'C';
        t = data.current.condition.text;
        document.querySelector('.disclaimer').textContent = skyDeskcription(t);
        webIcon = '<img src=' + "https:" + data.current.condition.icon + '>';
        document.querySelector('.features').innerHTML = webIcon;
        choosePlace(data.current.temp_c, data.current.precip_mm);
    })
    .catch(function () {
        // catch any errors
    });
function skyDeskcription(t) {
    if (t == 'Sunny') {
        return 'Солнечно'
    }
    if (t == 'Clear') {
        return 'Ясно'
    }
    if (t == 'Partly Cloudy') {
        return 'Облачно с прояснениями'
    }
    if (t == 'Cloudy') {
        return 'Облачно'
    }
    if (t == 'Overcast') {
        return 'Пасмурно'
    }
    if (t == 'Mist') {
        return 'Слабый туман'
    }
    if (t == 'Patchy rain nearby') {
        return 'Возможен кратковременный дождь'
    }
    if (t == 'Patchy snow possible') {
        return 'Возможен кратковременнынй снег'
    }
    if (t == 'Patchy sleet possible') {
        return 'Возможен кратковременный мокрый снег'
    }
    if (t == 'Patchy freezing drizzle possible') {
        return 'Возможна лёгкая изморозь'
    }
    if (t == 'Thundery outbreaks in nearby') {
        return 'Возможна гроза'
    }
    if (t == 'Blowing snow') {
        return 'Низовая метель'
    }
    if (t == 'Blizzard') {
        return 'Метель'
    }
    if (t == 'Fog') {
        return 'Туман'
    }
    if (t == 'Freezing fog') {
        return 'Морозный туман'
    }
    if (t == 'Patchy light drizzle') {
        return 'Слабый дождь'
    }
    if (t == 'Light drizzle') {
        return 'Моросящий дождь'
    }
    if (t == 'Freezing drizzle') {
        return 'Изморозь'
    }
    if (t == 'Patchy light rain') {
        return 'Небольшой дождь'
    }
    if (t == 'Light rain') {
        return 'Лёгкий дождь'
    }
    if (t == 'Moderate rain at times') {
        return 'Временами умеренный дождь'
    }
    if (t == 'Moderate rain') {
        return 'Умеренный дождь'
    }
    if (t == 'Heavy rain at times') {
        return 'Временами сильный дождь'
    }
    if (t == 'Heavy rain') {
        return 'Сильный дождь'
    }
    if (t == 'Light freezing rain') {
        return 'Лёгкий ледяной дождь'
    }
    if (t == 'Moderate or heavy freezing rain') {
        return 'Сильный ледяной дождь'
    }
    if (t == 'Light sleet') {
        return 'Лёгкий мокрый снег'
    }
    if (t == 'Moderate or heavy sleet') {
        return 'Сильный мокрый снег'
    }
    if (t == 'Patchy light snow') {
        return 'Мелкий снег'
    }
    if (t == 'Light snow') {
        return 'Лёгкий снег'
    }
    if (t == 'Patchy moderate snow') {
        return 'Временами умеренный снег'
    }
    if (t == 'Moderate snow') {
        return 'Умеренный снег'
    }
    if (t == 'Patchy heavy snow') {
        return 'Временами сильный снег'
    }
    if (t == 'Heavy snow') {
        return 'Сильный снег'
    }
    if (t == 'Patchy moderate snow') {
        return 'Ледяные хлопья'
    }
    if (t == 'Light rain shower') {
        return 'Небольшой моросящий дождь'
    }
    if (t == 'Moderate or heavy rain shower') {
        return 'Ливень'
    }
    if (t == 'Torrential rain shower') {
        return 'Проливной дождь'
    }
    if (t == 'Light sleet showers') {
        return 'Небольшой дождь со снегом'
    }
    if (t == 'Moderate or heavy sleet showers') {
        return 'Сильный дождь со снегом'
    }
    if (t == 'Light snow showers') {
        return 'Лёгкий снегопад'
    }
    if (t == 'Moderate or heavy snow showers') {
        return 'Сильный снегопад'
    }
    if (t == 'Light showers of ice pellets') {
        return 'Лёгкий ледяной дождь'
    }
    if (t == 'Moderate or heavy showers of ice pellets') {
        return 'Сильный ледяной дождь'
    }
    if (t == 'Patchy light rain with thunder') {
        return 'Небольшой дождь с грозой'
    }
    if (t == 'Moderate or heavy rain with thunder') {
        return 'Дождь с грозой'
    }
    if (t == 'Patchy light snow with thunder') {
        return 'Небольшой снег с грозой'
    }
    if (t == 'Moderate or heavy snow with thunder') {
        return 'Сильный дождь с грозой'
    }
    else return t;
}

function choosePlace(temp, precip) {
    var placeNames = [];
    var placePictures = [];
    var i = 0;
    if ((temp > 24) && (precip < 0.2)) {
        placeNames.push('Пляж');
        placePictures.push('img src=images/SarapulBeach.jfif');
        i++;
    }
    if ((28 > temp > -20) && (precip < 0.2)) {
        placeNames.push('Ленинский парк');
        placePictures.push('images/LeninskiyPark.jfif');

        placeNames.push('Гора Урал');
        placePictures.push('images/Ural.jpg');

        placeNames.push('Западный лесопарк - Светлая лыжня');
        placePictures.push('images/svetLyzhnia.jpg');

        i += 3;
    }
    if (28 > temp > -20) {
        placeNames.push('Набережная');
        placePictures.push('images/Naberezhnaya.jpg');

        placeNames.push('Художественно-выстовочный комплекс "Дача Башенина"');
        placePictures.push('images/dachaBashenina.jpg');

        placeNames.push('Городской сад им. А. С. Пушкина');
        placePictures.push('images/PushkinskiySad.jpg');
        
        placeNames.push('Сарапульский историко-архитектурный и художественный музей-заповедник');
        placePictures.push('images/IstorArchitectHudozhMuzey.jfif');
        
        placeNames.push('Дом купца П.А. Башенина');
        placePictures.push('images/domBashenina.jpg');
        
        placeNames.push('Старая Башня ресторанно-гостиничный комплекс');
        placePictures.push('images/starayaBashnia.jpg');
        
        i += 6;
    }
    else {
        placeNames.push('Oops');
        i++;
    }
    placeNames.push('Досуговый центр «Кураж»');
    placePictures.push('images/Kurage.webp');

    placeNames.push('Досуговый центр «БРИГАНТИНА»');
    placePictures.push('images/Brigantina.jpg');

    i += 2;
    
    for (j = 0; j < i; j++) {
        var placeNamesClass = '.place' + String(j);
        document.querySelector(placeNamesClass).textContent = placeNames[j];

        var placePicturesClass = '.image' + String(j);
        document.querySelector(placePicturesClass).src = placePictures[j];
    }
}
