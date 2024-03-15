# Cypress Automation Framework Project
Welcome to the README file for the Cypress Automation Framework project. This document will guide you through setting up and running tests using Cypress for your project, both locally and within a Docker container..

# Installation
To install the necessary dependencies, run the following command:
```
npm install
```
# Running production environment tests

## On Chrome browser
Open Cypress test runner:
```
npm run cypress-prod-test-chrome
```
Run tests headlessly:
```
npm run cypress-prod-test-headless-chrome
```

## On Firefox browser
Open Cypress test runner:
```
npm run cypress-prod-test-firefox
```
Run tests headlessly:
```
npm run cypress-prod-test-headless-firefox
```

## On Electron browser
Open Cypress test runner:
```
npm run cypress-prod-test-electron
```
Run tests headlessly:
```
npm run cypress-prod-test-headless-electron
```

# Running development environment tests
## On Chrome browser
Open Cypress test runner:
```
npm run cypress-dev-test-chrome
```
Run tests headlessly:
```
npm run cypress-dev-test-headless-chrome
```

## On Firefox browser
Open Cypress test runner:
```
npm run cypress-dev-test-firefox
```
Run tests headlessly:
```
npm run cypress-dev-test-headless-firefox
```

## On Electron browser
Open Cypress test runner:
```
npm run cypress-dev-test-electron
```
Run tests headlessly:
```
npm run cypress-dev-test-headless-electron
```

# Running tests with Docker
If you prefer to run tests within a Docker container, follow these steps:

Build the Docker image using the provided Dockerfile:
```
docker build -t cypress-tests .
```
Once the image is built, you can run tests within the Docker container:
```
docker run --rm -it cypress-tests
```
This command will execute tests inside the Docker container and remove the container once the tests are completed.

# Run tests in parralel on Chrome, Firefox and Electron with Docker
To run the tests, execute the following command:
```
docker-compose up
```

This command will start the Docker containers and execute the tests in parallel on Chrome, Firefox, and Electron (headless mode). Once the tests are completed, the containers will automatically stop.