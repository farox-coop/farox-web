---
title: "La toma de decisión colectiva"
description: "Farox al ser una cooperativa se organiza de manera democrática y horizontal: constantemente debatimos y nos ponemos de acuerdo entre 14 personas, ahora bien, ¿cómo tomamos las decisiones de manera colectiva?"
url_img: "/images/blog/the-modern-beam.webp" # Imagen de portada en 1280x720 píxeles
date: "2025-05-14"
author: "Pablo Brudnick" #Opcional
tags: ["Software", "Erlang", "Beam"] #Opcional
tintasur: true #Opcional esto agrega el siguiente texto ES/EN al final del post: "LOS TEXTOS DE ESTE BLOG SON ESCRITOS EN COLABORACIÓN CON TINTA SUR"
---

¿Cómo resolvimos este problema? Hace tres años en una Show&Tell organizada por la Federación de Cooperativa de Trabajo, Tecnología, Innovación y Conocimiento FACTTIC conocimos la plataforma cooperativa Loomio una plataforma web que sirve para tomar decisiones colectivas. Mediante diferentes opciones, se pueden crear encuestas y facilitar el proceso de toma de decisiones. A su vez, genera transparencia, ya que todas las decisiones están en un mismo lugar, con los argumentos y **resultados abiertos** a todas las personas de la organización.
Comenzamos a probar Loomio entendiendo que es una herramienta que facilita el proceso, pero no reemplaza el debate. Es decir, *hay ocasiones en las que hace falta seguir debatiendo o generando procedimientos que guíen la dinámica de la toma de decisiones* y Loomio será solo una herramienta durante esas discusiones. Un ejemplo, para que se entienda, supongamos que hacemos una votación que genera mucha polémica dentro de la organización. Somos 11 personas y la votación, luego de un debate acalorado, **sale 6 a 5**. Tal vez no sea una buena idea mantener las mismas condiciones de la votación si casi el 50% del colectivo no está conforme con la decisión. En su lugar, se puede optar por cambiar algunos detalles o condiciones de la decisión a tomar para lograr un punto intermedio. Esto queda sujeto a la decisión de cada organización.

## Prueba de subtitulo

¿Cómo incorporamos Loomio?
Hace dos años y medio comenzamos a utilizar la plataforma para tomar decisiones colectivas. De esta manera, cuando hay que tomar una decisión, se crea una encuesta en la plataforma, se da un tiempo máximo para que todas las personas expresen sus opiniones y su voto. Al finalizar la votación, evaluamos el resultado. Si el resultado es por amplia mayoría, entonces se procede en la dirección en la que la mayoría se expresó, si se generó mucho debate y la votación está muy dividida, tenemos un nuevo debate y abrimos a posibles cambios en la propuesta para lograr una mayoría más representativa.

### Imagen de ejemplo sin crédito.
<!-- De esta manera de puede agregar una imágen sin crédito -->
![Imagen de ejemplo](/images/blog/the-modern-beam.webp)

### Imagen de ejemplo con crédito.
<!-- De esta manera de puede agregar una imágen con crédito.  El delimitador entre el texto alternativo y el crédito es el pipe |  -->
![Imagen de ejemplo | Fuente: Portal lorem ipsum lorem ipsum](/images/blog/the-modern-beam.webp)

### Video de YouTube
<!-- De esta manera de puede agregar un video de YouTube  -->
[Ver tutorial en YouTube](https://youtu.be/EngW7tLk6R8)

### Ejemplos de etiquetas de encabezado:
<!-- h2: 20px -->
## Etiqueta h2
<!-- h3: 18px -->
### Etiqueta h3
<!-- h4: 16px -->
#### Etiqueta h4
<!-- h5: 14px -->
##### Etiqueta h5
<!-- h6: 12px -->
###### Etiqueta h6

Para agregar un texto destacado se puede utilizar la etiqueta `<callout>` de la siguiente manera:
<!-- Hay que abrir y cerrar la etiqueta callout para que funcione correctamente -->
<callout>Esto es un texto destacado que va a aparecer cuando sea necesario tener un texto destacado en la página para llamar la atención sobre algún dato, detalle o descripción particular.</callout>

Les detallamos algunas de las ventajas que podemos mencionar de haber elegido este camino:

- Podemos poner fechas límite: Es muy importante lograr ser expeditivxs a la hora de decidir como colectivo. Que la toma de decisiones se estire en el tiempo y tardemos mucho en tomar una postura termina no siendo sano tanto para el adentro como para el afuera, ya que muchas veces esas decisiones involucran interacciones con el exterior. Con Loomio podemos poner una fecha límite y todxs saben que para ese entonces tienen que votar. Si la decisión tiene carácter de urgente podemos poner una fecha límite más cercana.
- Contamos con un historial de decisiones: Si se quiere, se pueden repasar las votaciones, con la opinión de cada persona y entender por qué se tomó tal o cual decisión.
- Todxs tienen la posibilidad y la obligación de expresarse: La comunicación escrita puede ser más sencilla para ciertas personas. Es por esto que luego del debate con loomio siempre hay tiempo para bajar un cambio y pensar en frío. Además, como loomio te muestra quienes votaron y quienes no, si no votas quedas en evidencia por lo que te obliga de cierta forma a dar tu voto.
- Si una decisión es muy compleja, se puede crear un hilo y separarla en pequeñas votaciones. De esta manera nos sirve para darle cohesión a las pequeñas decisiones y orientarlas para tomar grandes decisiones.
- Sirve para visualizar rápidamente la voluntad de la mayoría. Además nos permite argumentar el voto, de manera de que otrxs compañerxs pueden ir leyendo los argumentos para terminar de decidirse.

## Codigo de ejemplo
```javascript
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
```


👉 Se necesita analizar ventajas y desventajas de las opciones posibles, así como replantearse la necesidad real de financiamiento externo.

👉 Se necesita que se involucre mas gente en este tema, que sea un tema de publico interés.

