#base image 
#just a basic example of dockerising a docker file
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





# now we wanna optimize the code
FROM node:20.17.0-alpine3.19

RUN apt-get update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_25.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs

COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN npm install

CMD ["npm", "start"]