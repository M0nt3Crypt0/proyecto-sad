# Imagen base
FROM alpine

# Instalar dependencias
RUN apk update && apk add nodejs
RUN apk update && apk add git

# Archivos 
COPY . /worker

# Ejecución del microservicio
WORKDIR /worker
CMD ["node", "worker.js"]

