FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Alpine uses different user commands
RUN addgroup -S appgroup && \
    adduser -S -G appgroup appuser && \
    chown -R appuser:appgroup /app

COPY . .
RUN npm run build

USER appuser
EXPOSE 3000
CMD ["npm", "run", "start"]