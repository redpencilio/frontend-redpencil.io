FROM madnificent/ember:5.2.0 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod

FROM redpencil/fastboot-app-server:1.2.0

COPY --from=builder /app/dist /app
