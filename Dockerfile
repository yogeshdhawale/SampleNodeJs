FROM node:alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["*.json*", "./"]
# Remove the `&& mv node_modules ../` from the RUN command:

RUN npm install 
RUN npm i express nodemon mocha supervisor

#COPY . .

EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
WORKDIR /usr/src/app/src

CMD ["npm", "start"]