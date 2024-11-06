
# Dockerfile

A **Dockerfile** is a text file with instructions that Docker uses to build an `image`. Each line in the Dockerfile represents an instruction that adds, modifies, or configures the image.

# Dockerfile Guide Summary

| Step | Command/Instruction | Purpose                                                                                   | Example                                                                                     |
|------|----------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| 1    | `FROM`              | Defines the **base image** for your application, such as the OS or language environment   | `FROM python:latest`                                                                       |
| 2    | `LABEL`             | Adds **metadata** like maintainer info and descriptions                                   | `LABEL maintainer="myemail@example.com" description="Image for my Python application"`      |
| 3    | `WORKDIR`           | Sets the **working directory** inside the container                                       | `WORKDIR /app`                                                                             |
| 4    | `COPY` / `ADD`      | Transfers files from the local system to the container                                    | `COPY . /app`                                                                              |
| 5    | `RUN`               | Runs commands to **install dependencies** or configure the environment                    | `RUN pip install --upgrade pip && pip install -r requirements.txt`                          |
| 6    | `ENV`               | Sets **environment variables** within the container                                       | `ENV APP_ENV=production`                                                                   |
| 7    | `EXPOSE`            | Opens specific **ports** for external access                                              | `EXPOSE 5000`                                                                              |
| 8    | `CMD` / `ENTRYPOINT`| Defines the **startup command** that runs when the container starts                       | `CMD ["python", "app.py"]`                                                                 |
| 9    | `.dockerignore`     | Excludes files/folders from the container, **optimizing size and efficiency**             | `.dockerignore (add __pycache__, .venv, etc.)`                                             |


---

## 2. Choose the Base Image (`FROM`)

Every Docker image starts with a base image, defined by the `FROM` command. The base image is the operating system or environment on which your application will be built.

### How to Choose:
- Choose a base image that has the **minimum system** required for your application.
- Use official Docker Hub images (e.g., `ubuntu`, `node`, `python`) for security and reliability.

```bash
# Example: using the latest Python version as a base
FROM python:latest
```

---

## 3. Add Author and Description Information (`LABEL`)

For documentation and organization, use the `LABEL` instruction to add author information or purposes for the image.

```bash
LABEL maintainer="myemail@example.com"
LABEL description="Image for my Python application"
```

This helps with image identification and future maintenance.

---

## 4. Set the Working Directory (`WORKDIR`)

Defining the working directory with `WORKDIR` helps organize where files and commands will be executed. All subsequent commands will use this directory as their base.

```bash
WORKDIR /app
```

If you need to move to an directory, you also can use the command `WORKDIR`

```bash
WORKDIR /app/src
```


---

## 5. Copy Necessary Files (`COPY` and `ADD`)

Use `COPY` or `ADD` to transfer files from the local system to the container.

- `COPY`: simple and ideal for copying local files.
- `ADD`: allows copying local files and downloading from URLs.

### Example:
```bash
COPY . /app
```

This command copies all files from the current directory to the `/app` directory in the container.

---

## 6. Install Dependencies and Environment Configurations (`RUN` and `ENV`)

Use `RUN` to install dependencies and configure the environment. With `ENV`, set environment variables.

```bash
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ENV APP_ENV=production
```

These commands are essential to prepare the application's environment. Here, it upgrades `pip` and installs all dependencies listed in `requirements.txt`.

---

## 7. Expose Ports for External Access (`EXPOSE`)

To let Docker know which ports should be open to the external world, use `EXPOSE`.

```bash
EXPOSE 5000
```

This sets up port 5000 to be accessible, which is commonly used for Flask applications, for example.

---

## 8. Configure the Startup Command (`CMD` or `ENTRYPOINT`)

The startup command defines what the container will run when it starts. `CMD` and `ENTRYPOINT` are used here.

- **`CMD`**: default command but can be overridden.
- **`ENTRYPOINT`**: sets a fixed command that generally cannot be overridden.

### Example with `CMD`:
```bash
CMD ["python", "app.py"]
```

This command starts the Python application by running `app.py`.

---

## 9. Organize and Optimize the Dockerfile

- **Minimize the number of layers**: Combine `RUN` instructions to reduce layers and image size.
- **Use `.dockerignore` files** to ignore files that do not need to be in the container (like `.venv` or `__pycache__` folders in Python projects).

```bash
# Combining RUN instructions
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
```

---

## Complete Dockerfile Example

Here's a complete Dockerfile example for a Python application:

```bash
# Choosing the base image
FROM python:3.9

# Adding maintenance and description labels
LABEL maintainer="myemail@example.com"
LABEL description="Image for my Python application"

# Setting up the working directory
WORKDIR /app

# Copying application files
COPY . /app

# Installing dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Setting environment variables
ENV APP_ENV=production

# Exposing the port
EXPOSE 5000

# Setting the startup command
CMD ["python", "app.py"]
```

---

## Conclusion

This guide provides a logical and organized approach to understanding and creating a Dockerfile. Practice is essential, so try creating Dockerfiles for different applications, testing instructions, and adjusting as necessary.