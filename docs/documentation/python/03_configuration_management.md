# 03 - Configuration Management
This guide explains how to manage configuration settings in a Python project. There are many different ways to do this in Python, but I want to catch your attention using the library klein-config. Klein-config supports an impressive range of features that simplify configuration management in Python projects. It stands out for its ability to combine configurations from various sources, such as configuration files, environment variables, and command-line arguments, offering a flexible and efficient approach to configuration management.I would like to share a pratical way to set up and use klein-config for your project.

### Step by Step How to configure your project

* 1.First, you need to install the klein-config library using pip:

P.S. Before you start, make sure you have Python and `pip` installed on your machine.


```bash
pip install klein-config
```

* 2.Create a Configuration File:

You can use either a `YAML` file or a `JSON` file to store your configuration settings. Below are examples of what these files might look like:

* 2.1.Using YAML:

Create a configuration file named `config.yml`. This file will contain all your configuration settings in YAML format.

```yml
logger:
  level: INFO

mongo:
  hostname: mongodb
  port: 27017
  database: task_management
  collection: task
```

* 2.2.Using JSON:

Alternatively, you can create a `JSON` configuration file named `config.json`. The structure of the JSON file would be similar to the YAML file but in JSON format.


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

* 3.Set the configuration File Path: Set the path to your c`onfig.yml` file in the `KLEIN_CONFIG` environment variable. You can do this by exporting the variable in your terminal:

```bash
export KLEIN_CONFIG=./my-path/config.yml
# Or if you are using JSON:
export KLEIN_CONFIG=./my-path/config.json
```

* 4.Create a `settings.py` file: In your Python project, create a file named `settings.py` to import and use the configuration settings. Here is an example of how you can do this:

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

# Practical Example: How to Use Imported Configurations

After setting up the environment variables, you can import these variables or instances anywhere in your Python code. This approach avoids hardcoding or duplicating code, making your project more readable and maintainable.

Imagine a simple Python project structure like this:

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

In the **mongo_connection.py** file, you can now import the MongoDB settings from **settings.py** and establish a connection without needing to repeat the configuration code:

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

For example, in the **main.py** file:

```python

from settings.mongo_connection import mongo_collection

if __name__ == "__main__":

    fake_data = {
        "name": "Task 1",
        "description": "This is a sample task",
        "status": "pending"
    }
    
    # Insert data into mongo collection
    mongo_collection.insert_one(fake_data)
```

By following this approach, you can create modular and well-organized pipelines in your code, allowing you to import configurations only when necessary, which enhances the readability and maintainability of your project.

## Author
Miguel Angelo do Amaral Junior