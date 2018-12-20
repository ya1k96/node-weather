//const axios = require('axios');
const { getLugar } = require('./lugar/lugar');
const { argv } = require('./config/yargs');
const { getClima } = require('./clima/clima');

//let resp = getLugar( argv.direccion )	
//			 .then(resp => {
//				 	getClima( resp.longitud, resp.latitud )							.then(data => console.log( data ) )
//							.catch(e => console.log( e ) );
//			 } )
//			 .catch(e => console.log( e ) );

let getInfo = async( direccion ) => {
	try{
		let cors = await getLugar( direccion );
		let temp = await getClima( cors.longitud, cors.latitud );

		return `Temperatura ${ direccion } ${ temp } Cº `;
	}catch(e){
		return `No se pudo determinar ${ direccion }`;
	}
}

getInfo( argv.direccion )
	.then( resp => console.log( resp ) )
	.catch( e => console.log( e ));




