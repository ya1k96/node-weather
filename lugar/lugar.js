const axios = require('axios');

const  getLugar = async( desc ) => {
	let encodedURL = encodeURI( desc );
	const API_KEY = 'AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM';

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=${ API_KEY }`);
	if( resp.data.status === 'ZERO_RESULTS'){
		throw new Error(`Ǹo hay resultados para ${ desc }`);
	}		 
 	
 	//Direccion del array
 	let direccion = `Direccion: ${ resp.data.results[0].address_components[0].long_name } ${ resp.data.results[0].address_components[3].long_name }`;
 	
 	//let lat = `Latitud: ${ resp.data.results[0].geometry.location.lat }`;
 	//let long = `Longitud: ${ resp.data.results[0].geometry.location.lng }`;
 	
 	let lat = resp.data.results[0].geometry.location.lat;
 	let lng = resp.data.results[0].geometry.location.lng;

 	//let impr = `${ direccion }\n${ lat }\n${ long }`;	

 	return {
 		direccion,
 		latitud:lat,
 		longitud: lng
 	}
}

module.exports = { getLugar };
