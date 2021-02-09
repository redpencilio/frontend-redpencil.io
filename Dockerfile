FROM madnificent/ember:3.16.0 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod
