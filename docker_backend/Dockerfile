# Usar la imagen oficial de Node.js
FROM node:18

# Configuración del directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la app
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD [ "npm", "start"]