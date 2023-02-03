FROM node:lts-alpine
WORKDIR /usr/src/app
COPY vuesandbox/package*.json ./
RUN ls -l
RUN npm install
COPY vuesandbox ./
RUN ls -l
RUN npm run build
COPY vuesandbox/nodeServer.js dist/nodeServer.js
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["node", "nodeServer.js"]