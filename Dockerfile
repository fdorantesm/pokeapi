FROM node:20 as build

WORKDIR /src

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production=true

FROM node:20-alpine as deploy

WORKDIR /app

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser

RUN apk update && apk add --no-cache --virtual \
  .build-deps \
  udev \
  ttf-opensans \
  chromium \
  ca-certificates \
  openssl

COPY --from=build /src/dist/ /app
COPY --from=build /src/node_modules ./node_modules
COPY --from=build /src/static ./static

RUN node node_modules/puppeteer/install.mjs

ENTRYPOINT [ "node", "main.js" ]
