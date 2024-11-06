# 2. REST API vs GraphQL API

## Table of Contents

1. [REST API vs GraphQL API](#rest-api-vs-graphql-api)
   - [Overview](#overview)
   - [Key Differences](#key-differences)
     - [Protocol](#protocol)
     - [Requests](#requests)
     - [Response Format](#response-format)
     - [Data Fetching](#data-fetching)
     - [Multiple Queries](#multiple-queries)
     - [URL Specification](#url-specification)
     - [Client Libraries](#client-libraries)
     - [Caching](#caching)
     - [CRUD Operations](#crud-operations)
   - [Conclusion](#conclusion)

## Overview
REST (Representational State Transfer) and GraphQL are two popular approaches for building APIs. While both serve the purpose of enabling communication between clients and servers, they have different methodologies, features, and use cases.

## Key Differences

| **Feature**                | **REST API**                                          | **GraphQL API**                                   |
|----------------------------|------------------------------------------------------|---------------------------------------------------|
| **Protocol**               | Uses HTTP                                           | Uses HTTP                                         |
| **Requests**               | Makes requests to specific URLs                      | Makes requests using a single endpoint            |
| **Response Format**        | Returns JSON (or XML) as a response                 | Returns JSON as a response                        |
| **Data Fetching**          | API implementer decides the source data included     | Client specifies the required resources and fields |
| **Multiple Queries**       | May require multiple queries to retrieve related data | Allows fetching multiple resources in a single query |
| **URL Specification**      | Requires URL to specify the resource                 | Uses GraphQL schema to specify queries (e.g., `type Book { ... }`) |
| **Client Libraries**       | Does not require special libraries; can use simple tools (e.g., `curl`, `requests`) | Often requires more complex support on both client and server sides |
| **Caching**                | Easy to implement caching strategies (e.g., cache database, web) | More difficult to cache due to flexible queries    |
| **CRUD Operations**        | Straightforward and simple for basic CRUD operations | More complex, but allows for flexibility in queries |

### Protocol
REST APIs and GraphQL APIs both use HTTP as their primary protocol for communication between the client and server, making them compatible with standard web infrastructure.

### Requests
REST APIs typically make requests to specific URLs that represent each resource, while GraphQL APIs make all requests to a single endpoint, relying on the query structure to define the requested resources.

### Response Format
REST APIs commonly return data in JSON or XML format, while GraphQL APIs return data exclusively in JSON.

### Data Fetching
With REST, the API developer determines what data is included in each response. In contrast, GraphQL allows the client to specify which fields and related resources it wants in a single query.

### Multiple Queries
REST often requires multiple calls to retrieve related resources (e.g., multiple endpoints for different parts of data), while GraphQL enables querying multiple resources within a single request.

### URL Specification
In REST APIs, the URL directly specifies the resource being accessed. GraphQL does not use URLs to define resources but instead relies on a schema with types and fields to guide requests.

### Client Libraries
REST can be accessed with basic tools such as `curl` or simple HTTP libraries, while GraphQL often requires specialized support on both the client and server sides, increasing the complexity.

### Caching
REST APIs generally make caching easier, as each resource has a unique URL that can be cached. In GraphQL, caching is more challenging due to the flexible query structure, making it difficult to predict resource usage.

### CRUD Operations
CRUD operations are straightforward in REST with distinct HTTP methods for each operation. In GraphQL, CRUD operations can be more complex but provide greater flexibility, allowing for custom queries and mutations.

## Conclusion
Both REST APIs and GraphQL APIs have their unique advantages and disadvantages. Choosing between them depends on the specific needs of your application, including data retrieval requirements, complexity, and caching strategies.

- **REST APIs** are ideal for applications that require a straightforward approach to CRUD operations and can benefit from easy caching.
- **GraphQL APIs** are more suitable for applications that need to query multiple resources efficiently and where the client needs to specify exactly what data is required.

By understanding these differences, developers can make informed decisions on which approach to take when designing their APIs.

---
**Author**: Miguel Amaral