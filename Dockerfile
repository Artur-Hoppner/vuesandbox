FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN ls -l
RUN npm install
COPY ./ .
RUN ls -l
RUN npm run build
COPY nodeServer.js dist/nodeServer.js
WORKDIR /app/dist
EXPOSE 8000
CMD [ "node", "nodeServer.js" ]

# This works on the server but uses npm run dev (development mode)
# FROM node:lts-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN ls -l
# RUN npm install
# COPY ./ .
# RUN ls -l
# RUN npm run build
# WORKDIR /app
# EXPOSE 8000
# CMD ["npm", "run", "dev"]