FROM node:14-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Create a new stage to serve the built files using NGINX
FROM nginx:alpine

# Copy the built files from the build stage to the NGINX image
COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy the NGINX configuration file to the appropriate location
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the desired port (default is 80 for NGINX)
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
