FROM php:8.2-cli

WORKDIR /app
COPY . .

RUN composer install

# Set PORT manually or fallback to 8080
ENV PORT=8080

CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
EXPOSE 8080
