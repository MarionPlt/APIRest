FROM node:15.10 AS frontBuilder
COPY ./angularclient /angularclient
WORKDIR /angularclient
RUN npm install
RUN /angularclient/node_modules/@angular/cli/bin/ng build

FROM maven:3.6-jdk-11 AS springbootBuilder
COPY . /
COPY --from=frontBuilder /angularclient/dist/angularclient/* /src/main/resources/static/
# Build JAR file AND execute both unit and integration test (or fail)
RUN mvn verify

FROM openjdk:11-jre-slim AS production
COPY --from=springbootBuilder /target/app.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
