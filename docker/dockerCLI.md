some docker cli commands
<!-- A - like all the images are coming from hub.docker.com -->

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





<!-- B - a basic setup for dockering the project -->
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
  

<!-- how we can optimize the code that we have -->
1 - select the node version (as select the lighest version as possible)
2 - change the caching
3 - updated docker file
[1. FROM node:20.17.0-alpine3.19
FROM node:20.17.0-alpine3.19

Instead of Ubuntu, you're using an official Node.js image.

What's special about Alpine?
- Alpine Linux is lightweight.
- Node.js comes preinstalled.
- You don't need to install curl or Node.js manually.
- Smaller base image means less data to download.
Remember: Alpine images can sometimes have compatibility issues with native Node.js dependencies, so test your application before using them in production.
2. WORKDIR
WORKDIR /home/app/

This creates your working directory inside the container (if it doesn't already exist).

All subsequent commands will execute relative to this directory.

For example:
COPY index.js .

This copies index.js into /home/app/.
3. COPY package*json
COPY package*json .

This is a clever optimization.

It copies files matching package*json, such as:
- package.json
- package-lock.json
Why copy these files first?

Because of something called Docker Layer Caching.

Imagine your project structure:
my-app/
│
├── Dockerfile
├── package.json
├── package-lock.json
└── index.js

Now imagine you change something inside index.js.

If you copy all files before running npm install, Docker might need to execute npm install again.

But with your approach:
COPY package*json .
RUN npm install

COPY index.js index.js

Docker caches the dependency installation layer.

If you only change index.js, Docker can reuse the previously cached dependency layer.

This saves build time!
4. RUN npm install
RUN npm install

Installs the dependencies mentioned in your package.json.

Since package files are copied first, Docker can cache this layer independently.
5. COPY index.js
COPY index.js index.js

Copies your application code into the container.

You can also write:
COPY . .

But be careful: this copies everything from your build context unless you configure .dockerignore.
6. CMD
CMD ["npm", "start"]

This specifies the default command Docker executes when the container starts.]








<!-- C - PORT mapping -->
docker run -it -p 4000:4000 my-app

means run the docker on port 4000

what is meant by 4000:4000 = HOST:m-container