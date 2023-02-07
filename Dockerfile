FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN ls -l
RUN npm install
COPY ./ .
RUN ls -l
RUN npm run build
COPY server dist/server
WORKDIR /app/dist
EXPOSE 8000
CMD ["npm", "start"]

# for use of test node server: https://github.com/joeynguyen/vite-react-express-docker-boilerplate/blob/main/Dockerfile

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