# ── Stage 1: Build Frontend ───────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Cache package dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build production bundle
COPY . .
RUN npm run build

# ── Stage 2: Production Server (Nginx Alpine) ───────────────────────────────────
FROM nginx:1.27-alpine

# Copy built static distribution to Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Custom Nginx configuration for Single Page Application (SPA) routing
RUN printf 'server {\n\
    listen 80;\n\
    server_name localhost;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
