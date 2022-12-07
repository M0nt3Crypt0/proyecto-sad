const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('')
});

app.get('/job', (req, res) => {
	// devolver trabajo
	// la request debe tener la id del trabajo
	let request = JSON.parse(req);

});

app.post('/job', (req, res) => {
	// Insertar en cola nueva id
	let newid = CreateID();
	
});

app.get('/status', (req, res) => {
	// Devolver el estado del trabajo
	// debe aportar id del trabajo
	let status
	res.send(JSON.stringify(status);
});

app.get('/jobs', (req, res) => {
	// Devuelve todos los trabajos lanzados por quien hace la request
	
});


function CreateID() {
	let timestamp = Date.now();
	let uuid = crypto.randomUUID();

	return timestamp + '-' + uuid
}
