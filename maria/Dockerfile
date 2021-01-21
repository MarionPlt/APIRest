FROM mariadb:10.4.17
ENV MYSQL_DATABASE="apiclients"
ENV MYSQL_USER="User_EPSI"
#utilisation des variables d'environnement pour suivre les https://12factor.net/
#le vrai mot de passe devrait être dans une solution sécurisée comme https://www.vaultproject.io/
ENV MYSQL_PASSWORD="epsi"
ENV MYSQL_ROOT_PASSWORD="toor"
COPY clients.sql /docker-entrypoint-initdb.d/
#OU docker run -d -v "%cd%"/clients.sql:/docker-entrypoint-initdb.d/test.sql:ro -p 3310:3306 clientdb
