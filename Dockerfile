# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Install Vite globally
RUN npm install -g create-vite

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build your React application using Vite
RUN npm run build

# Stage 2 - Serve the built application with a lightweight HTTP server
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=0 /app/dist /app/dist

# Install serve to run a simple HTTP server
RUN npm install -g serve

# Expose the port your app runs on
EXPOSE 5173

# Command to run your app using serve
CMD ["serve", "-s", "dist", "-l", "5173"]