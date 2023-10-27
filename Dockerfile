FROM node:18

WORKDIR /usr/src/eazyrooms_api_gateway

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3004

CMD ["node", "server.js"]