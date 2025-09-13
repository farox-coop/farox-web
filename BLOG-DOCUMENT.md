# Manual para Subir Blogs al Sitio

Este manual te guiará paso a paso para subir un nuevo blog al sitio. Si es la primera vez que lo haces, sigue las instrucciones cuidadosamente.

---

## 1. Estructura de Carpetas

Antes de subir tu blog, asegúrate de que la estructura de carpetas esté correctamente configurada:

1. En la **raíz del proyecto**, verifica si existe una carpeta llamada `content/`. Si no existe, créala.
2. Dentro de `content/`, crea una carpeta llamada `blog/`.
3. Dentro de `blog/`, crea dos carpetas adicionales:
   - `en/` (para blogs en inglés)
   - `es/` (para blogs en español)

La estructura final debe verse así:
```
/content/
└── /blog/
        ├── /en/
        └── /es/
```

---

## 2. Crear el Archivo Markdown

Cada blog debe tener su propio archivo `.md` (Markdown). Los nombres de los archivos deben ser **iguales** tanto en la carpeta `en/` como en `es/`. Por ejemplo:

- `decision-making-organization.md` (en inglés)
- `decision-making-organization.md` (en español)

### Contenido del Archivo

El contenido del archivo Markdown debe estar estructurado de la siguiente manera:
Metadatos Obligatorios
Los metadatos son obligatorios y deben estar siempre presentes en cada archivo Markdown. Estos se utilizan para generar tarjetas de vista previa y ordenar los posts por fecha.
title : El título del blog. Se mostrará en las tarjetas y en la página del blog.
description : Una breve descripción del contenido del blog. Se usará en las tarjetas de vista previa.
url_img : La URL de la imagen principal del blog. Esta imagen será la primera imagen del post y debe estar rodeada por el comentario <!-- IMAGE_BREAK -->. Las imágenes deben cargarse en la carpeta public/images/blog/ y referenciarse con una ruta relativa.
date : Fecha de publicación del blog en formato YYYY-MM-DD. Esta fecha se usa para ordenar los posts, mostrando los más recientes primero.
Cuerpo del Blog
El cuerpo del blog debe seguir estas reglas:

