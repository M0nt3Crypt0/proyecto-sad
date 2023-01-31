// Dependencias
const downloadgit = require('download-git-repo')
const shelljs = require('shelljs')
const kafka = require('kafkajs')


const consumer = kafka.consumer({
   groupId: "workers"
})
const producer = kafka.producer()


const topic = "JobSolution"

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
         const addr = message.value.toString().slice(1,-1)
         const auth = message.key.toString()

         const location = "./"+auth+"/"
         
         if(!download(location)) {
            exit
         }

         if(await control){
            
   	   }

         shelljs.exec('cd /root; npm install')
         let result = shelljs.exec('npm run')
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

function runPython(rutaAIndex) {
   var largeDataSet = [];
   // spawn new child process to call the python script
   const python = spawn('python', [rutaAIndex + 'index.py']);
   // collect data from script
   python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      largeDataSet.push(data);
   });
   // in close event we are sure that stream is from child process is closed
   python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.send(largeDataSet.join(""))
   });
}