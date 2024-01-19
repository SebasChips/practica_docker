## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)

### General Info
***
Este proyecto demuestra cómo ejecutar una aplicación Node.js en un contenedor Docker. Proporciona un servidor HTTP simple que responde con un mensaje al acceder a él.
### Screenshot
![Image text](https://www.united-internet.de/fileadmin/user_upload/Brands/Downloads/Logo_IONOS_by.jpg)
## Technologies
***
A list of technologies used within the project:
* [Node]: Version 18
* [JavaScript]
## Installation
***
Introducción sobre la instalación: 
```
$ git clone https://github.com/SebasChips/practica_docker
$ cd practica_docker/SuperMegaPractica
$ docker build -t proyecto-docker .
$ docker run -p 3000:3000 --name proyecto-contenedor proyecto-docker
```