Primera Imagen del Post :
La primera imagen del blog debe estar rodeada por el comentario <!-- IMAGE_BREAK -->. Este comentario indica que la imagen será usada como la imagen principal de la tarjeta.
Bloques de Código :
Puedes incluir bloques de código en tu blog utilizando tres comillas invertidas (```) seguidas del lenguaje de programación (opcional).

```markdown
---
title: "La toma de decisión colectiva"
description: "Farox al ser una cooperativa se organiza de manera democrática y horizontal: constantemente debatimos y nos ponemos de acuerdo entre 14 personas, ahora bien, ¿cómo tomamos las decisiones de manera colectiva?"
url_img: "https://farox.coop/static/f79c27b2cead08cfa4bbabd49093debb/14b42/experiencia-de-intercooperacion-header.jpg "
date: "2025-05-14"
---

¿Cómo resolvimos este problema? Hace tres años en una Show&Tell organizada por la Federación de Cooperativa de Trabajo, Tecnología, Innovación y Conocimiento FACTTIC conocimos la plataforma cooperativa Loomio una plataforma web que sirve para tomar decisiones colectivas. Mediante diferentes opciones, se pueden crear encuestas y facilitar el proceso de toma de decisiones. A su vez, genera transparencia, ya que todas las decisiones están en un mismo lugar, con los argumentos y **resultados abiertos** a todas las personas de la organización.

<!-- IMAGE_BREAK -->

Comenzamos a probar Loomio entendiendo que es una herramienta que facilita el proceso, pero no reemplaza el debate. Es decir, *hay ocasiones en las que hace falta seguir debatiendo o generando procedimientos que guíen la dinámica de la toma de decisiones* y Loomio será solo una herramienta durante esas discusiones. Un ejemplo, para que se entienda, supongamos que hacemos una votación que genera mucha polémica dentro de la organización. Somos 11 personas y la votación, luego de un debate acalorado, **sale 6 a 5**. Tal vez no sea una buena idea mantener las mismas condiciones de la votación si casi el 50% del colectivo no está conforme con la decisión. En su lugar, se puede optar por cambiar algunos detalles o condiciones de la decisión a tomar para lograr un punto intermedio. Esto queda sujeto a la decisión de cada organización.

## Prueba de subtítulo

¿Cómo incorporamos Loomio?
Hace dos años y medio comenzamos a utilizar la plataforma para tomar decisiones colectivas. De esta manera, cuando hay que tomar una decisión, se crea una encuesta en la plataforma, se da un tiempo máximo para que todas las personas expresen sus opiniones y su voto. Al finalizar la votación, evaluamos el resultado. Si el resultado es por amplia mayoría, entonces se procede en la dirección en la que la mayoría se expresó, si se generó mucho debate y la votación está muy dividida, tenemos un nuevo debate y abrimos a posibles cambios en la propuesta para lograr una mayoría más representativa.

![Imagen de ejemplo](https://farox.coop/static/873c7be2cac04823fb3fadaf98685d07/19de6/experiencia-de-intercooperacion-01.jpg )

Les detallamos algunas de las ventajas que podemos mencionar de haber elegido este camino:

- Podemos poner fechas límite: Es muy importante lograr ser expeditivxs a la hora de decidir como colectivo. Que la toma de decisiones se estire en el tiempo y tardemos mucho en tomar una postura termina no siendo sano tanto para el adentro como para el afuera, ya que muchas veces esas decisiones involucran interacciones con el exterior. Con Loomio podemos poner una fecha límite y todxs saben que para ese entonces tienen que votar. Si la decisión tiene carácter de urgente podemos poner una fecha límite más cercana.
- Contamos con un historial de decisiones: Si se quiere, se pueden repasar las votaciones, con la opinión de cada persona y entender por qué se tomó tal o cual decisión.
- Todxs tienen la posibilidad y la obligación de expresarse: La comunicación escrita puede ser más sencilla para ciertas personas. Es por esto que luego del debate con loomio siempre hay tiempo para bajar un cambio y pensar en frío. Además, como loomio te muestra quienes votaron y quienes no, si no votas quedas en evidencia por lo que te obliga de cierta forma a dar tu voto.
- Si una decisión es muy compleja, se puede crear un hilo y separarla en pequeñas votaciones. De esta manera nos sirve para darle cohesión a las pequeñas decisiones y orientarlas para tomar grandes decisiones.
- Sirve para visualizar rápidamente la voluntad de la mayoría. Además nos permite argumentar el voto, de manera de que otrxs compañerxs pueden ir leyendo los argumentos para terminar de decidirse.

## Código de ejemplo

```javascript
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
```

---

## 3. Cargar Imágenes

Para cargar imágenes, sigue estos pasos:

1. Coloca la imagen en la carpeta `public/images/blog/`.
2. Usa la ruta relativa en el campo `url_img` del archivo Markdown. Por ejemplo:

```markdown
url_img: "/images/blog/nombre-de-la-imagen.jpg"
```
Asegúrate de que el nombre del archivo de la imagen coincida exactamente con el archivo cargado.

4. Guardar el Archivo
Guarda el archivo .md en la carpeta correspondiente (en/ o es/) dentro de content/blog/.

5. Verificar el Blog
Una vez que hayas guardado el archivo, verifica que el blog aparezca correctamente en el sitio. Si algo no funciona como esperabas, revisa la estructura del archivo Markdown y asegúrate de que todos los campos obligatorios estén completos.

¡Listo! Ahora has subido un nuevo blog al sitio. Si tienes preguntas o necesitas ayuda, no dudes en contactarnos.