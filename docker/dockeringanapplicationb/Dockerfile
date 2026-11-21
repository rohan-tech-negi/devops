#base image 
# 1- just a basic example of dockerising a docker file
# FROM ubuntu

# RUN apt-get update
# RUN apt install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_25.x -o /tmp/nodesource_setup.sh
# RUN bash /tmp/nodesource_setup.sh
# RUN apt install -y nodejs

# COPY index.js /home/app/index.js
# COPY package-lock.json /home/app/package-lock.json
# COPY package.json /home/app/package.json

# WORKDIR /home/app/

# RUN npm install

# CMD ["npm", "start"]






# 2- now we wanna optimize the code
FROM node:20.17.0-alpine3.19

WORKDIR /home/app/

COPY package*json .
RUN npm install

COPY index.js index.js

COPY Dockerfile Dockerfile

CMD ["npm", "start"]