FROM node:18

WORKDIR /app
COPY package*.json ./

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Install dependencies before switching user (some packages may need root)
RUN npm install

COPY . .

# Switch to non-root user AFTER setup
USER appuser

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]

