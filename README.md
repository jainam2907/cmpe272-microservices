# **Hello World Microservices Application**

As part of an assignment for CMPE 272, this project implements a simple microservices architecture using Node.js, Docker, and Kubernetes. It consists of two microservices: Hello Service and World Service, which return the messages "Hello" and "World" respectively. The services are containerized using Docker and the containers are orchestrated using Kubernetes.

---

## **Tools needed to run the project:**

Before beginning, ensure that the following tools are installed on the local machine:
1. Node.js
2. Docker
3. Kubernetes
4. Minikube
5. Git


## **Project setup:**

### 1. Clone the project ###
```
git clone https://github.com/jainam2907/cmpe272-microservices.git
cd cmpe272-microservices
```

### 2. Install the dependencies ###
```
npm install
cd hello-service && npm install
cd ../world-service && npm install
```

### 3. Running the services locally ###

After installing the necessary dependencies, the microservices can be run locally using Node.js.

Navigate to the `hello-service` directory and the start the service:
```
cd hello-service
npm run start
```

The hello service will be up and running on port 3000. Open a browser and visit: http://localhost:3000/hello
<img width="1582" alt="Screenshot 2024-09-04 at 11 36 53 PM" src="https://github.com/user-attachments/assets/0a8f898b-e109-469f-9244-0712b7cdbdbf">



Navigate to the `world-service` directory and the start the service:
```
cd world-service
npm run start
```

The world service will be up and running on port 3001. Open a browser and visit: http://localhost:3001/world
<img width="1582" alt="Screenshot 2024-09-04 at 11 37 27 PM" src="https://github.com/user-attachments/assets/ce5f11ac-cae0-4e88-90f1-d6b58c77680a">


### 4. Running the services using Docker ###

Navigate to the `hello-service` directory and build its docker image:
```
docker build -t hello-service .
```

Navigate to the `world-service` directory and build its docker image:
```
docker build -t world-service .
```

You can now run the docker containers locally.
```
docker run -p 3000:3000 hello-service
docker run -p 3001:3001 world-service
```

To test them, open a browser and visit http://localhost:3000/hello and http://localhost:3001/world.

Hello service:
<img width="1582" alt="Screenshot 2024-09-04 at 11 36 53 PM" src="https://github.com/user-attachments/assets/0a8f898b-e109-469f-9244-0712b7cdbdbf">

World service:
<img width="1582" alt="Screenshot 2024-09-04 at 11 37 27 PM" src="https://github.com/user-attachments/assets/ce5f11ac-cae0-4e88-90f1-d6b58c77680a">


### 5. Pushing docker images to DockerHub ###

Login into your dockerhub account:
```
docker login
```

Tag the images:
```
docker tag hello-service jainamchhatbar/hello-service:latest
docker tag world-service jainamchhatbar/world-service:latest
```

Push the tagged images:
```
docker push jainamchhatbar/hello-service:latest
docker push jainamchhatbar/world-service:latest
```

<img width="1582" alt="Screenshot 2024-09-04 at 11 40 18 PM" src="https://github.com/user-attachments/assets/443e301e-c62e-4028-b33a-37d743843be3">


### 6. Deploying services using Kubernetes ###

Start minikube cluster locally 
```
minikube start
```

Apply the Kubernetes manifest files by running the following commands in the root directory
```
kubectl apply -f hello-service.yaml
kubectl apply -f world-service.yaml
```

Access the services URLs by running two commands mentioned below in two different terminal sessions
```
minikube service hello-service --url
minikube service world-service --url
```

Hello service:
<img width="1578" alt="Screenshot 2024-09-04 at 11 41 55 PM" src="https://github.com/user-attachments/assets/f9423269-0836-4ed0-9ed6-59510cab7062">

World service:
<img width="1578" alt="Screenshot 2024-09-04 at 11 42 16 PM" src="https://github.com/user-attachments/assets/8495921e-a08f-4dc0-9acb-5838550e94c6">


You will have to use these URLs to reach to the services. Update the placeholder URLs in the `test-script.js` file.

### 7. Testing the microservices ###

You can run a simple integration test that calls both microservices and prints "Hello World":
```
node test-script.js
```

You should be able to see the output in the terminal as:
```
Hello World
```
<img width="1578" alt="Screenshot 2024-09-04 at 11 51 07 PM" src="https://github.com/user-attachments/assets/595abf01-9e34-4b8b-be8e-840007d17dd4">









