
# Docker Introduction

To get started with Docker, it's essential to understand three basic concepts:

- **Container** - Containers are lightweight, isolated **virtual machines**. They include everything your application needs to run (such as **code**, **libraries**, and **dependencies**) but share the **operating system kernel**, making them lightweight and fast.

- **Images** - An **image** is a "blueprint" used to create containers. It's a kind of "snapshot" of the system with everything needed to run an application. Images are **immutable** and can be **versioned**.

- **Dockerfile** - The **Dockerfile** is where you define how the image will be built. In this file, you specify the **base system**, dependencies, and configurations required for the application.

## Commands

### docker ps
This command displays a list of containers that are currently running.

```bash
docker ps # shows the running containers

docker ps -a # shows all containers, including those that are stopped
```

### docker images
The `docker images` command lists all Docker images stored locally on your system.

```bash
docker images
```

### docker run
What the `docker run` command does:
- Uses a specified image
- Creates a container from the image
- Runs the container

```bash
docker run [options] <image>

docker run -d <image> # runs the container in detached mode (background)

docker run -p <local_port>:<container_port> <image>

docker run -d -p <local_port>:<container_port> <image>  # Very useful for running on an AWS instance
```

### docker login
This command is used to log in to a Docker registry (such as Docker Hub).

```bash
docker login
```

### docker push
This command is used to push an image from your local system to a Docker registry.

```bash
docker push <repository_name>/<image_name>:<tag>
```

### docker pull
This command is used to pull an image from a Docker registry to your local system.

```bash
docker pull <repository_name>/<image_name>:<tag>
```