FROM node:14.2.0-slim

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/main" ]