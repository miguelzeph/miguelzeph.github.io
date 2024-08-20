[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-brightgreen?style=for-the-badge)](https://github.com/miguelzeph/data_queue_keeper)

# Data Queue Keeper

**Data Queue Keeper** is a project that integrates messaging services with data storage using Docker Compose. It consists of three main components:

- **RabbitMQ**: Manages message queues.
- **MongoDB**: Provides persistent data storage.
- **Python Application**: Consumes messages from the RabbitMQ queue and stores the data in MongoDB.

### Importance of the Data Queue Keeper Project

The **Data Queue Keeper** project demonstrates a scalable, reliable system that integrates RabbitMQ and MongoDB for efficient data processing. It highlights modern practices like containerization with Docker Compose, making the project easy to deploy and maintain. Additionally, it serves as a valuable educational tool for developers, showcasing how to build systems that ensure data integrity and handle increased load effectively.


### Project Structure

The project is organized as follows:

```bash
.
├── app/
│   ├── consumers/
│   │   ├── class_basic.py      # Base class for data consumers
│   │   ├── class_manager.py    # Manager class for consuming messages from RabbitMQ
│   │   └── class_mongo.py      # MongoDBClient class for connecting to MongoDB
│   ├── manager.py              # Starts the Manager
│   ├── saver.py                # Starts the Saver
│   └── settings.py             # Application settings and environment variables
├── config.yml                  # Configuration for RabbitMQ, MongoDB, and logger
├── docker-compose.yml          # Docker Compose configuration for containers
├── Dockerfile_python_manager   # Docker environment for the Python Manager application
├── Dockerfile_python_saver     # Docker environment for the Python Saver application
├── README.md                   # Project documentation
├── requirements.txt            # Python dependencies
└── sender.py                   # Script for sending messages to RabbitMQ for testing
```

### How to Run

* 1.**Clone the repository:**

```bash
git clone git@github.com:miguelzeph/data_queue_keeper.git
cd data-queue-keeper
```

* 2.**Set up the Python environment:**

Create and activate a virtual environment (optional but recommended):

```bash
virtualenv --python=<your_python_path> <your_env_name>
source ./<your_env_name>/bin/activate  # On Windows, use `<your_env_name>\Scripts\activate`
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

* 3.**Start the containers with Docker Compose:**

```bash
docker-compose up --build
```

* 4.**Send messages to RabbitMQ:**

  Run the `sender.py` script to send JSON messages to the RabbitMQ queue:

```bash
python sender.py
```

* 5.**Verify data insertion in MongoDB:**

    - Use the MongoDB CLI or a client to check the stored data.

### Additional Resources

- **RabbitMQ Management Interface:** Accessible at `http://localhost:15672` using `user/password`.
- **Resilience Testing:** Stop the `python_manager` container to see how RabbitMQ holds messages until the consumer resumes.
