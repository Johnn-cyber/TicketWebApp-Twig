# Use the official PHP 8 image
FROM php:8.2-apache

# Install dependencies and enable required PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Copy project files to Apache root
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Expose the web server port
EXPOSE 80
