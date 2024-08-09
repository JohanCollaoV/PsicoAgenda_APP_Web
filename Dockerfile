# Usa una imagen base de Node.js
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Instalar http-server
RUN npm install -g http-server

# Copiar archivos de la carpeta www al directorio de trabajo
COPY ./www /usr/src/app

# Exponer el puerto 8080
EXPOSE 8080

# Comando para servir la aplicación con proxy para manejar rutas
CMD ["http-server", "/usr/src/app", "-p", "8080", "--proxy", "http://localhost:8080?"]
