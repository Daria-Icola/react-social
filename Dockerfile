# pull official base image
FROM node:15.4.0-alpine3.10

# set working directory
WORKDIR /src

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN yarn install

# add app
COPY . ./

# start app
CMD ["npm", "start"]