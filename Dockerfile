FROM node: lts-alpine
WORKDIR /usr/src/app
COPY vuesandbox/package*.json ./
Run ls -l
RUN npm install
Run ls -l
Run npm run build
COPY vuesandbox ./
COPY vuesandbox/nodeserver.js dist/nodeserver.js
WORKDIR /usr/src/app
EXPOSE 8080
CMD ["node", "nodeserver.js"]

