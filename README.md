# crossfit wod api
### Best practices for building Rest API with with JavaScript, Node.js, and Express.js

## Getting started

### Requirements
```
Node: v18.15.0
NPM: v9.5.0
```

### Installation
Clone the repository

```
git clone git@github.com:roc41d/crossfit-wod-api.git
```

Switch to the project folder

```
cd crossfit-wod-api
```

Install all the dependencies

```
npm i
```

Start the local development server

```
npm run dev
```

You can now access the app at [http://localhost:3000](http://localhost:3000)


## Setup with Docker

### Additional Requirements

Install and setup [Docker](https://www.docker.com)

* [Linux](https://docs.docker.com/engine/install/ubuntu/)
* [Windows](https://www.docker.com/products/docker-desktop)

### Build image

Switch to the project folder

```
cd crossfit-wod-api
```

```
docker build -t <username><app-name>:<tag> .

Ex. docker build -t rocard/crossfit-wod-api:v1.0 .
```

### Run app
```
docker run -d -p <host-port>:<docker-port> rocard/crossfit-wod-api:v1

Ex. docker run -d -p 3000:3000 
```

You can now access the app at [http://localhost:3000](http://localhost:3000)
