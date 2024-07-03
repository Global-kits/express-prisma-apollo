# Use a Node.js base image with the desired version
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install openssl for Prisma
RUN apk add --no-cache openssl

# Copy env
COPY .env.example .env

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 8000

# Command to run your application
CMD ["npm", "start"]
