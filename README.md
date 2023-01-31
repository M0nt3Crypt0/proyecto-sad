# Proyecto Final de SAD
Proyecto final de la asignatura SAD del master Muiinf de la UPV

El proyecto crea un sistema distribuido en forma de FaaS que sirve para ejecutar un proyecto a través de un git y devolver el resultado

# El proyecto consta de las siguientes partes

## Frontend
 * index.js: Se encarga de la escucha del servicio y de realizar las comunizaciones con la cola
 * keycloak-config.js: Realiza la conexión con el servicio keycloak que se encarga de 

## Worker
 * index.js: Obtiene un trabajo de la cola, lo ejecuta y devuelve el resultado


