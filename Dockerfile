# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port on which your NestJS application listens
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "start:prod"]