# Document Library Microservice Architecture (Simplified with RabbitMQ)

## Overview

The Document Library is a microservice architecture that utilizes Python and RabbitMQ to ingest, process, and analyze documents from various sources and formats. RabbitMQ handles task distribution across microservices, removing the need for an additional asynchronous task system. This project includes components for monitoring and data storage, providing a scalable and efficient solution.

### Project Objectives

- Process documents in multiple formats, such as PDFs and spreadsheets.
- Perform information extraction using Natural Language Processing (NLP).
- Use RabbitMQ to manage communication and task orchestration between services.
- Monitor and log system events using Elasticsearch and Logstash.

## System Architecture

The architecture consists of Python services that use the **pika** library for direct integration with RabbitMQ. This allows services to communicate via queues, with each service listening for and processing messages relevant to its specific function. Data storage and log analysis are handled by MongoDB and Elasticsearch, respectively.

### Data Flow Diagram

```text
           +--------------------+
           |   User Interface   |
           |       (API)        |
           +--------------------+
                    |
                    v
           +--------------------+
           |    Dashboard       |
           |    (FastAPI)       |
           +--------------------+
                    |
                    v
           +--------------------+
           |     RabbitMQ       |
           |   (Message Queue)  |
           +--------------------+
                    |
                    v
          +---------|----------+ 
          |         |          |
          |         |          |
          v         v          v
+----------------+ +----------------+ +----------------+
| Spreadsheet    | | Raw Text       | |  Unarchiver    |
|  Converter     | |  Converter     | |   Service      |
| (Python, pika) | | (Python, pika) | | (Python, pika) |
+----------------+ +----------------+ +----------------+
                    |
                    v
           +--------------------+
           |  NER Processor     |
           |  (Python, pika)    |
           +--------------------+
                    |
                    v
           +--------------------+
           |     MongoDB        |
           |   (Data Storage)   |
           +--------------------+
                    |
                    v
           +--------------------+
           |   Logstash &       |
           |   Elasticsearch    |
           | (Logs & Monitoring)|
           +--------------------+
```

## System Components

### 1. User Interface (API):

- Receives documents uploaded by users for processing via HTTP.
- Technology: FastAPI
- Endpoints:
  - **POST /ingest**: Initiates the document ingestion process.


### 2. RabbitMQ:

- Manages communication between microservices, distributing tasks and ensuring correct processing order.
- Queues:
  - **prefetch_queue**: Stores documents needing metadata and initial preparation.
  - **converter_queue**: Handles spreadsheets and files needing conversion.
  - **ner_queue**: For documents requiring named entity recognition.

### 3. Spreadsheet Converter (Python, pika):

- Converts spreadsheets into tabular format.
- Listens to the converter_queue for documents and sends results to MongoDB. 

### 4. Raw Text Converter (Python, pika):

- Extracts text from PDFs.
- Processes documents from the converter_queue and stores raw text.

### 5. Unarchiver (Python, pika):
- Unzips files and enqueues internal files for subsequent processing.
- Listens to the converter_queue.

### 6. NER Processor (Python, pika):
- Performs named entity recognition (NER) on text documents.
- Receives documents from the ner_queue and stores results in MongoDB.


### 7. MongoDB:
- Stores all document metadata and NER analysis results.
- Purpose: Provides persistence and facilitates retrieval of processed data.


### 8. Logstash & Elasticsearch:

- Aggregates logs and events from all services for storage and real-time analysis.
- Purpose: Supports continuous monitoring and log analysis of the system.

## Environment Setup
- Requirements
- Python 3.8+
- RabbitMQ
- MongoDB
- Elasticsearch
- Docker (optional, to simplify deployment)


## Conclusion
This simplified architecture, with RabbitMQ at the core of orchestration, provides a robust solution for document processing. By eliminating additional task management layers, the system is more direct and efficient, while retaining scalability and flexibility for the integration of new microservices as needed.