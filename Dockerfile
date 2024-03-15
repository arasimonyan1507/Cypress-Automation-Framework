# Use the Cypress Docker image with version 13.6.2 as the base image
FROM cypress/included:13.6.2

# Set the working directory within the container to /app
WORKDIR /app

# Define an environment variable CYPRESS_BROWSER and set its value to the value of the corresponding environment variable passed during container instantiation
ENV CYPRESS_BROWSER ${CYPRESS_BROWSER}

# Copy the package.json file from the host into the /app directory in the container
COPY package.json /app/

# Clear the npm cache to ensure a clean installation
RUN npm cache clean --force

# Install Cypress version 13.6.4 using npm
RUN npm install cypress@13.6.4 --force

# Install project dependencies defined in package.json
RUN npm install

# Copy all files from the host into the /app directory in the container
COPY . . 

# Define the entry point for the container, which runs the npm script 'cypress-dev-test-headless' with the specified browser passed as an argument
ENTRYPOINT ["sh", "-c", "npm run cypress-dev-test-headless -- --browser $CYPRESS_BROWSER"]














