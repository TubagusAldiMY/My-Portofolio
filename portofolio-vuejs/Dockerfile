#FROM ubuntu:latest
#LABEL authors="TubsAMY"
#
#ENTRYPOINT ["top", "-b"]

# ===================================================================
# STAGE 1: PABRIK (Untuk build proyek Vite/JavaScript)
# ===================================================================
FROM node:lts-alpine AS builder

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install semua dependencies
RUN npm install

# Salin sisa kode sumber proyek Anda
COPY . .

# Jalankan perintah build untuk menghasilkan folder /dist
RUN npm run build


# ===================================================================
# STAGE 2: SHOWROOM (Untuk menyajikan hasil build)
# ===================================================================
FROM nginx:alpine

# Salin HANYA folder /dist yang sudah jadi dari stage 'builder'
# ke dalam folder web root Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# (Sangat disarankan untuk SPA) Salin konfigurasi Nginx kustom
# Pastikan Anda punya file 'nginx.conf' di folder proyek Anda
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Beritahu dunia bahwa container ini berjalan di port 80
EXPOSE 80

# Perintah untuk menjalankan Nginx
CMD ["nginx", "-g", "daemon off;"]