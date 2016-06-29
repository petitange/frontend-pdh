# Configuración del entorno

Para la generación de los estáticos, se utiliza una máquina virtual con Gulp
instalado y configurado.

Una vez configurada y conectado vía SSH, se deben ejecutar los siguientes
comandos:

```
> sudo apt-get install npm
> npm install
> sudo npm install -g gulp
> sudo npm install -g jshint gulp-jshint htmlhint gulp-htmlhint gulp-jshint-html-reporter
> sudo npm install -g bower

// Para corregir nodejs si da algún error de línea de comando.
> ln -s /usr/bin/nodejs /usr/bin/node
```
