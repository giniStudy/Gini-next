FROM node:16-alpine
WORKDIR /app

USER nobody
COPY ./ ./



CMD [ "yarn",  "start" ]