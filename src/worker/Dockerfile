# Imagen base
FROM alpine

# Instalar dependencias
RUN apk update && apk add nodejs
RUN apk update && apk add git
RUN apk update && apk add python3

# Archivos 
COPY . /worker

# Ejecución del microservicio
WORKDIR /worker
CMD ["node", "worker.js"]

