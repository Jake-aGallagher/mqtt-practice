# Use the official Node.js 14 image as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies, including TypeScript
RUN npm install

# Copy the rest of the application
COPY . .

# Compile TypeScript to JavaScript
RUN npx tsc

# Inform Docker the container is listening on a specific port at runtime (optional)
EXPOSE 3000

# Run the application using the compiled JavaScript
CMD ["node", "dist/index.js"]