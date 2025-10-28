# Use official PHP Apache image
FROM php:8.2-apache

# Install dependencies
RUN docker-php-ext-install pdo pdo_mysql

# Enable mod_rewrite for pretty URLs
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . /var/www/html/

# Set permissions so Apache can read everything
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Set ServerName to suppress warnings
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Set DocumentRoot to /var/www/html/public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
