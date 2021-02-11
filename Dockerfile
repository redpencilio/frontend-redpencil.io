FROM madnificent/ember:3.22.0 as builder

LABEL maintainer="redpencil"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod

FROM semtech/static-file-service:0.2.0

COPY --from=builder /app/dist /data
