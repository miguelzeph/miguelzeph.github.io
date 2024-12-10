
# Kafka: Minimum Necessary to Run

This guide provides a step-by-step approach to setting up and operating **Kafka**, including an overview of its components and practical instructions for managing topics, producing, and consuming messages.

## Table of Contents
- [Overview](#overview)
    - [What is Kafka?](#what-is-kafka)
    - [What is the difference between Kafka and RabitMQ?](#what-is-the-difference-between-kafka-and-rabitmq)
- [Setting Up Kafka](#setting-up-kafka)
    - [1. Start Zookeeper Server](#1-start-zookeeper-server)
    - [2. Start Kafka Server](#2-start-kafka-server)
    - [3. Execute Docker Compose](#3-execute-docker-compose)
- [Basic Kafka Operations](#basic-kafka-operations)
    - [4. Access Kafka Container](#4-access-kafka-container)
    - [5. Create a Topic](#5-create-a-topic)
    - [6. Produce Messages](#6-produce-messages)
    - [7. Consume Messages](#7-consume-messages)
- [Graphical Interface](#graphical-interface)
- [Managing Persistent Data](#managing-persistent-data)
    - [Remove Old Volumes](#remove-old-volumes)
- [Create a Custom Consumer](#create-a-custom-consumer)
    - [1. Install Required Library](#1-install-required-library)
    - [2. Develop the Consumer](#2-develop-the-consumer)
    - [3. Add Consumer to Docker Compose](#3-add-consumer-to-docker-compose)
- [Testing and Handling Failures](#testing-and-handling-failures)
    - [Stopping a Broker](#stopping-a-broker)
    - [Restarting the Broker](#restarting-the-broker)
- [Commands Summary](#commands-summary)

---

## **Overview**

<img src="../img/kafka.png" alt="Kafka" width="80%">

---

### What is Kafka?

Kafka is a `Distributed Data Streaming Plataform` where have loads of different services, so it also can be classified in **sub-groups** as:

  - `Message Broker`
  - `ETL`
  - `Log System`
  - `Temporary Event Storage` (data rentention)


Let's have a look the Kafka architecture

### What is the difference between Kafka and RabitMQ?

| **Feature**              | **Apache Kafka**                                                                 | **RabbitMQ**                                                                 |
|--------------------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Architecture**          | Kafka uses a partitioned log model, combining message queue and publish-subscribe approaches. | RabbitMQ uses a message queue model.                                          |
| **Scalability**           | Kafka scales by allowing partitions to be distributed across different servers. | Scale by increasing the number of consumers in the queue to distribute processing among concurrent consumers. |
| **Message Retention**     | Based on policies, for example, messages can be stored for one day. The retention window can be configured by the user. | Based on acknowledgment, meaning messages are deleted as they are consumed.   |
| **Multiple Consumers**    | Multiple consumers can subscribe to the same topic, as Kafka allows the same message to be replayed for a certain period. | Not possible for multiple consumers to receive the same message, as messages are removed once consumed. |
| **Replication**           | Topics are replicated automatically, but users can manually configure topics to not be replicated. | Messages are not replicated automatically, but users can manually configure replication. |
| **Message Ordering**      | Each consumer receives messages in order due to the partitioned log architecture. | Messages are delivered to consumers in the order they arrive in the queue. If there are concurrent consumers, each consumer will process a subset of those messages. |
| **Protocols**             | Kafka uses a binary protocol over TCP.                                           | Advanced Message Queuing Protocol (AMQP) with support via plugins: MQTT, STOMP. |


---

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

---

P.S:

- **Zookeeper:**
  - Assigns an **Active Control Broker (AC)** to manage tasks like topic creation, partition management, and leader redistribution.  
  - Automatically reassigns roles in case of broker failures.

- **Offset:**  
    - A unique identifier for each message within a topic.


In summary: The **PRODUCER** `sends` messages to a **TOPIC**, the **BROKER** `manages the topics` and `retains` the messages for a period of time, the **CLUSTER** `manages the brokers`, and the **CONSUMER** `pulls` the data from the **TOPIC**, then performs `transformations` and/or `sends the data to another system or database`.

---

## **Setting Up Kafka**

#### **1. Start Zookeeper Server**
- Use the official Docker image for Zookeeper:  
  - [Zookeeper Docker Hub](https://hub.docker.com/_/zookeeper)  
  - Image name: `zookeeper`

#### **2. Start Kafka Server**
- Use the recommended Kafka Docker image:  
  - `apache/kafka`

#### **3. Execute `docker-compose`**
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

#### **4. Access Kafka Container**
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

#### **5. Create a Topic**
- Command:

```bash
kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic helloworld
```
  **Explanation of Parameters:**
  - `--bootstrap-server`: Kafka server address.
  - `--replication-factor`: Number of replicas (1 for single broker setup).
  - `--partitions`: Number of partitions for the topic.
  - `--topic`: Name of the topic.

#### **6. Produce Messages**

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

#### **7. Consume Messages**
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

#### **1. Install Required Library**
- Use the `confluent-kafka` library:
  ```bash
  pip install confluent-kafka
  ```

#### **2. Develop the Consumer**
- Write a Python script to act as a custom consumer.

#### **3. Add Consumer to Docker Compose**
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

