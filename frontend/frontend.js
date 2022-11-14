// Librerías
const express = require('express');

const app = express();

// Puertos y objetos
const FRONTPORT = 9998;
const BACKPORT = 9999;

// Declaración de los sockets 


// REST Api
app.listen(FRONTPORT, () => {
	console.log("Server en puerto " + FRONTPORT);
});


// Socket broker-kafka (router-router???)



// Métodos
// Cuando se conecta un cliente envia el trabajo a la cola y le da una ID 
function SendJob() {

	return id;
}

function GetStatus(id) {
	let status;

	return status;
}

// Delete from queue
function GetResult(id) {
	let res;

	return res;
}

function ListJobs(cliente) {
	let jobs;

	return jobs
}
