# 2. Data Structures

## Overview

Data structures are specialized formats for organizing, processing, retrieving, and storing data. They play a crucial role in optimizing data manipulation and access efficiency, impacting performance in terms of search, insertion, and update operations.

## Why?

Understanding how data can be organized efficiently in code will enhance your ability to manipulate and access data effectively.

## Objectives

- **Facilitate Efficient Data Manipulation:** Improve the performance of operations such as searching, inserting, and updating data.
- **Optimize Operations:** Choose the appropriate data structure to match the requirements of different operations and use cases.

## Key Concepts

### 1. Arrays

- **Description:** An array is a collection of elements identified by index or key. All elements in an array are of the same type.
- **Usage:** Best for fixed-size collections and quick access to elements via index.
- **Operations:** Access, update, insert, and delete operations are generally O(1) for arrays.

### 2. Linked Lists

- **Description:** A linked list is a linear collection of elements, where each element (node) contains a reference (link) to the next node in the sequence.
- **Usage:** Suitable for dynamic size collections where elements are frequently inserted or deleted.
- **Operations:** Insertions and deletions are O(1) if the node reference is known; access and search operations are O(n).

### 3. Trees

- **Description:** A tree is a hierarchical structure consisting of nodes, with each node containing a value and references to child nodes. The top node is called the root.
- **Usage:** Ideal for hierarchical data and applications like file systems and databases.
- **Types:**
  - **Binary Trees:** Each node has at most two children.
  - **Binary Search Trees (BST):** Nodes are arranged in a way that for each node, all elements in the left subtree are less and all in the right subtree are greater.
  - **Balanced Trees:** Like AVL or Red-Black Trees, where balance is maintained to ensure O(log n) operations.
- **Operations:** Search, insertion, and deletion operations are O(log n) for balanced trees.

### 4. Graphs

- **Description:** A graph is a collection of nodes (vertices) connected by edges. Graphs can be directed or undirected.
- **Usage:** Useful for representing relationships between entities, such as social networks, web page links, and more.
- **Types:**
  - **Directed Graphs:** Edges have a direction.
  - **Undirected Graphs:** Edges do not have a direction.
- **Operations:** Graph traversal algorithms like Depth-First Search (DFS) and Breadth-First Search (BFS) are commonly used.

### 5. Hash Tables

- **Description:** A hash table stores data in an associative manner using a hash function to map keys to values. It provides a very efficient way of indexing and retrieving data.
- **Usage:** Excellent for scenarios requiring fast lookup and retrieval operations.
- **Operations:** Average time complexity for insertion, deletion, and lookup is O(1), although worst-case complexity can be O(n) due to collisions.


## Conclusion

Understanding data structures is fundamental for efficient programming. Each structure offers unique advantages and is suited to different types of operations. By mastering these concepts, you can write code that is more efficient and scalable.

