# API REST - Sello de Tiempo v1 #

Esta aplicación está basada en el proyecto de Patricio Kumagae https://gitlab.bfa.ar/pkumagae/TsaAPI que está desarrollado con Python. La aplicación fue re escrita en **NodeJS** utilizando el framework de desarrollo **SailsJS**. 

Permite interactuar con el smartContract https://gitlab.bfa.ar/pkumagae/SmartContractsOTS/blob/master/ProofOfExistence.sol que está deployado en:
**Ropsten**
**Rinkeby**
**Rsk**
**Blockchain Federal Argentina**

En el archivo custom/config.js.default se encuentran las direcciones y ABI del contrato deployado en cada blockchain mencionada.

### Prerequisitos ###
NodeJS
Npm

### Cómo comenzar ? ###

* Descargar el repositorio e ingresar 
```
sudo git clone https://github.com/Ren14/tsa1.git
cd [nombre_repo]
```

* Instalar sails
```
sudo npm install -g sails
```
* Instalar dependencias
```
sudo npm install
```

* Configurar el archivo custom. Los datos requeridos están comentados en el código del archivo. 
```
sudo nano config/custom.js.default
```
* Reemplazar el nombre y quitar el default
```
sudo mv config/custom.js.default config/custom.js
```

### Testing de casos de uso ###
Para revisar los endpoints disponibles, visualizar el archivo config/routes.js

* Método sellado:
Se debe acceder por POST a http://localhost:1337/[nombre_blockchain]/stamp
y enviar un parámetro con el nombre **file_hash** que va a contener el hash a enviar. 

* Método verificar:
Se debe acceder por GET a http://localhost:1337/[nombre_blockchain]/verify/[comprobante_ots]/[file_hash]

### Dudas ? ###

* renn.carp@gmail.com
