// Dependencias
const downloadgit = require('download-git-repo')
const shelljs = require('shelljs')
const kafka = require('kafkajs')


const consumer = kafka.consumer({
   groupId: "workers"
})
const producer = kafka.producer()

const main = async () => {
   await producer.connect()
   await consumer.connect()
   await consumer.subscribe({
      topic: "JobsQueue",
      fromBeginning: true
   })

   await consumer.run({
      eachMessage: async ({ message }) => {
         console.log("Trabajo recibido")

         let msg = JSON.parse(message)

         let id = msg.jobId
         let url = msg.git

         
         if(!download(url)) {
            exit
         }

         shelljs.exec('cd /root; npm install')
         let result = shelljs.exec('npm run')
         
         await producer.send({
            topic: 'JobResult',
            messages: [
               {
                  ID: jobId,
                  RES: result
               }
            ]
         })

         shelljs.exec('rm *')
      }
   })
}

main().catch(async error => {
   console.error(error)
   
   await consumer.disconnect()
   process.exit(1)
})

function download(url) {
   downloadgit.download(url, '/root', {clone:true}, function(err) {
      if (err) {
         console.log('ERROR: No se ha podido descargar')
         return false
      } else {
         console.log('¡Descarga completada!')
         return true
      }
   })
}