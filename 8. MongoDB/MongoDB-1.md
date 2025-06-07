# Table of Contents

1. [MongoDB Shell (mongosh) Commands](#mongodb-shell-mongosh-commands)
   - [1. `mongosh`](#1-mongosh)
   - [2. `use <database_name>`](#2-use-database_name-eg-use-college)
   - [3. BSON Data](#3-bson-data)
   - [4. Collections](#4-collections)
     - [Document](#document)
     - [Collection](#collection)

2. [CRUD Operations](#crud-opertations)
   - [1. Inserting Data (Create)](#1-inserting-data-create)
     - [`insertOne()`](#insertone)
     - [`insertMany()`](#insertmany)
   - [2. Read Operations Overview](#2-read-operations-overview)
     - [`findOne()`](#findone)
     - [`find()`](#find-read)
     - [`countDocuments()`](#countdocuments)
   - [Query Operators](#query-operators)
     - [1. Comparison Query Operators](#1-comparison-query-operators)
     - [2. Logical Query Operators](#2-logical-query-operators)
     - [3. Element Query Operators](#3-element-query-operators)
     - [4. Evaluation Query Operators](#4-evaluation-query-operators)

3. [Update in DB](#update-in-db)
   - [1. `updateOne()`](#1-updateone)
   - [2. `updateMany()`](#2-updatemany)
   - [3. `replaceOne()`](#3-replaceone)
   - [Common Update Operators](#common-update-operators)
     - [`$set`](#set)
     - [`$inc`](#inc)
     - [`$unset`](#unset)
   - [Summary Table](#summary-table)
   - [Important Notes](#important-notes)

4. [Delete in DB](#delete-in-db)
   - [1. `deleteOne()`](#1-deleteone)
   - [2. `deleteMany()`](#2-deletemany)
   - [3. `remove()` (Legacy)](#3-remove-legacy)
   - [4. Deleting All Documents in a Collection](#4-deleting-all-documents-in-a-collection)
     - [Using `deleteMany()`](#using-deletemany)
     - [Using `remove()` (legacy)](#using-remove-legacy)
   - [5. Dropping a Collection](#5-dropping-a-collection)
   - [6. Dropping a Database](#6-dropping-a-database)
     - [Syntax](#syntax)
     - [Example](#example)
     - [Important Notes](#important-notes)
     - [Safety Check](#safety-check)
       - [Verify Current Database](#verify-current-database)
       - [List Collections](#list-collections)
       - [Drop Database](#drop-database)

# MongoDB Shell (mongosh) Commands

This document explains fundamental commands used within the MongoDB Shell (`mongosh`) to interact with your MongoDB database.

## 1. `mongosh`

The `mongosh` command is used to start the MongoDB Shell.

-   **Purpose**: `mongosh` is the interactive JavaScript interface for MongoDB. It allows you to connect to your MongoDB deployments and perform various operations, including:
    -   Executing CRUD (Create, Read, Update, Delete) operations on data.
    -   Performing administrative tasks like managing users, roles, and databases.
    -   Running JavaScript code directly against your database.
    -   Inspecting database status and performance metrics.

-   **How to Use**: Simply type `mongosh` in your terminal or command prompt.
    ```bash
    mongosh
    ```
    By default, `mongosh` attempts to connect to a MongoDB instance running on `localhost` at port `27017`. If your MongoDB instance is running elsewhere, you can specify the connection string (e.g., `mongosh "mongodb://<host>:<port>/<database>"`).

-   **Initial State**: Once connected, `mongosh` typically defaults to the `test` database. You will see a prompt like `test>` indicating the current database context.

## 2. `use <database_name>` (e.g., `use college`)

The `use` command is used within the `mongosh` shell to switch to a specified database.

-   **Purpose**: This command changes your current database context. Any subsequent operations (like inserting data, querying collections) will be performed on the database you've switched to.

-   **How to Use**: After starting `mongosh`, type `use` followed by the name of the database you want to use.
    ```javascript
    use college
    ```
    In this example, `college` is the name of the database.

-   **Database Creation**: A key characteristic of MongoDB is its "lazy" database creation. If the database specified (e.g., `college`) does not already exist, MongoDB will not create it immediately upon running the `use` command. Instead, it will implicitly create the database the first time you insert data into a collection within that database. For example, after `use college`, if you then run `db.students.insertOne({ name: "Alice" })`, the `college` database and the `students` collection will be created.

-   **Verification**: You can verify the current database by typing `db` at the `mongosh` prompt.
    ```javascript
    db
    ```
    This will output the name of the currently selected database (e.g., `college`). You can also list all databases using `show dbs`.


## 3. BSON Data

BSON stands for **Binary JSON**. It is a binary-encoded serialization of JSON-like documents that MongoDB uses to store data.

-   **Purpose**: While JSON is a human-readable text format, BSON is designed for efficient storage and traversal. MongoDB stores data records as BSON documents.
    -   **Efficiency**: BSON is more efficient for storage and scanning than plain JSON because it is a binary format. It includes length information for strings and documents, which allows for faster parsing and traversal.
    -   **Rich Data Types**: BSON supports more data types than JSON, including `Date`, `BinData` (binary data), `ObjectId`, `Long`, `Decimal128`, `Timestamp`, and more. This allows MongoDB to store a wider variety of data natively without complex serialization/deserialization.
    -   **Speed**: Because it's binary, BSON can be encoded and decoded much faster than text-based JSON, which is crucial for high-performance database operations.

-   **Comparison with JSON**:

    | Feature         | JSON (JavaScript Object Notation)                               | BSON (Binary JSON)                                            |
    | :-------------- | :-------------------------------------------------------------- | :------------------------------------------------------------ |
    | **Format**      | 1) Text-based, human-readable.                                  | Binary-encoded, not directly human-readable.                  |
    | **Space Usage** | 2) Space inefficient (e.g., field names are repeated for every document). | More space-efficient due to binary encoding and length prefixes. |
    | **Data Types**  | Limited to basic types (strings, numbers, booleans, arrays, objects, null). | Richer set of data types, including specific MongoDB types (e.g., `ObjectId`, `Date`, `BinData`). |
    | **Parsing**     | Requires parsing of text, which can be slower.                  | Faster parsing and traversal due to embedded length information. |
    | **Use Case**    | Primarily for data interchange between systems.                 | Internal data storage and network transfer format for MongoDB. |

-   **How MongoDB Uses BSON**: When you insert a JSON-like document into MongoDB, it is converted into BSON before being stored. When you query data, MongoDB retrieves the BSON document and converts it back to a JSON-like representation for display in `mongosh` or for use in applications. This conversion is seamless to the user, but BSON is fundamental to MongoDB's performance and flexibility.

## 4. Collections

In MongoDB, data is organized into documents and collections, which are fundamental concepts for understanding its data model.

-   **Document**: MongoDB stores data records as **documents**. These documents are essentially BSON (Binary JSON) documents, which are JSON-like field-value pairs.
    -   **Analogy**: If you're familiar with relational databases, a MongoDB document is conceptually similar to a **row** in a table.
    -   **Structure**: Each document consists of fields (key-value pairs). The values can be various BSON data types, including other documents, arrays, and arrays of documents.
    -   **`_id` Field**: Every document in MongoDB automatically has a unique `_id` field, which acts as the primary key for that document. If you don't provide one, MongoDB automatically generates an `ObjectId` for it.
    -   **Schema-less Nature**: A key characteristic of MongoDB documents is their flexible schema. Documents within the same collection do not need to have the same set of fields or the same structure. This allows for agile development and easy evolution of your data model.

-   **Collection**: MongoDB stores documents in **collections**.
    -   **Analogy**: Continuing the relational database analogy, a MongoDB collection is conceptually similar to a **table**.
    -   **Purpose**: Collections group together documents. Typically, documents within a collection share a common purpose or represent a similar entity (e.g., a `users` collection would contain user documents, a `products` collection would contain product documents).

# CRUD Opertations

## 1. Inserting Data (Create)

MongoDB provides various methods to insert documents into a collection. One of the most common methods for inserting a single document is `insertOne()`.

### `insertOne()`

-   **Purpose**: The `insertOne()` method is used to insert a single document into a collection. If the collection does not exist, MongoDB creates the collection when you first store data for that collection.

-   **Syntax**:
    ```javascript
    db.collection.insertOne(document)
    ```
    -   `db`: Refers to the currently selected database.
    -   `collection`: The name of the collection where you want to insert the document.
    -   `document`: The BSON document (or JSON-like object) that you want to insert.

-   **Example**: Let's say we want to insert a student record into a `student` collection within our `college` database.

    1.  **Select the database**:
        ```javascript
        use college
        ```

    2.  **Insert a document**:
        ```javascript
        db.student.insertOne({ name: "adam", marks: 79 })
        ```
        -   In this example, `student` is the name of the collection. If `student` collection doesn't exist, MongoDB will create it automatically upon this insertion.
        -   The document `{ name: "adam", marks: 79 }` is inserted. MongoDB will automatically add an `_id` field to this document if not explicitly provided.

    3.  **Verify Collection Creation (Optional)**: You can list all collections in the current database to see if the `student` collection was created:
        ```javascript
        show collections
        ```
        This command will display a list of collections, including `student` if it was created.

    4.  **Verify Document Insertion**: To confirm that the document was successfully inserted, you can use the `find()` method to retrieve all documents from the `student` collection:
        ```javascript
        db.student.find()
        ```
        This will output the document(s) present in the `student` collection, including the one you just inserted.

-   **Lazy Collection Creation**: Similar to how databases are created, if the specified collection (e.g., `student`) does not already exist, MongoDB will not create it immediately upon referencing it. Instead, it will implicitly create the collection the first time you insert data into it using methods like `insertOne()`.

### `insertMany()`

-   **Purpose**: The `insertMany()` method is used to insert multiple documents into a collection. Similar to `insertOne()`, if the collection does not exist, MongoDB creates it when you first store data for that collection.

-   **Syntax**:
    ```javascript
    db.collection.insertMany([document1, document2, ...])
    ```
    -   `db`: Refers to the currently selected database.
    -   `collection`: The name of the collection where you want to insert the documents.
    -   `[document1, document2, ...]`: An array of BSON documents (or JSON-like objects) that you want to insert.

-   **Example**: Let's continue with our `college` database and `student` collection. We want to insert multiple student records.

    1.  **Select the database (if not already selected)**:
        ```javascript
        use college
        ```

    2.  **Insert multiple documents**:
        ```javascript
        db.student.insertMany([
            { name: "bob", marks: 65 },
            { name: "eve", city: "Delhi" }
        ])
        ```
        -   In this example, two documents are inserted into the `student` collection.
        -   Notice the flexible schema: "bob" has `name` and `marks`, while "eve" has `name` and `city`. MongoDB handles this without requiring a predefined schema.
        -   MongoDB will automatically add an `_id` field to each document if not explicitly provided.

    3.  **Verify Document Insertion**: To confirm that the documents were successfully inserted, you can use the `find()` method:
        ```javascript
        db.student.find()
        ```
        This will output all documents present in the `student` collection, including the ones you just inserted with `insertMany()`.

-   **Lazy Collection Creation**: As with `insertOne()`, if the specified collection (e.g., `student`) does not exist, MongoDB will implicitly create it the first time you insert data into it using `insertMany()`.


## 2. Read Operations Overview

-   **Purpose**: Read operations in MongoDB are used to retrieve documents from a collection. These operations allow you to query for specific data, retrieve all documents, or count documents based on various criteria. MongoDB provides flexible query capabilities to efficiently access your data.

### `findOne()`

-   **Purpose**: The `findOne()` method is specifically designed to retrieve a *single* document from a collection. It searches for documents that match the specified query criteria.
    -   If one or more documents satisfy the query, `findOne()` returns the *first* document encountered. It's crucial to understand that without an explicit sort order, the "first" document is not guaranteed to be consistent across different executions or in sharded environments.
    -   If no documents in the collection match the provided query criteria, the method returns `null`.
    -   A key distinction from the `find()` method is that `findOne()` directly returns the BSON document object itself (or `null`), rather than a cursor. This makes it ideal for scenarios where you expect at most one result, need to retrieve a specific document by its unique identifier, or simply want to fetch any single matching document.

-   **Syntax**:
    ```javascript
    db.collection.findOne({ <query_criteria> })
    ```
    -   `db`: Refers to the currently selected database.
    -   `collection`: The name of the collection you want to query.
    -   `<query_criteria>`: An optional document that specifies the selection filter. Only documents that match these criteria are returned. If omitted, `findOne()` returns the first document in the collection.

-   **Example**: Let's use our `college` database and `student` collection.

    1.  **Select the database (if not already selected)**:
        ```javascript
        use college
        ```

    2.  **Find a single document by name**: To retrieve the first document where the `name` field is "alice":
        ```javascript
        db.student.findOne({ name: "alice" })
        ```
        **Expected Output**:
        ```
        { "_id" : ObjectId("..."), "name" : "alice", "marks" : 90 }
        ```
        (Assuming "alice" is present and this is the first match)

    3.  **Find a document with multiple criteria**: To find a student named "bob" with marks 65:
        ```javascript
        db.student.findOne({ name: "bob", marks: 65 })
        ```
        **Expected Output**:
        ```
        { "_id" : ObjectId("..."), "name" : "bob", "marks" : 65 }
        ```

    4.  **Find a document that does not exist**:
        ```javascript
        db.student.findOne({ name: "charlie" })
        ```
        **Expected Output**:
        ```
        null
        ```

### `find()` (Read)

-   **Purpose**: The `find()` method is used to query a collection for documents. It can retrieve all documents in a collection or only those that match specific query criteria. It returns a cursor, which is a reference to the documents matching the query, allowing for efficient processing of results.

-   **Syntax**:
    ```javascript
    db.collection.find() // Returns all documents in the collection
    db.collection.find({ <query_criteria> }) // Returns documents that match the query
    ```
    -   `db`: Refers to the currently selected database.
    -   `collection`: The name of the collection you want to query.
    -   `<query_criteria>`: An optional document that specifies the selection filter. Only documents that match these criteria are returned. If omitted, all documents in the collection are returned.

-   **Example**: Let's continue with our `college` database and `student` collection, which now contains documents like `{ name: "alice", marks: 90 }`, `{ name: "bob", marks: 65 }`, and `{ name: "eve", city: "Delhi" }`.

    1.  **Select the database (if not already selected)**:
        ```javascript
        use college
        ```

    2.  **Find all documents**: To retrieve every document in the `student` collection:
        ```javascript
        db.student.find()
        ```
        **Expected Output**:
        ```
        { "_id" : ObjectId("..."), "name" : "alice", "marks" : 90 }
        { "_id" : ObjectId("..."), "name" : "bob", "marks" : 65 }
        { "_id" : ObjectId("..."), "name" : "eve", "city" : "Delhi" }
        ```

    3.  **Find documents with specific criteria**: To find documents where the `name` field is "bob":
        ```javascript
        db.student.find({ name: "bob" })
        ```
        This will return only the document(s) where the `name` field is "bob":
        ```
        { "_id" : ObjectId("..."), "name" : "bob", "marks" : 65 }
        ```

    4.  **Find documents with multiple criteria**: You can combine multiple conditions in your query. For example, to find students named "bob" who have marks greater than 60 (using the `$gt` operator for "greater than"):
        ```javascript
        db.student.find({ name: "bob", marks: { $gt: 60 } })
        ```
        **Expected Output**:
        ```
        { "_id" : ObjectId("..."), "name" : "bob", "marks" : 65 }
        ```

### `countDocuments()`

-   **Purpose**: The `countDocuments()` method returns the count of documents that match the specified query criteria. It provides an accurate count of documents in a collection or a subset of documents.

-   **Syntax**:
    ```javascript
    db.collection.countDocuments({ <query_criteria> })
    ```
    -   `db`: Refers to the currently selected database.
    -   `collection`: The name of the collection you want to count documents from.
    -   `<query_criteria>`: An optional document that specifies the selection filter. Only documents that match these criteria are counted. If omitted, all documents in the collection are counted.

-   **Example**: Let's use our `college` database and `student` collection.

    1.  **Select the database (if not already selected)**:
        ```javascript
        use college
        ```

    2.  **Count all documents**: To get the total number of documents in the `student` collection:
        ```javascript
        db.student.countDocuments({})
        ```
        **Expected Output**:
        ```
        3
        ```
        (Assuming "alice", "bob", "eve" are present)

    3.  **Count documents with specific criteria**: To count documents where the `marks` field is greater than 70:
        ```javascript
        db.student.countDocuments({ marks: { $gt: 70 } })
        ```
        **Expected Output**:
        ```
        1
        ```
        (Assuming only "alice" has marks 90)

    4.  **Count documents with a non-existent field**:
        ```javascript
        db.student.countDocuments({ city: "Delhi" })
        ```
        **Expected Output**:
        ```
        1
        ```
        (Assuming only "eve" has city "Delhi")

### Query Operators

MongoDB provides a rich set of query operators that allow you to specify more complex and precise criteria for selecting documents. These operators are used within the query document passed to methods like `find()`, `countDocuments()`, `updateMany()`, `deleteMany()`, etc.

Here's a detailed look at some common categories of query operators:

#### 1. Comparison Query Operators

These operators are used to compare values in documents.

-   **`$eq` (Equal To)**: Matches documents where the value of a field equals the specified value.
    -   **Syntax**: `{ field: { $eq: value } }` (often implied if no operator is used, e.g., `{ field: value }` is equivalent to `{ field: { $eq: value } }`)
    -   **Example**: Find students with exactly 90 marks.
        ```javascript
        db.student.find({ marks: { $eq: 90 } })
        // or simply: db.student.find({ marks: 90 })
        ```
        **Expected Output**: Documents for "alice" (assuming marks 90)

-   **`$ne` (Not Equal To)**: Matches documents where the value of a field is not equal to the specified value.
    -   **Syntax**: `{ field: { $ne: value } }`
    -   **Example**: Find students whose name is not "bob".
        ```javascript
        db.student.find({ name: { $ne: "bob" } })
        ```
        **Expected Output**: Documents for "alice", "eve"

-   **`$gt` (Greater Than)**: Matches documents where the value of a field is greater than the specified value.
    -   **Syntax**: `{ field: { $gt: value } }`
    -   **Example**: Find students with marks greater than 70.
        ```javascript
        db.student.find({ marks: { $gt: 70 } })
        ```
        **Expected Output**: Documents for "alice" (assuming marks 90)

-   **`$gte` (Greater Than or Equal To)**: Matches documents where the value of a field is greater than or equal to the specified value.
    -   **Syntax**: `{ field: { $gte: value } }`
    -   **Example**: Find students with marks greater than or equal to 80.
        ```javascript
        db.student.find({ marks: { $gte: 80 } })
        ```
        **Expected Output**: Documents for "alice" (assuming marks 90)

-   **`$lt` (Less Than)**: Matches documents where the value of a field is less than the specified value.
    -   **Syntax**: `{ field: { $lt: value } }`
    -   **Example**: Find students with marks less than 70.
        ```javascript
        db.student.find({ marks: { $lt: 70 } })
        ```
        **Expected Output**: Documents for "bob", "eve" (assuming marks 60, 50)

-   **`$lte` (Less Than or Equal To)**: Matches documents where the value of a field is less than or equal to the specified value.
    -   **Syntax**: `{ field: { $lte: value } }`
    -   **Example**: Find students with marks less than or equal to 60.
        ```javascript
        db.student.find({ marks: { $lte: 60 } })
        ```
        **Expected Output**: Documents for "bob", "eve" (assuming marks 60, 50)

-   **`$in` (In an Array)**: Matches documents where the value of a field equals any value in the specified array.
    -   **Syntax**: `{ field: { $in: [value1, value2, ...] } }`
    -   **Example**: Find students whose name is "alice" or "eve".
        ```javascript
        db.student.find({ name: { $in: ["alice", "eve"] } })
        ```
        **Expected Output**: Documents for "alice", "eve"

-   **`$nin` (Not In an Array)**: Matches documents where the value of a field does not equal any value in the specified array.
    -   **Syntax**: `{ field: { $nin: [value1, value2, ...] } }`
    -   **Example**: Find students whose name is neither "alice" nor "bob".
        ```javascript
        db.student.find({ name: { $nin: ["alice", "bob"] } })
        ```
        **Expected Output**: Documents for "eve"

#### 2. Logical Query Operators

These operators combine query expressions.

-   **`$and` (Logical AND)**: Joins query clauses with a logical AND, returning all documents that match the conditions of all clauses.
    -   **Syntax**: `{ $and: [ { <expression1> }, { <expression2> }, ... ] }`
    -   **Example**: Find students named "alice" AND with marks greater than 80.
        ```javascript
        db.student.find({ $and: [{ name: "alice" }, { marks: { $gt: 80 } }] })
        // Note: For simple AND conditions on different fields, you can also use implicit AND:
        // db.student.find({ name: "alice", marks: { $gt: 80 } })
        ```
        **Expected Output**: Document for "alice"

-   **`$or` (Logical OR)**: Joins query clauses with a logical OR, returning all documents that match the conditions of at least one clause.
    -   **Syntax**: `{ $or: [ { <expression1> }, { <expression2> }, ... ] }`
    -   **Example**: Find students named "bob" OR with marks less than 60.
        ```javascript
        db.student.find({ $or: [{ name: "bob" }, { marks: { $lt: 60 } }] })
        ```
        **Expected Output**: Documents for "bob", "eve" (assuming bob has marks 60, eve has marks 50)

-   **`$not` (Logical NOT)**: Inverts the effect of a query expression and returns documents that do NOT match the query expression.
    -   **Syntax**: `{ field: { $not: { <operator_expression> } } }`
    -   **Example**: Find students whose marks are NOT greater than 70 (i.e., marks are less than or equal to 70).
        ```javascript
        db.student.find({ marks: { $not: { $gt: 70 } } })
        ```
        **Expected Output**: Documents for "bob", "eve"

-   **`$nor` (Logical NOR)**: Joins query clauses with a logical NOR, returning all documents that fail to match both clauses.
    -   **Syntax**: `{ $nor: [ { <expression1> }, { <expression2> }, ... ] }`
    -   **Example**: Find students who are neither named "alice" NOR have marks greater than 70.
        ```javascript
        db.student.find({ $nor: [{ name: "alice" }, { marks: { $gt: 70 } }] })
        ```
        **Expected Output**: Documents for "bob", "eve" (assuming alice has marks 90, bob 60, eve 50)

#### 3. Element Query Operators

These operators query documents based on the existence or type of fields.

-   **`$exists`**: Matches documents that have or do not have a specified field.
    -   **Syntax**: `{ field: { $exists: <boolean> } }`
    -   **Example**: Find students who have a `city` field.
        ```javascript
        db.student.find({ city: { $exists: true } })
        ```
        **Expected Output**: Document for "eve"

    -   **Example**: Find students who do NOT have a `city` field.
        ```javascript
        db.student.find({ city: { $exists: false } })
        ```
        **Expected Output**: Documents for "alice", "bob"

-   **`$type`**: Selects documents where the value of a field is of a specified BSON type.
    -   **Syntax**: `{ field: { $type: <BSON type number or string> } }`
    -   **Common Types**: "string", "int", "double", "boolean", "array", "object", "null"
    -   **Example**: Find documents where the `name` field is a string.
        ```javascript
        db.student.find({ name: { $type: "string" } })
        ```
        **Expected Output**: Documents for "alice", "bob", "eve"

#### 4. Evaluation Query Operators

These operators evaluate the query expression on a document level.

-   **`$regex` (Regular Expression)**: Selects documents where values match a specified regular expression.
    -   **Syntax**: `{ field: { $regex: /pattern/, $options: '<options>' } }` or `{ field: { $regex: 'pattern', $options: '<options>' } }`
    -   **Options**: `i` (case-insensitive), `m` (multiline), `x` (extended whitespace), `s` (dotall)
    -   **Example**: Find students whose name starts with "a" (case-insensitive).
        ```javascript
        db.student.find({ name: { $regex: /^a/i } })
        ```
        **Expected Output**: Document for "alice"

    -   **Example**: Find students whose name contains "o".
        ```javascript
        db.student.find({ name: { $regex: /o/ } })
        ```
        **Expected Output**: Document for "bob"

These operators provide powerful capabilities for constructing complex and precise queries in MongoDB.

## Update in DB
Updating documents in MongoDB allows you to modify existing data in your collections. This is a crucial part of CRUD (Create, Read, Update, Delete) operations. MongoDB provides several methods to update documents, each with different use cases and levels of control.

### 1. `updateOne()`

- **Purpose**: Updates a single document that matches the specified filter criteria.
- **Syntax**:
    ```javascript
    db.collection.updateOne(
        { <filter> },
        { <update operations> },
        { <otions> }
    )
    ```
    - `<filter>`: The criteria to select the document you want to update.
    - `<update operations>`: The modifications you want to apply (usually with update operators like `$set`, `$inc`, etc.).

- **Example**: Suppose you want to update the marks of the student named "bob" to 75.
    ```javascript
    db.student.updateOne(
        { name: "bob" },
        { $set: { marks: 75 } }
    )
    ```
    This command finds the first document where `name` is "bob" and sets the `marks` field to 75.

- **Result**: Only the first matching document is updated, even if multiple documents match the filter.

---

### 2. `updateMany()`

- **Purpose**: Updates all documents that match the filter criteria.
- **Syntax**:
    ```javascript
    db.collection.updateMany(
        { <filter> },
        { <update operations> }
    )
    ```

- **Example**: Suppose you want to add a new field `status: "active"` to all students who have marks greater than 70.
    ```javascript
    db.student.updateMany(
        { marks: { $gt: 70 } },
        { $set: { status: "active" } }
    )
    ```
    This command finds all documents where `marks` is greater than 70 and adds (or updates) the `status` field to "active".

- **Result**: All documents matching the filter are updated.

---

### 3. `replaceOne()`

- **Purpose**: Replaces an entire document (except for the `_id` field) with a new document.
- **Syntax**:
    ```javascript
    db.collection.replaceOne(
        { <filter> },
        { <replacement document> }
    )
    ```

- **Example**: Replace the document for the student named "eve" with a new document.
    ```javascript
    db.student.replaceOne(
        { name: "eve" },
        { name: "eve", city: "Mumbai", marks: 80 }
    )
    ```
    This command finds the document where `name` is "eve" and replaces the entire document with the new one provided.

- **Note**: The replacement document must contain all the fields you want to keep (except `_id`, which is preserved automatically).

---

### Common Update Operators

- **`$set`**: Sets the value of a field in a document. If the field does not exist, it will be created.
    ```javascript
    { $set: { field: value } }
    ```
- **`$inc`**: Increments the value of a field by a specified amount.
    ```javascript
    { $inc: { marks: 5 } }
    ```
    Example: Increase "alice"'s marks by 5.
    ```javascript
    db.student.updateOne(
        { name: "alice" },
        { $inc: { marks: 5 } }
    )
    ```
- **`$unset`**: Removes a field from a document.
    ```javascript
    { $unset: { field: "" } }
    ```
    Example: Remove the `city` field from "bob".
    ```javascript
    db.student.updateOne(
        { name: "bob" },
        { $unset: { city: "" } }
    )
    ```

---

### Summary Table

| Method           | Updates...               | Use Case Example                                 |
|------------------|--------------------------|--------------------------------------------------|
| `updateOne()`    | First matching document  | Change marks for a specific student              |
| `updateMany()`   | All matching documents   | Add a field to all students with marks > 70      |
| `replaceOne()`   | Entire matching document | Replace a student's record with new information  |

---

### Important Notes

- If the filter does not match any documents, no update occurs.
- By default, only the fields specified in the update operation are changed; other fields remain unchanged (except with `replaceOne()`).
- You can combine multiple update operators in a single update operation.

Updating documents is a powerful feature in MongoDB, allowing you to keep your data accurate and up-to-date as your application evolves.

## Delete in DB

Deleting documents in MongoDB allows you to remove data that is no longer needed from your collections. This is the final operation in the CRUD (Create, Read, Update, Delete) cycle. MongoDB provides several methods to delete documents, each suited for different scenarios.

### 1. `deleteOne()`

- **Purpose**: Removes a single document that matches the specified filter criteria.
- **Syntax**:
    ```javascript
    db.collection.deleteOne({ <filter> })
    ```
    - `<filter>`: The criteria to select the document you want to delete.

- **Example**: Delete the student named "eve".
    ```javascript
    db.student.deleteOne({ name: "eve" })
    ```
    This command will remove the first document it finds where the `name` field is "eve".

### 2. `deleteMany()`

- **Purpose**: Removes all documents that match the specified filter criteria.
- **Syntax**:
    ```javascript
    db.collection.deleteMany({ <filter> })
    ```
    - `<filter>`: The criteria to select the documents you want to delete.

- **Example**: Delete all students with marks less than 60.
    ```javascript
    db.student.deleteMany({ marks: { $lt: 60 } })
    ```
    This will remove all documents where the `marks` field is less than 60.

### 3. `remove()` (Legacy)

- **Purpose**: The `remove()` method is an older way to delete documents. It is recommended to use `deleteOne()` and `deleteMany()` in new applications.
- **Syntax**:
    ```javascript
    db.collection.remove({ <filter> })
    ```
    - By default, removes all documents matching the filter.

- **Example**: Remove all students named "bob".
    ```javascript
    db.student.remove({ name: "bob" })
    ```

### 4. Deleting All Documents in a Collection

To remove all documents from a collection but keep the collection itself:
You can delete all documents in a collection by passing an empty filter (`{}`) to `deleteMany()` or `remove()`. This will not drop the collection itself, only remove all its documents.

- **Using `deleteMany()`**:
    ```javascript
    db.collection.deleteMany({})
    ```
    **Example**: Remove all documents from the `student` collection:
    ```javascript
    db.student.deleteMany({})
    ```
    After this operation, the `student` collection will be empty, but the collection will still exist in the database.

- **Using `remove()` (legacy)**:
    ```javascript
    db.collection.remove({})
    ```
    **Example**:
    ```javascript
    db.student.remove({})
    ```

### 5. Dropping a Collection

If you want to completely remove a collection (including all its documents and metadata), use the `drop()` method:

- **Syntax**:
    ```javascript
    db.collection.drop()
    ```
- **Example**: Drop the `student` collection entirely:
    ```javascript
    db.student.drop()
    ```
    This will permanently delete the collection and all its documents from the database.

### 6. Dropping a Database

To completely remove a database and all its collections, use the `dropDatabase()` method:

- **Syntax**:
    ```javascript
    db.dropDatabase()
    ```
- **Example**: Drop the current database:
    ```javascript
    db.dropDatabase()
    ```
    This will permanently delete the current database and all its collections.

- **Important Notes**:
    - This operation cannot be undone
    - Make sure you're in the correct database before executing this command
    - You can verify the current database using `db` command
    - After dropping, the database will be removed from the list of databases (check using `show dbs`)

- **Safety Check**: Before dropping a database, you can:
    1. Verify current database:
        ```javascript
        db
        ```
    2. List all collections in the database:
        ```javascript
        show collections
        ```
    3. Then proceed with dropping if you're sure:
        ```javascript
        db.dropDatabase()
        ```


These deletion methods allow you to manage and clean up your MongoDB collections as needed, whether you want to remove specific documents, clear out a collection, or drop it entirely.


