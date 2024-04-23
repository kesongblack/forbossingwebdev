# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the static files from your host machine to the container
COPY . /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
    