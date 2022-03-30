FROM node:16-alpine

WORKDIR /app

COPY . .

RUN apk update && \
  apk add git vim

RUN yarn global add create-react-app
RUN npm install
