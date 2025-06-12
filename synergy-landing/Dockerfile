# --- Synergy Labs Landing Dockerfile ---
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies based on the preferred lock-file
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

# Build Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
