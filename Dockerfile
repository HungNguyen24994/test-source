# Build
FROM node:16-alpine as Build

RUN apk add python3 g++ make

ENV NODE_ENV development

WORKDIR /app

COPY . .

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn --frozen-lockfile

EXPOSE 3000 3001

CMD ["yarn", "dev"]