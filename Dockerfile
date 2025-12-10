# ========================================
# STAGE 1: Build della applicazione React
# ========================================
FROM node:20-alpine AS build

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Installa dipendenze
RUN npm install
# Copia tutto il codice sorgente
COPY . .

# Build di produzione con Vite
RUN npm run build

# ========================================
# STAGE 2: Serve con nginx
# ========================================
FROM nginx:alpine

# Copia i file build da stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configurazione nginx per SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Esponi porta 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Avvia nginx
CMD ["nginx", "-g", "daemon off;"]
