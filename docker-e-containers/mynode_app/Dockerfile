ARG NODE_VERSION=24.21.0
# FROM node:${NODE_VERSION}
FROM node:${NODE_VERSION}-slim

ENV PORT=3001
ENV MESSAGE="Hello from mynode_app!"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN useradd -m mynodeuser
USER mynodeuser

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD ["curl", "-f", "http://localhost:3001"]

CMD ["node", "index.js"]
