# 2. Documentation on ETL and ELT Pipelines - Part 2

## Table of Contents

1. [Purpose of this Documentation](#purpose-of-this-documentation)
2. [Types of ETL and ELT](#types-of-etl-and-elt)
3. [ETL Pipeline with Kafka, Spark, and Airflow](#etl-pipeline-with-kafka-spark-and-airflow)
4. [ELT Pipeline with Kafka, Data Warehouse, and DBT](#elt-pipeline-with-kafka-data-warehouse-and-dbt)
5. [Conclusion](#conclusion)

---

## Purpose of this Documentation

The goal of this documentation is to help you understand **ETL and ELT** pipelines in a practical and **memorable way**. Each section uses **ETL/ELT abbreviations** directly with real tools (Kafka, Spark, Airflow, Snowflake, DBT) to make each step easy to remember and apply.

---

## Types of ETL and ELT

Both ETL and ELT processes can operate in two primary modes, each suited for specific use cases:

- **Batch Processing**: Processes large volumes of data at set intervals. Ideal for datasets that do not need real-time updates.
- **Streaming Processing (real time)**: Processes data in real time or near-real time, allowing for instant insights. Essential in cases where data freshness is critical, such as monitoring or alerting systems.

---

## ETL Pipeline with Kafka, Spark, and Airflow

This section explains how to set up an **ETL pipeline** using **Kafka, Spark, and Airflow**, along with a database or data lake for storage. Here’s how each component fits into the ETL abbreviation:

| Step        | Abbreviation | Tool    | Purpose                                                                                  |
|-------------|--------------|---------|------------------------------------------------------------------------------------------|
| Extract     | E            | Kafka   | Kafka `extract` data from `multiple sources` **(DB, API, Files, Webscraping etc)** in real-time or near real-time and accept loads of different `programming languages` **(Python, Scala, Java, Go, C++ etc)** |
| Transform   | T            | Spark   | Spark `transforms` data by cleaning, aggregating, and structuring it for analysis          |
| Load        | L            | Database/Data Lake | Stores transformed data, often as **raw data** in data lakes for reprocessing or analysis |
| Orchestration | ETL       | Airflow | `orchestrate ETL/ELT pipelines` for any data source or destination, managing dependencies, execution order and **scheduling**|

Each tool in this setup is chosen to highlight its specific role in the **ETL** pipeline, making it easier to associate the tools with each ETL step.

---

## ELT Pipeline with Kafka, Data Warehouse, and DBT

In an **ELT pipeline**, data loading happens before transformation, leveraging the processing power of the **Data Warehouse**. Below is the breakdown for an ELT setup using Kafka, a data warehouse, and DBT.

| Step        | Abbreviation | Tool          | Purpose                                                                                |
|-------------|--------------|---------------|----------------------------------------------------------------------------------------|
| Extract     | E            | Kafka         | Kafka `extract` data from `multiple sources` **(DB, API, Files, Webscraping etc)** in real-time or near real-time and accept loads of different `programming languages` **(Python, Scala, Java, Go, C++ etc)**|
| Load        | L            | Data Warehouse (e.g., Snowflake) | Loads `raw data` directly into a data warehouse like **Snowflake** for scalable storage  |
| Transform   | T            | DBT           | DBT (Data Build Tool) `transforms` data `within the warehouse`, leveraging its computation power |
| Orchestration | ELT       | Airflow        | Airflow | `orchestrate ETL/ELT pipelines` for any data source or destination, managing dependencies, execution order and **scheduling**|

The use of the **ETL** and **ELT** abbreviations here provides an intuitive guide to the function of each component.

---

## Conclusion

Choosing between **ETL** and **ELT** pipelines depends on data requirements, infrastructure, and the specific use case. ETL pipelines are traditionally better for pre-processed data, while ELT pipelines benefit from modern data warehouses' scalability and in-place processing.

Through this case study, the **ETL and ELT abbreviations** help structure each step, making the components memorable and their roles clear in both types of pipelines.

---