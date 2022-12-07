# Proyecto Final de SAD
Proyecto final de la asignatura SAD del master Muiinf de la UPV

El proyecto crea un sistema distribuido en forma de FaaS que sirve para ejecutar un proyecto a través de un git y devolver el resultado

# El proyecto consta de las siguientes partes

## Frontend
 * Controller.js: REST api programada en express
 * Server.js: se encarga de la escucha del servicio

## Queue
 * Kafka.js: Se encarga de hacer de intermediario entre KAfka y nuestro sistema
 * docker-compose.yml: Sirve para lanzar una imagen de Kafka

## Backend
 * Worker.js: Obtiene un trabajo de la cola y lo ejecuta


