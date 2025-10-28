# Use official PHP image with Apache
FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . /var/www/html/

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y unzip \
    && docker-php-ext-install pdo pdo_mysql

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies (Twig, etc.)
RUN composer install --no-dev --optimize-autoloader

# Expose Apache port
EXPOSE 80
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Start Apache server
CMD ["apache2-foreground"]
