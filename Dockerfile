### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies 
# This is needed to build and compile our code 
# while generating the docker image
FROM node:latest AS build
# Create a Virtual directory inside the docker image
WORKDIR /usr/local/app
# Copy files to virtual directory
COPY ./ /usr/local/app/
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
RUN npm install

RUN npm run build


### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:1.27.1
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /usr/local/app/dist/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 80