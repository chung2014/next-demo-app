FROM node:12-alpine3.14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# COPY package*.json ./

# RUN npm ci --only=production && npm cache clean --force

COPY --chown=node:node . .

RUN npm install

RUN npm run build

# CMD node server/index.js

CMD npm start

EXPOSE 3000