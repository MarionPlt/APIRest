FROM node:15.10 AS frontBuilder
RUN npm install -g @angular/cli@11.0.5
COPY ./angularclient /
RUN ng build


FROM maven:3.6-jdk-11 AS springbootBuilder
COPY ./pom.xml /
COPY ./src /
COPY --from=frontBuilder /angularclient/dist/angularclient/* /src/main/resources/static/
RUN mvn package
#no integration test run unless maven verify instead of package

FROM openjdk:11-jre-slim AS production
COPY --from=springbootBuilder /target/*.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
