FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN ls -l
RUN npm install
COPY ./ .
RUN ls -l
RUN npm run build
WORKDIR /app
EXPOSE 8000
CMD ["npm", "run", "dev"]