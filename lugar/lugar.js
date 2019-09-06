const axios = require('axios');

const getLugarLatLng = async(ciudad) => {
    //const encodedUrl = encodeURI(ciudad)
    const config = {
        params: { location: ciudad },
        headers: { 'x-rapidapi-key': 'b8070f2a7dmsh3a0446aff3d327ep1d755djsnf95758a3a9e6' }
    };

    const resp = await axios.get('https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php', config);

    if (resp.data.Results.lengh === 0) throw new Error(`No hay resultado para ${ ciudad }`);

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}