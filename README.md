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

### Obtener certificados SSL con certbot
```bash
sudo su
certbot certificates
certbot certonly --agree-tos --manual --preferred-challenges dns --email infra@farox.coop -i nginx -d farox.coop -d *.farox.coop -d farox.com.ar -d *.farox.com.ar
service nginx restart
```

### Cambiar el contenido de la página
Se deben modificar los archivos `es.json` y `en.json` en la carpeta `messages`.

### Tecnologías utilizadas

- [React](https://es.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
