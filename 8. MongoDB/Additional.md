# Additional Tips and Best Practices for CRUD Operations

## Table of Contents

1. [Inserting Multiple Documents](#1-inserting-multiple-documents)
   - [Syntax](#syntax)
   - [Example](#example)

2. [Batch Operations](#2-batch-operations)
   - [Syntax](#syntax-1)

3. [Error Handling](#3-error-handling)
   - [Example](#example-1)

4. [Indexing](#4-indexing)
   - [Syntax](#syntax-2)
   - [Example](#example-2)

5. [Data Validation](#5-data-validation)
   - [Example](#example-3)

6. [Atomic Operations](#6-atomic-operations)
   - [Example](#example-4)

7. [Projection](#7-projection)
   - [Example](#example-5)

8. [Aggregation Pipeline](#8-aggregation-pipeline)
   - [Example](#example-6)

9. [Indexing (Advanced)](#9-indexing)
   - [Single Field Index Example](#example-7)
   - [Compound Index Example](#example-8)

10. [Error Handling (Advanced)](#10-error-handling)
    - [Try-Catch Example](#example-9)

11. [Data Validation (Advanced)](#11-data-validation)
    - [Collection Validation Example](#example-10)

12. [Backup and Recovery](#12-backup-and-recovery)
    - [Mongodump Example](#example-11)
    - [Mongorestore Example](#example-12)

13. [Security Best Practices](#13-security-best-practices)
    - [User Creation Example](#example-13)

14. [Performance Monitoring](#14-performance-monitoring)
    - [Current Operations Example](#example-14)
    - [Database Statistics Example](#example-15)


### 1. Inserting Multiple Documents
When inserting multiple documents, you can use `insertMany()` to add several documents in a single operation. This is more efficient than making multiple `insertOne()` calls.

- **Syntax**:
    ```javascript
    db.collection.insertMany([document1, document2, ...])
    ```

- **Example**: Insert multiple student records at once:
    ```javascript
    db.student.insertMany([
        { name: "john", marks: 85 },
        { name: "sarah", marks: 92 },
        { name: "mike", marks: 78 }
    ])
    ```

### 2. Batch Operations

For better performance when performing multiple operations, consider using bulk operations:

- **Syntax**:
    ```javascript
    const bulk = db.collection.initializeUnorderedBulkOp();
    bulk.insert({ name: "alex", marks: 88 });
    bulk.insert({ name: "emma", marks: 95 });
    bulk.execute();
    ```

### 3. Error Handling

Always implement proper error handling for your CRUD operations:

- **Example**:
    ```javascript
    try {
        const result = await db.student.insertOne({ name: "tom", marks: 82 });
        console.log("Inserted document:", result);
    } catch (error) {
        console.error("Error inserting document:", error);
    }
    ```

### 4. Indexing

Create indexes to improve query performance:

- **Syntax**:
    ```javascript
    db.collection.createIndex({ field: 1 })  // 1 for ascending, -1 for descending
    ```

- **Example**: Create an index on the `name` field:
    ```javascript
    db.student.createIndex({ name: 1 })
    ```

### 5. Data Validation

Implement data validation to ensure data integrity:

- **Example**: Create a collection with validation rules:
    ```javascript
    db.createCollection("student", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "marks"],
                properties: {
                    name: { bsonType: "string" },
                    marks: { bsonType: "int", minimum: 0, maximum: 100 }
                }
            }
        }
    })
    ```

### 6. Atomic Operations

Use atomic operations for critical updates:

- **Example**: Atomically update a student's marks:
    ```javascript
    db.student.updateOne(
        { name: "john" },
        { $set: { marks: 90 } },
        { upsert: true }
    )
    ```

### 7. Projection

Use projection to limit the fields returned in queries:

- **Example**: Return only names and marks:
    ```javascript
    db.student.find({}, { name: 1, marks: 1, _id: 0 })
    ```

### 8. Aggregation Pipeline

For complex data processing, use the aggregation pipeline:

- **Example**: Calculate average marks by city:
    ```javascript
    db.student.aggregate([
        { $group: { _id: "$city", avgMarks: { $avg: "$marks" } } }
    ])
    ```

These best practices will help you write more efficient and maintainable MongoDB operations.
### 9. Indexing

Create indexes to improve query performance:

- **Example**: Create an index on the name field:
    ```javascript
    db.student.createIndex({ name: 1 })
    ```

- **Example**: Create a compound index on name and marks:
    ```javascript
    db.student.createIndex({ name: 1, marks: -1 })
    ```

### 10. Error Handling

Implement proper error handling in your operations:

- **Example**: Using try-catch for insert operations:
    ```javascript
    try {
        db.student.insertOne({ name: "john", marks: 85 })
    } catch (error) {
        print("Error inserting document: " + error)
    }
    ```

### 11. Data Validation

Use MongoDB's built-in validation features:

- **Example**: Add validation to existing collection:
    ```javascript
    db.runCommand({
        collMod: "student",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "marks"],
                properties: {
                    name: { bsonType: "string" },
                    marks: { bsonType: "int", minimum: 0, maximum: 100 }
                }
            }
        }
    })
    ```

### 12. Backup and Recovery

Regular backups are essential:

- **Example**: Using mongodump for backup:
    ```bash
    mongodump --db college --out /backup
    ```

- **Example**: Using mongorestore for recovery:
    ```bash
    mongorestore --db college /backup/college
    ```

### 13. Security Best Practices

Implement security measures:

- **Example**: Create a user with specific roles:
    ```javascript
    db.createUser({
        user: "admin",
        pwd: "securepassword",
        roles: [
            { role: "readWrite", db: "college" }
        ]
    })
    ```

### 14. Performance Monitoring

Monitor database performance:

- **Example**: Check current operations:
    ```javascript
    db.currentOp()
    ```

- **Example**: Get database statistics:
    ```javascript
    db.stats()
    ```

These additional best practices will help ensure your MongoDB deployment is secure, performant, and maintainable.
