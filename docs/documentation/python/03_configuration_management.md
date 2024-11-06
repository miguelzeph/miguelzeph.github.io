#  03 Configuration Management Guide with `klein-config`

This guide explains how to manage configuration settings in a Python project using the `klein-config` library. `klein-config` supports configurations from various sources like configuration files, environment variables, and command-line arguments, offering a flexible approach to configuration management in Python projects.

---

## Table of Contents
- [1. Installing `klein-config`](#1-installing-klein-config)
- [2. Creating a Configuration File](#2-creating-a-configuration-file)
  - [2.1 Using YAML](#21-using-yaml)
  - [2.2 Using JSON](#22-using-json)
- [3. Setting the Configuration File Path](#3-setting-the-configuration-file-path)
- [4. Creating a `settings.py` File](#4-creating-a-settingspy-file)
- [5. Practical Example: Using Imported Configurations](#5-practical-example-using-imported-configurations)

---

### 1. Installing `klein-config`

Before you start, ensure you have Python and `pip` installed on your machine.

Install `klein-config` using pip:

```bash
pip install klein-config
```

### 2. Creating a Configuration File

You can use either a `YAML` file or a `JSON` file to store your configuration settings. Below are examples of each.

#### 2.1 Using YAML

Create a configuration file named `config.yml` with your settings in YAML format:

```yaml
logger:
  level: INFO

mongo:
  hostname: mongodb
  port: 27017
  database: task_management
  collection: task
```

#### 2.2 Using JSON

Alternatively, create a `JSON` configuration file named `config.json` with the same structure in JSON format:

```json
{
  "logger": {
    "level": "INFO"
  },
  "mongo": {
    "hostname": "mongodb",
    "port": 27017,
    "database": "task_management",
    "collection": "task"
  }
}
```

### 3. Setting the Configuration File Path

Set the path to your `config.yml` or `config.json` file in the `KLEIN_CONFIG` environment variable:

```bash
export KLEIN_CONFIG=./my-path/config.yml
# Or if using JSON:
export KLEIN_CONFIG=./my-path/config.json
```

### 4. Creating a `settings.py` File

In your Python project, create a `settings.py` file to import and use configuration settings. Example:

```python
# settings.py
import logging
from klein_config import get_config

# Get config from the environment variable
config = get_config()

####### MongoDB Settings ########
MONGO_HOSTNAME = config.get("mongo.hostname")
MONGO_PORT = config.get("mongo.port")
MONGO_DATABASE = config.get("mongo.database")
MONGO_COLLECTION = config.get("mongo.collection")

############ Logger #############
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
```

### 5. Practical Example: Using Imported Configurations

After setting up environment variables, you can import these variables or instances anywhere in your Python code. This approach avoids hardcoding or duplicating code, enhancing readability and maintainability.

#### Project Structure

```bash
.
├── app
│   ├── mongo
│   │   ├── __init__.py
│   │   └── mongo_connection.py
│   ├── __init__.py
│   ├── main.py
│   └── settings.py
├── config.yml
├── README.md
└── requirements.txt
```

#### MongoDB Connection in `mongo_connection.py`

In `mongo_connection.py`, import the MongoDB settings from `settings.py` and establish a connection without repeating configuration code:

```python
# File: mongo_connection.py
import pymongo
from settings import (
    MONGO_HOSTNAME,
    MONGO_COLLECTION,
    MONGO_DATABASE,
    MONGO_PORT
)

mongo_client = pymongo.MongoClient(MONGO_HOSTNAME, MONGO_PORT)
db = mongo_client[MONGO_DATABASE]
mongo_collection = db[MONGO_COLLECTION]
```

Now, you can simply import the **mongo_collection** variable wherever needed without worrying about the connection or configuration details.

#### Example Usage in `main.py`

In `main.py`, you can use `mongo_collection` to interact with your database:

```python
# main.py
from app.mongo.mongo_connection import mongo_collection

if __name__ == "__main__":

    fake_data = {
        "name": "Task 1",
        "description": "This is a sample task",
        "status": "pending"
    }
    
    # Insert data into mongo collection
    mongo_collection.insert_one(fake_data)
```

This approach creates modular, organized pipelines in your code, allowing configuration imports only when necessary, which enhances readability and maintainability.

--- 

### Author

Miguel Angelo do Amaral Junior