# Deploying a Docker Container on AWS EC2

This guide will walk you through the steps to deploy your Docker container on an AWS EC2 instance.

## 1. Build Your Application
First, create and test your application locally. Once the app is ready, move to the next steps to containerize it using Docker.

## 2. Create a Docker Image
Once your app is built, you need to create a Docker image for it.

### 2.1 Option A: Create a `.tar` Image for SSH Transfer
If you plan to transfer the image to your EC2 instance via SSH, create a tarball (`.tar`) of your Docker image by running:
```bash
docker save -o <image-name>.tar <image-name>
```

### 2.2 Option B: Push to Docker Hub
Alternatively, you can push your image to Docker Hub:

- 1.Tag your image:
```bash
docker tag <image-name> <dockerhub-username>/<repository>:<tag>
```

- 2.Push your image:
```bash
docker push <dockerhub-username>/<repository>:<tag>
```
Once your image is on Docker Hub, you can pull it from the EC2 instance later.

## 3. Launch an EC2 Instance
- Go to the AWS Management Console and create an EC2 instance.
- Choose the appropriate AMI (Amazon Machine Image) and instance type (e.g., t2.micro).

### 3.1 Modify Storage Volume (Optional)
Increase the default storage volume size up to 30GB — this is covered under the free tier.

### 3.2 Save the SSH Key
During instance creation, generate and download a key pair (.pem file). You'll need this to SSH into your instance.

### 3.3 Install Docker on EC2
Once the instance is running, SSH into (or access from AWS console clicking in "Connect") the EC2 instance and install Docker.

### 3.4 Load the Docker Image on EC2
Now, you can either:

- **Option A**: Copy the .tar file using scp
```bash
scp -i <your-key>.pem <image-name>.tar ubuntu@<ec2-public-ip>:~/
```
Then load the image:
```bash
docker load -i <image-name>.tar
```

- **Option B**: Pull the image directly from Docker Hub:
```bash
docker pull <dockerhub-username>/<repository>:<tag>
```
### 3.5 Run the Container

Run your Docker container on the EC2 instance:

```bash
docker run -d -p <host-port>:<container-port> <image-name>
```

## 4. Set Up a Security Group
Create or modify a security group for your EC2 instance to allow incoming traffic on the ports needed by your application (e.g., HTTP: 80 or a custom port).

- Go to the EC2 Dashboard > Security Groups.
- Add inbound rules for the necessary ports and set the source to `0.0.0.0/0` or restrict it to specific IPs.

## 5. Assign an Elastic IP
To ensure your public IP remains static (doesn’t change when you stop/start your instance):

1. Navigate to Elastic IPs in the EC2 Console.
2. Allocate a new Elastic IP.
3. Associate the Elastic IP with your running EC2 instance.

**Note**: Some cloud databases (like AWS RDS) require you to **whitelist** this static IP so that your application can access the database.

## 6. Test Your Application
Make sure the necessary ports are open in the security group, and access your application in the browser:

```bash
http://<your-static-ip>:<host-port>
```