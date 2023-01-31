// Dependencies
const kafka = require('kafkajs')
const express = require('express')
const jwt = require('jwt-decode')
const keycloak = require('keycloak-connect')
const crypto = require('crypto')
  

const app = express();
app.use(keycloak.middleware())

let jobs = new Map()
let jobsResults = new Map()

// Insertar nuevo trabajo en la cola
app.post("/newJob", keycloak.protect(process.env.KEYCLOAK_ROLE), async (req, res) => {
   let TOKEN = decoder(req.headers.authorization)
	let user = TOKEN.preferred_username
   let git = req.body.JobUrl

   let jobId = crypto.randomUUID()

   let producer = kafka.producer()

   await producer.connect()
   await producer.send({
      topic: 'JobsQueue',
      messages: [
         {
            ID: jobId,
            URL: git
         }
      ]
   })
   jobs.set(user, jobId)

   res.send('Trabajo enviado con la id: ' + jobId)
})

// Obtener resultado
app.get("/result/:idJob", keycloak.protect(process.env.KEYCLOAK_ROLE), async (req, res) => {
   let id = req.params.idJob

   let result = jobsResults.get(id)

   if (result && result != "En processo") {
      req.res('Resultado: ' + result)
   } else {
      req.res('No se ha encontrado resultado para el trabajo')
   }
})

// Status del trabajo
app.get("/status/:idJob", keycloak.protect(process.env.KEYCLOAK_ROLE),  async (req, res) => {
   let id = req.params.idJob
   
   if (jobsResult.get(id) != "En processo") {
      res.send('Job finished! Go to: /result/'+id)
   } else if (jobsResults.get(id)) {
      res.send('The job is executing')
   } else if (jobs.get(id)) {
      res.send('The job is in the queue')
   } else {
      res.send('Job not found')
   }
})

// Devolver todos los trabajsos enviados por del usuario
app.get("/user/jobs", keycloak.protect(process.env.KEYCLOAK_ROLE), async (req, res) => {
	var token = decoder(req.headers.authorization)
	var user = token.preferred_username
	return res.send(jobs.get(user))
});

function decoder(header_auth) {
   var rawToken = header_auth.toString().split(" ")
   return jwt(rawToken[1], { payload: true })
}

app.listen(3000,() => {
   console.log('Git executor frontend running in port 3000')
})