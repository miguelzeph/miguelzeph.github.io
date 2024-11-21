
# Kafka: Minimum Necessary to Run

This guide provides a step-by-step approach to setting up and operating **Kafka**, including an overview of its components and practical instructions for managing topics, producing, and consuming messages.

---

## **Overview**

<img src="../img/kafka.png" alt="Kafka" width="80%">


1. **CLUSTER (Scalability):**

    - Manages a group of `BROKERS` in Kafka.
    - Can use **Zookeeper** or Kafka's built-in capabilities for cluster management.

2. **BROKER (Storage/Message Management):**

    - Recive messages from `PRODUCER`
    - A Kafka server that `stores messages` and `manages TOPICS`.  
    - Distributes messages to `CONSUMERS`.

3. **TOPIC (Organization):**  

    - A named channel for `organizing` and `storing` messages.  

4. **CONSUMER (Transforme/Processing):**  

    - `Reads` messages from `TOPICS` and **processes/transform** them, possibly forwarding data to other systems.

5. **PRODUCER (Create messages/Sending):**  

    - `Sends` messages to `TOPICS`.

P.S:

- **Zookeeper:**
  - Assigns an **Active Control Broker (AC)** to manage tasks like topic creation, partition management, and leader redistribution.  
  - Automatically reassigns roles in case of broker failures.

- **Offset:**  
    - A unique identifier for each message within a topic.

---

## **Setting Up Kafka**

### **1. Start Zookeeper Server**
- Use the official Docker image for Zookeeper:  
  - [Zookeeper Docker Hub](https://hub.docker.com/_/zookeeper)  
  - Image name: `zookeeper`

### **2. Start Kafka Server**
- Use the recommended Kafka Docker image:  
  - `apache/kafka`

### **3. Execute `docker-compose`**
- Start the services using:
  ```bash
  sudo docker-compose up --build
  ```
  - `--build`: Ensures images are rebuilt.


Example of **docker-compose.yml** file

```yml
version: '3'

services:
  zookeeper:
    image: wurstmeister/zookeeper
    container_name: zookeeper
    ports:
      - "2181:2181"

  #----------------------------------------- BROKERS --------------------------------
  # Broker 1
  kafka:
    image: wurstmeister/kafka
    container_name: kafka
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_LOG_RETENTION_HOURS: 168

  # Broker 2
  kafka-broker-2:
    image: wurstmeister/kafka
    container_name: kafka-broker-2
    ports:
      - "9093:9092"
    environment:
      KAFKA_BROKER_ID: 2
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka-broker-2:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_LOG_RETENTION_HOURS: 168

  #----------------------------------------- CONSUMERS --------------------------------
  # Consumer 1
  consumer-process-articles:
    build:
      context: .
      dockerfile: Dockerfile_python
    container_name: consumer-articles
    command: python consumer_articles.py
    depends_on:
      - kafka
      - kafka-broker-2

  # Consumer 2
  consumer-send-message-to-topic:
    build:
      context: .
      dockerfile: Dockerfile_python
    container_name: consumer-send-message-to-topic
    command: python consumer_send_message_to_topic.py
    depends_on:
      - kafka
      - kafka-broker-2

  #------------------------------------- GRAPHICAL INTERFACE ---------------------------
  kafka-ui:
    image: provectuslabs/kafka-ui
    container_name: kafka-ui
    ports:
      - "8080:8080"
    depends_on:
      - kafka
      - kafka-broker-2
      - zookeeper
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAP_SERVERS: kafka:9092,kafka-broker-2:9093
      KAFKA_CLUSTERS_0_ZOOKEEPER: zookeeper:2181

```

DOCKERFILE_PYTHON (Consumer), example:

```yml
FROM python:3.9-slim

# Install necessary dependencies
RUN pip install confluent-kafka

# Copy the scripts to the container in the correct folder
COPY ./consumers /app/consumers

# Working directory
WORKDIR /app/consumers


```

---

## **Basic Kafka Operations**

### **4. Access Kafka Container**
- Enter the Kafka container:

```bash
sudo docker exec -it kafka /bin/sh
```

-  Navigate to Kafka scripts directory:

```bash
cd /opt/kafka_2.13-2.8.1/bin/
```

- Use `find` to locate scripts if needed:

```bash
find / -name "kafka-topics.sh"
```

### **5. Create a Topic**
- Command:

```bash
kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic helloworld
```
  **Explanation of Parameters:**
  - `--bootstrap-server`: Kafka server address.
  - `--replication-factor`: Number of replicas (1 for single broker setup).
  - `--partitions`: Number of partitions for the topic.
  - `--topic`: Name of the topic.

### **6. Produce Messages**

- **Send Simple Messages**

- Command:

```bash
kafka-console-producer.sh --topic helloworld --bootstrap-server localhost:9092
```
  - Type messages and press ENTER to send.

- **Send Key-Value Messages**
- Command:

```bash
kafka-console-producer.sh --topic helloworld --bootstrap-server localhost:9092 --property parse.key=true --property key.separator=:
```

- Example format:
```text
key1:{"title":"Message Title","content":"Message Content"}
```

### **7. Consume Messages**
- Command:

```bash
kafka-console-consumer.sh --topic helloworld --bootstrap-server localhost:9092 --from-beginning
```

  **Explanation:**
  - `--from-beginning`: Reads all messages from the topic's start.

---

## **Graphical Interface**
- Access Kafka's UI in the browser:  
  - Navigate to `localhost:8080`.

---

## **Managing Persistent Data**

### **Remove Old Volumes**
- Clear existing volumes to prevent data conflicts:
  ```bash
  docker-compose down --volumes
  ```

---

## **Create a Custom Consumer**

### **1. Install Required Library**
- Use the `confluent-kafka` library:
  ```bash
  pip install confluent-kafka
  ```

### **2. Develop the Consumer**
- Write a Python script to act as a custom consumer.

### **3. Add Consumer to Docker Compose**
- Integrate the consumer into the `docker-compose.yml` file and start the service.

---

## **Testing and Handling Failures**

### **Stopping a Broker**
- Simulate a broker failure:
  ```bash
  sudo docker-compose stop kafka-broker-2
  ```
  - Observe message behavior.

### **Restarting the Broker**
- Restart the stopped broker:
  ```bash
  sudo docker-compose up kafka-broker-2
  ```

---

## **Commands Summary**

| **Command**                       | **Description**                          |
|-----------------------------------|------------------------------------------|
| `kafka-topics.sh --create`        | Create a new topic.                      |
| `kafka-console-producer.sh`       | Send messages to a topic.                |
| `kafka-console-consumer.sh`       | Consume messages from a topic.           |
| `docker-compose up --build`       | Start services with Docker Compose.      |
| `docker-compose down --volumes`   | Remove services and associated volumes.  |
| `sudo docker exec -it kafka`      | Access Kafka container shell.            |

