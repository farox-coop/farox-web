# Farox Website

Requiere `npm` y `nodejs 24.7` para desarrollo.  
Requiere `nginx`, `pm2` y `certbot` para producción.

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

### Configurar pm2 en servidor de producción
```bash
cd /var/www/farox-web/
pm2 start "npm start" --name farox
pm2 status
```

### Actualizar el proyecto en producción
```bash
make update
```

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

### Tecnologías utilizadas

- [React](https://es.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
