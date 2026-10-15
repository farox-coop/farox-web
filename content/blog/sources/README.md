# Fuentes originales de artículos del blog

El skill `create-blog-post` archiva aquí una copia exacta de los textos fuente usados para crear cada par bilingüe.

Cada artículo tiene una carpeta nombrada con el slug inglés de salida:

```text
content/blog/sources/{slug-en}/
├── source-es.md
└── source-en.md
```

Por ejemplo, para el artículo inglés `my-article.md`, las fuentes quedan en `content/blog/sources/my-article/`. Las fuentes originales pueden proporcionarse desde cualquier ubicación; el skill las copia aquí antes de generar los artículos y conserva estos archivos sin modificaciones para mantener trazabilidad.
