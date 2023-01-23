# Imagem utilizada para fazer deploy da aplicação
FROM nginx:1.17.9-alpine

# Copia o build do React para a pasta de HTML do Nginx
COPY ./build /var/www

# Copia as configurações do Nginx
COPY scripts/nginx.conf /etc/nginx/nginx.conf

# Expõe a porta 80 já que é uma aplicação web
EXPOSE 80

# Por fim, inicia o Nginx
CMD [ "nginx", "-g", "daemon off;" ]