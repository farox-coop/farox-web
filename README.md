# Farox Website

Requiere `npm` y `nodejs 24.7` para desarrollo.  
Producción requiere `nginx`, Docker Compose y `certbot`.

### Instalar dependencias y compilar el proyecto
```bash
asdf install
make setup
```

### Iniciar el proyecto en modo desarrollo
```bash
make dev
```

### Variables de entorno

Las claves de configuración viven en `global.ts` como fuente única de verdad. Para desarrollo local, copiá `.env.example` a `.env.local` y ajustá los valores:

```bash
cp .env.example .env.local
```

Por ejemplo, `NEXT_PUBLIC_MISSING_CAPTCHA_SITE_KEY` usa la key de producción por defecto; para desarrollo local seteala con la key de dev en `.env.local`.

### Iniciar el proyecto en modo producción
```bash
make start
```

### Deploy a producción

Cada push a `main` ejecuta los checks, compila la aplicación en GitHub Actions, publica una imagen en GitHub Container Registry y despliega esa imagen en Lightsail. Nginx sigue atendiendo el tráfico y la aplicación corre en Docker en `127.0.0.1:3000`.

La instancia conserva la configuración de runtime en `/var/www/farox-web/.env`. El workflow usa un token temporal de GitHub Actions para descargar la imagen privada. Si `NEXT_PUBLIC_MISSING_CAPTCHA_SITE_KEY` difiere del valor por defecto de `global.ts`, configurá ese valor como variable de Actions con el mismo nombre para incluirlo en el build.

### Verificar y formatear el código
```bash
make test-all     # formatea-check + lint + test
make format       # aplica el formateo
make format-check # solo verifica el formateo (falla si hay cambios sin aplicar)
```

### Reinstalar desde cero
```bash
make refresh      # borra node_modules y .next, reinstala, compila y arranca dev
```

### Obtener certificados SSL con certbot
```bash
sudo su
certbot certificates
## FORMA MANUAL, DEPRECADA:
certbot certonly --agree-tos --manual --preferred-challenges dns --email infra@farox.coop -i nginx -d farox.coop -d *.farox.coop -d farox.com.ar -d *.farox.com.ar
service nginx restart
## FORMA ACTUAL: (requiere definir todos los subdominios)
certbot --nginx -d farox.coop -d www.farox.coop -d blog.farox.coop -d farox.com.ar -d www.farox.com.ar -d blog.farox.com.ar
```

### Cambiar el contenido de la página
Se deben modificar los archivos `es.json` y `en.json` en la carpeta `messages`.

### Crear un artículo bilingüe del blog con Codex
Usá la skill `$create-blog-post` con las rutas completas de los textos fuente en español e inglés y los nombres de salida, en ese orden:

```text
$create-blog-post /ruta/al/articulo-es.md /ruta/al/article-en.md articulo-es.md article-en.md
```

La skill crea ambos artículos en `content/blog/` y guarda sus imágenes en `public/images/blog/`.

### Tecnologías utilizadas

- [React](https://es.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
