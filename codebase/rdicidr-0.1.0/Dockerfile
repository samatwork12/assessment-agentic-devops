FROM node:15 AS builder
WORKDIR /app
ARG REACT_APP_API_URL=api.rdicidr.com
ENV REACT_APP_API_URL=$REACT_APP_API_URL
COPY package.json package-lock.json .npmrc ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.21-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
