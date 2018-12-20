const axios = require('axios');

const getClima = async( lng, lat ) =>{
	const API_KEY = '538c306329e786d26a22e145fb9e36d0';
	const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ API_KEY }`;
	
	let resp = await axios.get(URL);

	return resp.data.main.temp;
}
module.exports = { getClima }