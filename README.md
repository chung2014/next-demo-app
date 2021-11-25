# How to test the project

Step 1: Build the docker image
```
./build.sh
```

Step 2: Run docker container from the image
```
./run.sh

// Default is to run the container at port 3000.
// If you want to run the container with other port
./run.sh 3001
```

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|server           | Server URL            | "http://localhost:3000"      |


# Pre-requisites for local development environment
- Install Node.js version 12

# Getting started for local development
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run dev
```
  Navigate to `http://localhost:3000`

# Docker command for troubleshoot

```
// build the image
docker build -t your_dockerhub_username/next-demo-app .

// run the docker container at with local port 3000
docker run --name next-demo-app -p 3000:3000 -d your_dockerhub_username/next-demo-app

// open the sh shell to check what files are inside the running container
docker exec -it next-demo-app sh

// kill all the container process
docker kill $(docker ps -q); docker rm $(docker ps -a -q);

```

