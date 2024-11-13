
# Documentação do Projeto: Sistema de Processamento de Dados em Streaming com Apache Kafka, Apache Spark e MongoDB

## 1. Visão Geral do Projeto

**Objetivo**: Criar um sistema de processamento de dados em streaming que coleta dados de uma API, processa e analisa esses dados em tempo real e os armazena em um banco de dados distribuído. 

## 2. Arquitetura do Sistema

Explique a arquitetura do sistema conforme ilustrado no diagrama:

1. **API**: Ponto de entrada dos dados. Pode ser configurada para consumir dados de uma API RESTful.
2. **Apache Airflow**: Utilizado para `orquestrar e gerenciar(agendar)` o pipeline ETL.
3. **PostgreSQL**: Banco de dados relacional para armazenar `metadados providos do Airflow`.
4. **Apache Kafka**: Middleware de streaming para transmissão de dados em tempo real.
5. **Apache Zookeeper**: Coordena o Kafka, gerenciando os brokers e tópicos.
6. **Control Center** e **Schema Registry**: Monitoramento e gerenciamento de schemas de dados.
7. **Apache Spark**: Plataforma de processamento distribuído usada para processar os dados em tempo real.
8. **MongoDB**: Banco de dados NoSQL para armazenamento de dados não estruturados com alta flexibilidade e escalabilidade.
9. **Docker**: Ambientes de contêiner para cada serviço, facilitando o deployment e a manutenção.

## 3. Configuração do Ambiente

**Pré-requisitos**:
- Instalação do Docker e Docker Compose
- Python 3.8 ou superior
- Instalação dos pacotes necessários:
  - `kafka-python` para Kafka
  - `pymongo` para MongoDB
  - `pyspark` para Spark
  - `psycopg2` para PostgreSQL
  - `apache-airflow` para Airflow

**Configuração do Docker**:
- Criação de arquivos `Dockerfile` para cada serviço, se necessário.
- Configuração de um `docker-compose.yml` para orquestrar todos os serviços.
- Instruções para executar `docker-compose up` para iniciar todos os contêineres.

## 4. Estrutura do Código

**Diretórios e arquivos principais**:
- `/src`: Contém o código-fonte principal.
  - `/src/api`: Código para consumir dados da API.
  - `/src/airflow`: Pipelines e DAGs do Apache Airflow.
  - `/src/kafka`: Configurações e scripts para o Kafka.
  - `/src/spark`: Scripts para processamento de dados no Apache Spark.
  - `/src/mongodb`: Scripts para manipulação de dados no MongoDB.
- `/docker`: Configurações e scripts Docker.
- `requirements.txt`: Dependências do projeto.

## 5. Componentes Principais e Implementação

**1. Coleta de Dados (API)**:
   - Iremos usar a API CoinGecko (para dados de criptomoedas)
   - Descrição: Criação de um script Python que coleta dados de uma API externa.
   - Exemplo de Código:
     ```python
     import requests

     def get_data():
         response = requests.get("URL_DA_API")
         data = response.json()
         # Processamento inicial dos dados
         return data
     ```

**2. Orquestração com Apache Airflow**:
   - Descrição: Configuração de DAGs no Airflow para agendar e gerenciar o pipeline de coleta e envio de dados.
   - Exemplo de DAG:
     ```python
     from airflow import DAG
     from airflow.operators.python_operator import PythonOperator
     from datetime import datetime

     def my_task():
         # Tarefa de coleta de dados
         pass

     with DAG("meu_dag", start_date=datetime(2023, 1, 1), schedule_interval="*/10 * * * *") as dag:
         task = PythonOperator(
             task_id="coleta_dados",
             python_callable=my_task
         )
     ```

**3. Streaming de Dados com Apache Kafka**:
   - Descrição: Configuração do Kafka para transmitir dados da API em tempo real para os consumidores.
   - Exemplo de Produção de Mensagens:
     ```python
     from kafka import KafkaProducer
     import json

     producer = KafkaProducer(bootstrap_servers='localhost:9092')

     def send_data(data):
         producer.send('topico', json.dumps(data).encode('utf-8'))
     ```

