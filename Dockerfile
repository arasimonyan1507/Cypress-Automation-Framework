FROM cypress/included:13.6.2

WORKDIR /app

ENV CYPRESS_BROWSER ${CYPRESS_BROWSER}

COPY package.json /app/

RUN npm cache clean --force


RUN  npm install cypress@13.6.4 --force

RUN npm install


COPY . . 

ENTRYPOINT ["sh", "-c", "npm run cypress-dev-test-headless -- --browser $CYPRESS_BROWSER"]














