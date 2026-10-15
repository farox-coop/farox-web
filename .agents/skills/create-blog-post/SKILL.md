---
name: create-blog-post
description: Create a new bilingual Spanish and English blog post pair for this repository from two Markdown source files. Use when asked to publish or prepare a bilingual blog post.
---

# Crear un par de artículos del blog

Generá los dos artículos en español e inglés a partir de los textos fuente que indique la persona. Conservá el contenido de cada idioma y seguí el formato del blog del repositorio.

## Argumentos

La invocación recibe cuatro argumentos posicionales, en este orden:

1. `input_es`: ruta completa al Markdown fuente en español.
2. `input_en`: ruta completa al Markdown fuente en inglés.
3. `filename_es`: nombre del archivo de salida en español, por ejemplo `mi-articulo.md`.
4. `filename_en`: nombre del archivo de salida en inglés, por ejemplo `my-article.md`.

Ejemplo:

```text
$create-blog-post /ruta/al/articulo-es.md /ruta/al/article-en.md mi-articulo.md my-article.md
```

Si falta algún argumento o está vacío, no leas ni modifiques archivos todavía. Pedí en un solo mensaje los valores faltantes y esperá la respuesta. Las rutas fuente son rutas completas y pueden estar fuera del repositorio. Los nombres de salida deben ser nombres de archivo, no rutas.

Si una ruta fuente no existe, informalo y pedí la ruta correcta. Si alguno de los archivos de salida ya existe, no lo sobrescribas: pedí indicaciones antes de continuar.

## Destinos y formato

- Artículo en español: `content/blog/es/{filename_es}`.
- Artículo en inglés: `content/blog/en/{filename_en}`.
- Imágenes: `public/images/blog/`.
- Inspeccioná varios artículos actuales de ambos idiomas para seguir la estructura, el orden del frontmatter, los formatos de fecha y el estilo de Markdown vigentes.

## Fidelidad al contenido

- Leé cada fuente exactamente desde la ruta proporcionada. Antes de redactar, inspeccionala con `cat -vet` para distinguir espacios finales, líneas vacías y saltos de línea (`cat -A` en GNU/Linux también sirve).
- Conservá el texto de cada idioma. No traduzcas, reescribas, resumas ni parafrasees el cuerpo.
- Conservá los saltos de línea y la separación entre párrafos de la fuente. Dos espacios al final de línea representan un salto suave y deben conservarse; una línea vacía separa párrafos. Respetá también la sintaxis que realmente use la fuente, como `\` o `<br>`.
- Normalizá las comillas tipográficas dobles (`“` y `”`) a comillas ASCII dobles, y las simples (`‘` y `’`) a comillas ASCII simples. Corregí solo errores ortográficos evidentes, como una tilde faltante.
- Si corregís algo más que esas comillas o un error ortográfico evidente, enumerá brevemente los cambios al final.

## Frontmatter

Usá el orden y los campos de los artículos existentes. Para los campos estándar:

- `title`: título correspondiente de la fuente.
- `description`: resumen o subtítulo explícito de esa fuente; si no existe, usá un extracto breve sin alterar su significado.
- `url_img`: ruta pública de la imagen de portada local, igual en ambos idiomas.
- `date`: fecha actual en formato `YYYY-MM-DD`.
- `author`: autor indicado en la fuente; si no se indica, `Farox`.
- `tags`: etiquetas relevantes para ese idioma; pueden coincidir si son válidas en ambos.
- `aliases`: en el artículo español, una lista con `filename_en` sin `.md`; en el artículo inglés, una lista con `filename_es` sin `.md`.
- Incluí otros campos estándar que usen los artículos actuales cuando correspondan, como `tintasur: true`.

## Imágenes

1. Buscá en el contenido fuente la imagen indicada como `Imagen de Portada` y descargá ese mismo recurso para ambos idiomas.
2. Guardá la portada en `public/images/blog/` con el slug de `filename_en` (sin `.md`) y la extensión original cuando sea posible. Por ejemplo, `my-article.png` si `filename_en` es `my-article.md` y la imagen es PNG.
3. Usá la ruta pública resultante en `url_img` para ambos artículos.
4. Si falta el enlace de portada o no se puede descargar, detenete y preguntá cómo proceder. No crees los artículos todavía.
5. Descargá también las otras imágenes enlazadas explícitamente como imágenes, incluidas las referencias del tipo `[LINK TO AN IMAGE](https://...)`. Nombralas `{slug_en}-{n}.{ext}`, donde `{slug_en}` es `filename_en` sin `.md` y `{n}` es un índice desde 1 que evita colisiones. Conservá el texto alternativo y actualizá las referencias de imagen para usar las rutas públicas locales.
6. Si una imagen secundaria no se puede descargar, dejá su referencia original y mencioná esa limitación al final.

## Procedimiento

1. Validá los cuatro argumentos y las rutas fuente; comprobá que los destinos no existan.
2. Revisá varios artículos existentes de `content/blog/es` y `content/blog/en`.
3. Leé ambas fuentes con `cat -vet`; extraé títulos, descripciones, autores, etiquetas, texto e imágenes.
4. Descargá la portada y las demás imágenes según las reglas anteriores. Si falla la portada, detenete antes de crear archivos.
5. Creá los dos artículos con frontmatter completo, aliases cruzados y el contenido fiel a cada fuente.
6. Verificá que existan ambos artículos, que el frontmatter esté completo, que las aliases apunten al slug del otro idioma, que `url_img` coincida y que los saltos de línea reflejen las fuentes.

## Respuesta final

Informá brevemente las rutas de los artículos creados. Enumerá cualquier cambio de texto que exceda la normalización permitida y cualquier imagen secundaria que no se haya podido descargar.
