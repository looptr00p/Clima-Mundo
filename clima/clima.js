axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=466ae9acaca6672e794c579d541cfe83`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}