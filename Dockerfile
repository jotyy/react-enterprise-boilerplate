FROM harborbaas.zkjg.com:4443/library/node:alpine as base

RUN npm config set registry https://registry.npmmirror.com

FROM base as builder
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM harborbaas.zkjg.com:4443/library/nginx as runner

COPY --from=builder /app/scripts/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
