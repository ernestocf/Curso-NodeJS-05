const axios = require('axios');

const getClima = async(latitud, longitud) => {
    const config = {
        params: {
            lat: latitud,
            lon: longitud,
            appid: '980a6f6ad0b08b01474c5dadb02300cf',
            units: 'metric'
        }
    };
    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather', config);

    return `Temperatura: ${resp.data.main.temp}ºC`;
}

module.exports = {
    getClima
}