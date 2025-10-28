# Use the official PHP Apache image
FROM php:8.2-apache

# Enable mod_rewrite (for clean URLs)
RUN a2enmod rewrite

# Install git, unzip, and Composer
RUN apt-get update && apt-get install -y git unzip \
    && curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

# Copy project files
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html

# Install PHP dependencies (Twig, etc.)
RUN composer install --no-dev --optimize-autoloader

# Fix file permissions
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Set ServerName to avoid warnings
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Set Apache's DocumentRoot to /public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
