some docker cli commands
<!-- like all the images are coming from hub.docker.com -->

1 - <---to start the image--->
docker run -it "image name(OS)"



2 - <---to check if any container is running-->
docker ps 
docker ps - a(a flag)(to check all the container running)
docker conatiner rm "conatiner id" (to remove the container)
docker run -it --name "name of the conatiner" ubuntu {for naming our container}
docker run -it ubuntu ping google.com(run the image for this command means of this command)


3 - <---to check the docker images--->
docker images
docker image COMMAND(for all the images help command)
docker inspect "image name"(for inspecting all the stuff of an image)
docker image rm "image name"(removing the image)
docker image pull "image name"(pulling an image again


<!-- a basic setup for dockering the project -->
1 - make a project nodejs
2 - a Dockerfile
3 - [#base image
FROM ubuntu

RUN apt-get update
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_25.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh
RUN apt install -y nodejs

COPY index.js /home/app/index.js
COPY package-lock.json /home/app/package-lock.json
COPY package.json /home/app/package.json

WORKDIR /home/app/

RUN npm install]  passing a basic code
        <!-- commands after the code -->
        1 - docker build -t my-app .
  