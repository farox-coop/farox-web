---
name: translate-blog-input
description: Create a faithful bilingual Spanish-English source pair for a blog post by translating the missing language and reviewing it for omissions or meaning changes. Use when one language version is missing; does not create the published blog articles.
---

# Preparar y revisar fuentes bilingües para el blog

Cuando la persona entrega un borrador en un idioma y necesita preparar la fuente en el otro, conservá el original y creá una traducción completa, lista para usar con `create-blog-post`.

## Entradas y destinos

- Aceptá texto pegado o una ruta a un archivo fuente. Si hay más de un texto, identificá cuál es el cuerpo del artículo y cuáles son instrucciones editoriales o notas para redes.
- Usá el título y el slug inglés que indique la persona. Si faltan, proponé nombres claros a partir del título; no conviertas notas editoriales, enlaces de referencia ni pedidos de redes en parte del artículo.
- Para este repositorio, guardá el par en `content/blog/sources/{slug_en}/source-es.md` y `source-en.md`. Estos archivos pueden pasarse directamente como argumentos de entrada de `create-blog-post`.
- Antes de crear archivos, comprobá ambos destinos. Si alguno existe, no lo sobrescribas. Si falta información que afecte el sentido, pedí aclaración antes de cerrar la traducción. No dejes creado solo uno de los dos archivos.

## Fidelidad y traducción

- Conservá el original tal como fue proporcionado. No edites, resumas ni corrijas su cuerpo al preparar el par.
- Traducí título, subtítulos y cuerpo completos. Conservá el orden, los párrafos, encabezados, listas, énfasis, enlaces, nombres propios, ejemplos y el tono del autor.
- No agregues hechos, explicaciones, ejemplos ni certezas que no estén en el original. Conservá con cuidado negaciones, condiciones, causalidad, alcance y grados de certeza.
- Si una expresión admite más de una lectura, elegí una traducción natural que no cierre la ambigüedad. Si una ambigüedad puede cambiar una afirmación importante, consultá a la persona o dejala señalada fuera del texto del artículo; no la resuelvas en silencio.
- Mantené las notas editoriales (por ejemplo, a quién mencionar en una publicación social) fuera del cuerpo bilingüe. Informá que se conservaron como indicaciones separadas cuando sea pertinente.

## Revisión semántica

Antes de guardar la traducción, compará ambos textos por párrafo y por idea. Revisá especialmente:

- que cada afirmación, matiz, ejemplo, contraste, metáfora y conclusión del original esté presente;
- que no se hayan invertido sujetos, negaciones, relaciones de causa y efecto, condiciones o referencias;
- que los términos técnicos y conceptos se mantengan coherentes de principio a fin;
- que la traducción no sea más categórica ni más débil que el original;
- que títulos y subtítulos representen la misma idea en ambos idiomas.

Corregí los desajustes en la traducción y volvé a comparar. No cambies el original para hacer que ambos textos coincidan. Si queda una duda material que requiere decisión del autor, no presentes el par como finalizado: explica la duda y pregunta.

## Entrega

- Guardá `source-es.md` y `source-en.md` juntos, con el título como primer encabezado y el contenido del artículo debajo. No inventes portada, autor, etiquetas ni otros metadatos que la persona no haya dado; `create-blog-post` puede completar esos campos después.
- Informá las dos rutas y los nombres de salida sugeridos para `create-blog-post`.
- Resumí la revisión: confirma si encontraste omisiones o cambios de sentido, y señala cualquier ambigüedad que requiera atención. No afirmes que se revisó una fuente que no pudiste leer.
- Si la persona también pidió publicar en redes, prepará ese contenido aparte del par de fuentes para el blog.
