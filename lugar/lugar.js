axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDg8RMNE-o1oKQSf7EI1tEYgQprGIDyUSY`)

    if (result.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${direccion}`)
    }

    let localtion = result.data.results[0];
    let coors = localtion.geometry.location;

    return {
        direccion: localtion.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}