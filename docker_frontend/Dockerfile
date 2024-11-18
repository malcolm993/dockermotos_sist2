# Usa una imagen base de Node.js para construir la aplicación
FROM node:18-alpine AS build

# Establece el directorio de trabajo para el contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Añade esto al inicio de tu Dockerfile para evitar conflictos
RUN rm -rf /app/node_modules

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación, incluyendo el archivo .env
COPY . .

# Construye la aplicación para producción
RUN npm run build


# Usa una imagen de nginx para servir la aplicación
FROM nginx:stable-alpine

# Copia los archivos construidos al directorio predeterminado de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto x para el contenedor
EXPOSE 4001

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
    # Ejecuta el siguiente comando para construir la imagen Docker:
    # docker build -t docker_frontend .
    
    # Luego, ejecutar un contenedor a partir de la imagen creada:
    # docker run -p 3000:3000(4001) -d docker_frontend
    # docker run --name docker_frontend -p 3000:3000 -d docker_frontend