**4. Processamento com Apache Spark**:
   - Descrição: Spark é usado para processar e transformar os dados que chegam pelo Kafka.
   - Exemplo de Transformação no Spark:
     ```python
     from pyspark.sql import SparkSession

     spark = SparkSession.builder.appName("StreamingApp").getOrCreate()

     def process_streaming_data():
         # Código para consumir do Kafka e processar com Spark
         pass
     ```

**5. Armazenamento no MongoDB**:
   - Descrição: Salvamento dos dados processados no MongoDB para consultas futuras.
   - Exemplo de Inserção no MongoDB:
     ```python
     from pymongo import MongoClient

     client = MongoClient('localhost', 27017)
     db = client['meu_banco']
     collection = db['minha_colecao']

     def insert_data(data):
         collection.insert_one(data)
     ```

## 6. Configuração dos Tópicos do Kafka

- Criação de tópicos específicos no Kafka para diferentes tipos de dados ou para dividir o processamento em várias etapas.
- Exemplo de comando Kafka:
  ```bash
  kafka-topics.sh --create --topic meu_topico --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3
  ```

## 7. Monitoramento e Gestão de Schemas

**Control Center**: Utilizado para monitorar a performance e as métricas do Kafka.
**Schema Registry**: Registro dos schemas de dados para garantir a consistência entre produtores e consumidores.

## 8. Considerações de Desempenho e Escalabilidade

- Configuração de partições no Kafka para suportar alta ingestão de dados.
- Uso de cluster Spark com vários workers para distribuir o processamento.
- Configuração de sharding e replicação no MongoDB para escalabilidade.

## 9. Testes e Validação

- **Testes Unitários**: Scripts para testar cada componente individual (API, Kafka, Spark, MongoDB).
- **Testes de Integração**: Testar o fluxo completo para garantir que os dados fluem corretamente entre todos os componentes.
- **Testes de Desempenho**: Avaliação de desempenho sob carga para identificar gargalos e otimizar o sistema.

## 10. Deploy e Manutenção

- **Docker Compose**: Script para facilitar o deploy de todos os componentes em um ambiente de desenvolvimento.
- **Ambientes**: Explicação sobre ambientes (desenvolvimento, staging, produção) e como configurar variáveis para cada um.
- **Monitoramento Contínuo**: Configuração de alertas e monitoramento para verificar o desempenho e a saúde do sistema.

### Estrutura do Projeto

```bash
end-to-end-pipeline-etl/
│
├── docker/                           # Arquivos de configuração para Docker
│   ├── docker-compose.yml            # Docker Compose para orquestrar todos os serviços
│   ├── Dockerfile_airflow             # Dockerfile para o serviço Airflow (se necessário)
│   └── Dockerfile_spark               # Dockerfile para o serviço Spark (se necessário)
│
├── requirements.txt                  # Dependências Python do projeto
│
├── src/                              # Código-fonte principal
│   ├── api/                          # Código para consumir dados da API externa
│   │   └── fetch_data.py             # Script para coleta de dados da API e envio ao Kafka (função `extract_data`)
│   │
│   ├── airflow/                      # Pipelines e DAGs do Apache Airflow
│   │   └── dags/
│   │       └── etl_dag.py            # DAG principal do pipeline ETL, importando as funções
│   │
│   ├── kafka/                        # Configuração e scripts para Kafka
│   │   └── producer.py               # Script do produtor Kafka para enviar dados (função `send_to_kafka`)
│   │
│   ├── spark/                        # Scripts para o processamento no Apache Spark
│   │   └── transform_data.py         # Script para transformação de dados com Spark (função `transform_data`)
│   │
│   └── mongodb/                      # Scripts para manipulação de dados no MongoDB
│       └── load_data.py              # Script para salvar dados no MongoDB (função `load_data`)
│
└── README.md                         # Documentação do projeto

```