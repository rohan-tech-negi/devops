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
