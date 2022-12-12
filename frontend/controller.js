const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('')
});

app.get('/job', (req, res) => {
	// devolver trabajo
	// la request debe tener la id del trabajo
	let request = JSON.parse(req);
	let id = request.id
});

app.post('/job', (req, res) => {
	// Insertar nuevo trabajo en la cola
	// Antes de insertar crear un identificador único(UUID)
	//
	// campos necesarios: Id, link to git, start, user id, authentication method, secreto
	let obj = JSON.parse(req);

	let id = CreateID();
	let git = obj.git;
	let user = obj.user;

	if (git == null || git == '' || user == '' || user == null) {
		res.send('Error, no se han proporcionado los datos necesarios para insertar los datos');
	} else {
		// insertar trabajo en cola 
	}
});

app.get('/status', (req, res) => {
	// Devolver el estado del trabajo
	// debe aportar id del trabajo
	let status
	res.send(JSON.stringify(status);
});

app.get('/jobs', (req, res) => {
	// Devuelve todos los trabajos lanzados por quien hace la request
	let obj = JSON.parse(req);
	
	let user = obj.user

	let text = 'Se han encontrado los siguientes trabajos en la cola: \n';

	append(text,)
});


function CreateID() {
	// Crear nueva id a partir del metodo crypto.randomUUID, tambien se puede usar el timestamp como uuid
	let timestamp = Date.now();
	let uuid = crypto.randomUUID();

	return timestamp + '-' + uuid
}
