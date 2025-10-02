FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN chmod +x entrypoint.sh

RUN npm install

ENTRYPOINT ["./entrypoint.sh"]
