# Compilación y despliegue de una aplicación Angular en un servidor de Internet

Cuando uno desarrolla una aplicación web utilizando el framework de Angular lo desarrolla y prueba en forma local. 
Cada cambio que desarrolla lo puede probar en forma local ejecutando el servidor de desarrollo que trae Angular:

```
ng serve -o
```

Una vez finalizada la aplicación debemos subirla a nuestro servidor real en Internet, para esto debemos ejecutar el siguiente comando de Angular CLI:
```
f:\angularya\proyecto016>ng build 
```

Luego de este proceso se genera una carpeta llamada 'dist' que contiene todos los archivos que debemos subir a nuestro servidor de Internet:

archivos generados por Angular

Los archivos de esta carpeta se deben subir a la carpeta raíz de nuestro servidor de Internet, luego cuando accedemos al dominio de nuestro sitio:
```
www.misitio.com
```

El servidor responde devolviendo el archivo 'index.html' y este en su interior tiene todas las referencias a archivos *.js y *.css

## Subir una aplicación Angular a una subcarpeta de nuestro servidor.

Si nuestra aplicación Angular no se ejecutará en la raíz de nuestro servidor de Internet, el proceso de compilación es diferente.

Por ejemplo si queremos cargar una aplicación Angular a la carpeta:
```
http://scratchya.com.ar/angular/proyecto016/
```

El proceso de compilación debe ser:
```
ng build --base-href=/angular/proyecto016/
```
