FROM node:20.9.0-alpine as development

RUN apk update
RUN apk upgrade
RUN apk add bash

FROM development as builder

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --production

FROM builder as production
WORKDIR /app
COPY . .
RUN yarn build