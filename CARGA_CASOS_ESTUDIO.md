# Manual para Cargar Nuevos Casos de Estudio

Este manual explica cómo agregar un nuevo caso de estudio al sitio, qué campos son obligatorios y qué sucede si falta alguno, según el funcionamiento actual del código.

## 1. Ubicación y Formato

- Los casos de estudio se agregan como archivos `.md` (Markdown) en la carpeta:
  - `content/en/` para inglés
  - `content/es/` para español
- El nombre del archivo (sin la extensión `.md`) será el **slug** del caso de estudio (por ejemplo, `betterez.md` genera el slug `betterez`).

Nota: se recomienda usar nombres en minúsculas y sin espacios ni caracteres especiales, para evitar problemas de URL y utilizar el mismo nombre en ambos idiomas.

## 2. Estructura del Archivo Markdown

Cada archivo debe tener los siguientes campos en formato `Campo: valor`:

```
Title: Título del caso
Client: Nombre del cliente
logo: /ruta/logo.svg
url_logo: https://sitio-del-cliente.com/
Tags: Etiqueta1, Etiqueta2
Short Description: Breve descripción
Long Description: Descripción larga
Coops: Coop1, Coop2, ...
Objective: Objetivo del proyecto
Contribution:
- Item 1
- Item 2
Technologies: Tech1, Tech2
GitHub: Link al repositorio de GitHub (opcional)
Website: Link al sitio web del proyecto (opcional)
Order: 1
```

### Ejemplo completo

```
Title: Technological Evolution for Mobility
Client: Betterez
logo: /images/case/betterez.svg
url_logo: https://www.betterez.com/
Tags: Intercoop, FULL-STACK
Short Description: Plataforma para reservar tickets de viajes, paquetes y eventos.
Long Description: Plataforma integral para operadores de buses, con sistema de reservas, gestión de capacidad, notificaciones, etc.
Coops: Farox, Nayra, Cambá
Objective: Migración a microservicios y optimización del sistema.
Contribution:
- Migración de monolito a microservicios.
- Implementación de nuevo flujo de ventas.
Technologies: NodeJS, VueJS
GitHub: https://github.com/betterez
Website: https://betterez.com/
Order: 1
```

## 3. Campos obligatorios y comportamiento si faltan

Según el código (`route.ts` y `HeroCSDetail.tsx`):

| Campo             | Obligatorio | ¿Qué pasa si falta?                                                              |
| ----------------- | ----------- | -------------------------------------------------------------------------------- |
| Title             | Sí          | Se muestra vacío en el título.                                                   |
| Client            | Sí          | Se muestra "el cliente" en el alt del logo.                                      |
| logo              | Opcional    | Si falta, no se muestra el logo.                                                 |
| url_logo          | Opcional    | Si falta, el logo no tendrá link.                                                |
| Tags              | Si          | Si falta, no se muestran etiquetas y no se aplican filtros por etiquetas.        |
| Short Description | Sí          | Se muestra vacío en la descripción corta.                                        |
| Long Description  | Sí          | Se muestra vacío en la descripción larga.                                        |
| Coops             | Opcional    | Si falta, no se muestran cooperativas.                                           |
| Objective         | Sí          | Se muestra vacío en el objetivo.                                                 |
| Contribution      | Si          | Si falta, no se muestra la lista de contribuciones.                              |
| Technologies      | Si          | Si falta, no se muestran los íconos de tecnologías.                              |
| GitHub            | Opcional    | Si falta, no se muestra el botón/link a GitHub.                                  |
| Website           | Opcional    | Si falta, no se muestra el botón/link a la web.                                  |
| Order             | Opcional    | Si falta, el orden puede ser indefinido (útil para ordenar en la lista general). |

- **Nota:** Si un campo obligatorio está vacío, la web no arroja error, pero se verá vacío en la interfaz.
- Si el archivo no tiene el formato correcto, puede que el caso no se muestre correctamente o no aparezca.

## 4. Tags
Los tags son importantes para filtrar y categorizar los casos de estudio.
Tienen que estar separados por comas y solo deben ser etiquetas ya definidas en el sistema.
- Intercoop (al utilizar este tag, se muestra en la página "Cultura")
- FULL-STACK
- BACKEND
- DSE-IA
- Free Software
- Case Study

## 5. Contribution
La sección de contribuciones debe contener una lista de aportes al proyecto, cada uno en una línea separada con guiones. Es un campo obligatorio y no debe estar vacío.

Ejemplo:
```
Contribution:
- Desarrollo de una aplicación web y móvil para gestionar mensajes.
- Creación de un plan de mantenimiento y despliegue automatizado.
```
## 6. Technologies
La sección de tecnologías debe listar las tecnologías utilizadas en el proyecto, separadas por comas.

Estas son las tecnologías disponibles:
  - AWS Lambda
  - OpenAI
  - Django
  - Elixir
  - Erlang
  - Flask
  - Go
  - JavaScript
  - Lanchain
  - Next
  - NodeJS
  - Pandas
  - Phoenix
  - Python
  - React Native
  - React JS
  - Ruby
  - Rust
  - Symfony
  - Vercel
  - VueJS

Ejemplo:
```
Technologies: NodeSVG, ReactSVG, PythonSVG
```

## 7. Orden de los Casos
El campo `Order` es opcional y se utiliza para definir el orden en que se mostrarán los casos de estudio en la lista general. Si no se especifica, el orden será indefinido.
Este orden se utiliza para mostrar los casos en la página principal y en la lista de casos de estudio.

## 8. Github y Website
Los campos `GitHub` y `Website` son opcionales. Si se proporcionan, se mostrarán como botones en la página del caso de estudio.

## 9. Carga de logos
Los logos deben estar en formato SVG para mantener el diseño y ubicarse en la carpeta `public/images/case/`. El campo `logo` debe contener la ruta relativa al logo, por ejemplo: `/images/case/betterez.svg`.  Tambien pueden ser PNG con fondo transparente, pero se recomienda SVG por su escalabilidad.
El tamaño máximo recomendado para los logos es 275px de ancho por 50px de alto, para mantener una buena visualización en la web.

## 10. Recomendaciones

- Siempre completar los campos obligatorios.
- Para listas (como `Coops`, `Tags`, `Technologies`), separar por coma.
- Revisar en la web después de cargar un nuevo caso para verificar que se visualiza correctamente.
- Utilizar nombres de archivos en minúsculas y sin espacios ni caracteres especiales para evitar problemas de URL.
