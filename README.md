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

* Aclaración para los que deseen probar la API con un nodo de Blockchain Federal Argentina

La API se debe instalar en el mismo servidor o máquina virtual donde funciona el nodo de la BFA.
En el archivo config/custom.js se debe configurar la sección de la BFA de la siguiente forma
```
//Datos para Blockchain Federal Argentina
  urlRpcBfa: 'http://localhost:8545',  
  accountAddressBfa : 'la dirección de la cuenta de tu nodo',
  contractABIBfa : [{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getHash","outputs":[{"name":"","type":"string"}],"payable":fal$
  contractAddressBfa : '0x15F914649A5F18fEb3F114b0295165E713a888e4',
  privateKeyBfa : 'la clave privada de tu nodo',
```
En privateKeyBfa, aun que la password de la cuenta esté en blanco, igual existe un cifrado de la clave. Entonces para obtener ese código realizar:
1. Abri el archivo json que está en tu nodo en la dirección /home/bfa/bfa/ .... /keystore/UTC*............
2. Una vez lo abras, vas a ver un texto que dice "ciphertext" : "xxxxxxxxxxxx"
3. Lo que está asignado a ciphertext, es el password "" cifrado. Eso lo copias y lo pegas en privateKeyBfa

TODO: el modo correcto para este desarrollo serí utilizar variables de entorno.

### Testing de casos de uso ###
Para revisar los endpoints disponibles, visualizar el archivo config/routes.js

* Método sellado:
Se debe acceder por POST a http://localhost:1337/[nombre_blockchain]/stamp
y enviar un parámetro con el nombre **file_hash** que va a contener el hash a enviar. 

* Método verificar:
Se debe acceder por GET a http://localhost:1337/[nombre_blockchain]/verify/[comprobante_ots]/[file_hash]

### Dudas ? ###
* renn.carp@gmail.com

------------------- Primer consulta ------------------

Roberto Pereyra Pigerl, [05.02.21 13:03]
una preguna, porque no utilizo el tsa1
si firmo con tsa1 con mi nodo, se puede validar en con el de bfa?

Renzo Mauro Ontivero, [05.02.21 13:07]
bien, si se puede pero hay que tener la siguiente consideración.

Renzo Mauro Ontivero, [05.02.21 13:08]
cuando haces el stamp, la API te retorna un json con el resultado de la operación similar a esto
```
{
  "comprobante_ots": "ZGMwNTI1NjBmNmJhYTM0MWU3MDQwYTgzYWEwNWNmNTg3ZTc5NWIxODk3NjQ5YjYwZWJmYTk0MzIyYzE3NTdhZS0weDE1ZTgwNDE4ZjAzYmQ3OWM2ZDg3MzBlOTMzYmJiYjMxODBhYWI5MjhjYjg0YmU0NjAzNTMwMzhlZjMwZDA3MDM=",
  "tx_hash": "0x15e80418f03bd79c6d8730e933bbbb3180aab928cb84be460353038ef30d0703"
}
```

Renzo Mauro Ontivero, [05.02.21 13:09]
si te fijas el "comprobante_ots" es básicamente el código en base64 que te permite comprobar luego, junto al archivo original la veracidad del mismo.

Renzo Mauro Ontivero, [05.02.21 13:09]
si el contenido del objeto comprobante_ots lo guardas en un archivo de texto con extensión *rd*, te va servir para compararlo en la BFA.


