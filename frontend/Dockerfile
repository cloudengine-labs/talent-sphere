# Stage 1: Build the React app
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using a lightweight web server
FROM node:20-alpine

# Install serve to serve the build directory
RUN npm install -g serve

# Copy the build files from the previous stage
COPY --from=build /app/build /app/build

# Copy the .env file
COPY .env .env

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "/app/build"]