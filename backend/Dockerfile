FROM node: lts-alpine
WORKDIR /usr/src/app
COPY backend/package*.json ./
RUN npm install
COPY backend ./
Run ls -l
CMD ["npm", "run", "prod"]
