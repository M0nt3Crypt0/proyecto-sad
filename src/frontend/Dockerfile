# Imagen base
FROM alpine

# Instalar dependencias
RUN apk update && apk add nodejs
RUN apk update && apk add git

# Archivos 
COPY . /frontend

# Ejecución del microservicio
WORKDIR /frontend
CMD ["node", "index.js"]