## Table of Contents

1. [SQL Basics and Commands](#sql-basics-and-commands)  
    - [What is a Database?](#what-is-a-database)  
    - [SQL v/s NoSQL](#sql-vs-nosql)  
    - [What is SQL?](#what-is-sql)  
    - [What is a Table?](#what-is-a-table)  

2. [Installation](#installation)  
    - [For Windows](#for-windows)  
    - [For Mac](#for-mac)  

3. [Our First Database](#our-first-database)  
    - [Create a Database](#create-a-database)  
    - [Delete a Database](#delete-a-database)  
    - [Show Databases](#show-databases)  
    - [Use a Database](#use-a-database)  

4. [Our First Table](#our-first-table)  
    - [Create a Table](#create-a-table)  
    - [Insert Data](#insert-data)  
    - [Retrieve Data](#retrieve-data)  

5. [Table Queries](#table-queries)  
    - [Creating a Table](#1-creating-a-table)  
    - [Modifying a Table](#2-modifying-a-table)  
    - [Deleting a Table](#3-deleting-a-table)  
    - [Renaming a Table](#4-renaming-a-table)  
    - [Truncating a Table](#5-truncating-a-table)  
    - [Retrieving Data from a Table](#6-retrieving-data-from-a-table)  
    - [Updating Data in a Table](#7-updating-data-in-a-table)  
    - [Deleting Data from a Table](#8-deleting-data-from-a-table)  
    - [Joining Tables](#9-joining-tables)  

6. [What are Constraints?](#what-are-constraints)  

7. [Key Constraints](#key-constraints)  
    - [Primary Key](#primary-key)  
    - [Foreign Key](#foreign-key)  

8. [Primary & Foreign Keys](#primary--foreign-keys)  

9. [INSERT into Table](#insert-into-table)  

10. [SELECT Command](#select-command)  

# SQL Basics and Commands  

## What is a Database?  
A database is an organized collection of data that can be easily accessed, managed, and updated. It is designed to store information in a structured way, enabling efficient retrieval and manipulation. Databases are widely used in applications to manage large volumes of data systematically.

---

## SQL v/s NoSQL  
- **SQL (Structured Query Language):**  
    - Used with relational databases.  
    - Data is stored in tables with rows and columns.  
    - Follows a structured schema.  
    - Supports ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data reliability.  
    - Examples: MySQL, PostgreSQL, Oracle Database.  

- **NoSQL:**  
    - Used with non-relational databases.  
    - Data can be stored in various formats like key-value pairs, documents, graphs, or wide-column stores.  
    - Schema is flexible, allowing for unstructured or semi-structured data.  
    - Suitable for handling large-scale, distributed data.  
    - Examples: MongoDB, Cassandra, Redis.

---

## What is SQL?  
SQL (Structured Query Language) is a standard programming language used to interact with relational databases. It provides commands to perform operations such as:  
- Querying data (`SELECT`)  
- Inserting data (`INSERT`)  
- Updating data (`UPDATE`)  
- Deleting data (`DELETE`)  
- Creating and modifying database structures (`CREATE`, `ALTER`, `DROP`)  

SQL is essential for managing and manipulating data in relational database systems.

---

## What is a Table?  
A table is a fundamental structure in a relational database. It organizes data into rows and columns:  
- **Rows (Records):** Represent individual entries in the table.  
- **Columns (Fields):** Represent attributes or properties of the data.  

For example, a `users` table might have columns like `id`, `name`, `email`, and `created_at`, with each row representing a specific user.

---

## Installation  
### For Windows  
1. Download the MySQL installer from the [official MySQL website](https://dev.mysql.com/downloads/installer/).  
2. Run the installer and follow the setup wizard to configure the MySQL server.  
3. Use the MySQL Command Line Client or a GUI tool like MySQL Workbench to interact with the database.  

### For Mac  
1. Install MySQL using Homebrew:  
        ```bash
        brew install mysql
        ```  
2. Start the MySQL server:  
        ```bash
        brew services start mysql
        ```  
3. Access the MySQL shell:  
        ```bash
        mysql -u root -p
        ```  

---

## Our First Database  
### Create a Database  
To create a new database, use the `CREATE DATABASE` command:  
```sql
CREATE DATABASE my_database;
CREATE DATABASE IF NOT EXISTS my_database;
```  

### Delete a Database  
To delete an existing database, use the `DROP DATABASE` command. Be cautious when using this command, as it permanently removes the database and all its data.   
```sql
DROP DATABASE my_database;
DROP DATABASE IF NOT EXISTS my_database;
```  

### Show Databases  

The `SHOW DATABASES` command is used to list all the databases available on the MySQL server.  

#### Syntax:  
```sql
SHOW DATABASES;
```  

#### Example:  
```sql
SHOW DATABASES;
```  
This command will display a list of all databases, including system databases like `information_schema`, `mysql`, `performance_schema`, and `sys`.  

#### Notes:  
- You need appropriate privileges to view all databases.  
- Use the `USE` command to select a specific database from the list.  

By using `SHOW DATABASES`, you can quickly identify the databases available for use or management. 

This command deletes the `my_database` database. Ensure you have a backup if the data is important, as this action cannot be undone.

### Use a Database  
To select and use a specific database, use the `USE` command:  
```sql
USE my_database;
```  

---

## Our First Table  
### Create a Table  
To create a table, use the `CREATE TABLE` command. For example, to create a `users` table:  
```sql
CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100),
         email VARCHAR(100),
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```  
This table includes:  
- `id`: A unique identifier for each user.  
- `name`: The user's name.  
- `email`: The user's email address.  
- `created_at`: The timestamp when the record was created.

---

### Insert Data  
To add data to a table, use the `INSERT INTO` command. This command allows you to specify the table name, the columns you want to insert data into, and the corresponding values.  

#### Syntax:  
```sql
INSERT INTO table_name (column1, column2, column3, ...)  
VALUES (value1, value2, value3, ...);
```  

#### Example:  
To insert a new user into the `users` table:  
```sql
INSERT INTO users (name, email)  
VALUES ('John Doe', 'john@example.com');
```  

In this example:  
- `users` is the table name.  
- `name` and `email` are the columns where data will be inserted.  
- `'John Doe'` and `'john@example.com'` are the values being added to the respective columns.  

#### Insert Multiple Rows:  
You can also insert multiple rows in a single query by separating each set of values with a comma:  
```sql
INSERT INTO users (name, email)  
VALUES  
('Alice', 'alice@example.com'),  
('Bob', 'bob@example.com'),  
('Charlie', 'charlie@example.com');
```  

This query adds three new rows to the `users` table.  

#### Notes:  
- Ensure the number of columns matches the number of values provided.  
- If a column has a default value or allows `NULL`, you can omit it in the `INSERT` statement.  
- Use the `AUTO_INCREMENT` feature for columns like `id` to automatically generate unique values.  

By using the `INSERT INTO` command, you can populate your tables with data efficiently.

### Retrieve Data  

The `SELECT` command is used to fetch data from a table. It allows you to retrieve specific columns or all columns based on your requirements.  

#### Retrieve All Data  
To fetch all columns and rows from a table, use the `*` wildcard:  
```sql
SELECT * FROM users;
```  
This retrieves every column and row from the `users` table.  

#### Retrieve Specific Columns  
To fetch only specific columns, list them explicitly:  
```sql
SELECT name, email FROM users;
```  
This retrieves only the `name` and `email` columns from the `users` table.  

#### Filter Data with Conditions  
Use the `WHERE` clause to filter data based on specific conditions:  
```sql
SELECT * FROM users WHERE id = 1;
```  
This retrieves all columns for the row where the `id` equals 1.  

#### Sorting Data  
To sort the retrieved data, use the `ORDER BY` clause:  
```sql
SELECT * FROM users ORDER BY name ASC;
```  
This sorts the rows in ascending order by the `name` column. Use `DESC` for descending order.  

#### Limit the Number of Rows  
To limit the number of rows retrieved, use the `LIMIT` clause:  
```sql
SELECT * FROM users LIMIT 5;
```  
This retrieves only the first 5 rows from the `users` table.  

#### Combine Conditions  
Combine multiple conditions using `AND` or `OR`:  
```sql
SELECT * FROM users WHERE name = 'Alice' AND email = 'alice@example.com';
```  
This retrieves rows where the `name` is 'Alice' and the `email` is 'alice@example.com'.  

#### Aggregate Functions  
SQL provides aggregate functions to perform calculations on data:  
- `COUNT()`: Counts the number of rows.  
- `SUM()`: Calculates the total sum of a column.  
- `AVG()`: Calculates the average value of a column.  
- `MAX()`: Finds the maximum value in a column.  
- `MIN()`: Finds the minimum value in a column.  

Example:  
```sql
SELECT COUNT(*) AS total_users FROM users;
```  
This counts the total number of rows in the `users` table and aliases the result as `total_users`.  

#### Grouping Data  
To group data based on a column, use the `GROUP BY` clause:  
```sql
SELECT email, COUNT(*) AS email_count FROM users GROUP BY email;
```  
This groups rows by the `email` column and counts the occurrences for each email.  

#### Filtering Groups  
To filter grouped data, use the `HAVING` clause:  
```sql
SELECT email, COUNT(*) AS email_count FROM users GROUP BY email HAVING email_count > 1;
```  
This retrieves only those groups where the count of emails is greater than 1.  

By combining these techniques, you can retrieve and manipulate data in flexible and powerful ways.

---

## Table Queries  

### 1. Creating a Table  
To create a table, use the `CREATE TABLE` command. This command defines the structure of the table, including its columns, data types, and constraints.  

#### Syntax:  
```sql
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    ...
);
```  

#### Example:  
```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);
```  
This creates an `employees` table with the following columns:  
- `id`: A unique identifier for each employee, automatically incremented.  
- `name`: The employee's name, which cannot be null.  
- `position`: The employee's job title.  
- `salary`: The employee's salary, stored as a decimal value with up to 10 digits and 2 decimal places.  
- `hire_date`: The date the employee was hired.  

#### Notes:  
- Use the `AUTO_INCREMENT` attribute for columns that require unique, sequential values.  
- Constraints like `NOT NULL` and `PRIMARY KEY` ensure data integrity.  

---

### 2. Modifying a Table  
To modify an existing table, use the `ALTER TABLE` command. This allows you to add, modify, or remove columns and constraints.  

#### Add a Column:  
```sql
ALTER TABLE employees ADD COLUMN department VARCHAR(50);
```  
This adds a new column `department` to the `employees` table.  

#### Modify a Column:  
```sql
ALTER TABLE employees MODIFY COLUMN salary DECIMAL(12, 2);
```  
This changes the `salary` column to allow up to 12 digits with 2 decimal places.  

#### Drop a Column:  
```sql
ALTER TABLE employees DROP COLUMN department;
```  
This removes the `department` column from the `employees` table.  

#### Rename a Column:  
```sql
ALTER TABLE employees CHANGE COLUMN position job_title VARCHAR(50);
```  
This renames the `position` column to `job_title` and keeps its data type as `VARCHAR(50)`.  

---

### 3. Deleting a Table  
To delete a table and all its data, use the `DROP TABLE` command.  

#### Syntax:  
```sql
DROP TABLE table_name;
```  

#### Example:  
```sql
DROP TABLE employees;
DROP TABLE IF EXISTS employees;
```  
The second command ensures the operation does not fail if the table does not exist.  

#### Notes:  
- This action is irreversible. Ensure you have a backup if the data is important.  

---

### 4. Renaming a Table  
To rename a table, use the `RENAME TABLE` command.  

#### Syntax:  
```sql
RENAME TABLE old_table_name TO new_table_name;
```  

#### Example:  
```sql
RENAME TABLE employees TO staff;
```  
This renames the `employees` table to `staff`.  

---

### 5. Truncating a Table  
To remove all rows from a table without deleting the table itself, use the `TRUNCATE` command.  

#### Syntax:  
```sql
TRUNCATE TABLE table_name;
```  

#### Example:  
```sql
TRUNCATE TABLE employees;
```  
This removes all rows from the `employees` table but retains its structure.  

#### Notes:  
- Faster than `DELETE` for large tables, as it does not log individual row deletions.  
- Cannot be rolled back.  

---

### 6. Retrieving Data from a Table  
To retrieve data, use the `SELECT` command.  

#### Retrieve All Data:  
```sql
SELECT * FROM employees;
```  
This fetches all columns and rows from the `employees` table.  

#### Retrieve Specific Columns:  
```sql
SELECT name, position FROM employees;
```  
This fetches only the `name` and `position` columns.  

#### Filter Data with Conditions:  
```sql
SELECT * FROM employees WHERE salary > 50000;
```  
This retrieves rows where the `salary` is greater than 50,000.  

#### Sort Data:  
```sql
SELECT * FROM employees ORDER BY hire_date DESC;
```  
This sorts the rows by `hire_date` in descending order.  

#### Limit the Number of Rows:  
```sql
SELECT * FROM employees LIMIT 5;
```  
This retrieves only the first 5 rows.  

#### Combine Conditions:  
```sql
SELECT * FROM employees WHERE position = 'Manager' AND salary > 60000;
```  
This retrieves rows where the `position` is 'Manager' and the `salary` is greater than 60,000.  

---

### 7. Updating Data in a Table  
To update existing data, use the `UPDATE` command.  

#### Syntax:  
```sql
UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
```  

#### Example:  
```sql
UPDATE employees SET salary = salary * 1.1 WHERE position = 'Manager';
```  
This increases the salary of all employees with the position 'Manager' by 10%.  

#### Notes:  
- Always use a `WHERE` clause to avoid updating all rows unintentionally.  

---

### 8. Deleting Data from a Table  
To delete specific rows, use the `DELETE` command.  

#### Syntax:  
```sql
DELETE FROM table_name WHERE condition;
```  

#### Example:  
```sql
DELETE FROM employees WHERE hire_date < '2020-01-01';
```  
This deletes rows where the `hire_date` is before January 1, 2020.  

#### Notes:  
- Use `DELETE` with caution, as it permanently removes data.  

---

### 9. Joining Tables  
To combine data from multiple tables, use `JOIN`.  

#### Example:  
```sql
SELECT employees.name, departments.department_name  
FROM employees  
INNER JOIN departments ON employees.department_id = departments.id;
```  
This retrieves the `name` of employees and their corresponding `department_name`.  

#### Types of Joins:  
- **INNER JOIN:** Returns rows with matching values in both tables.  
- **LEFT JOIN:** Returns all rows from the left table and matching rows from the right table. Rows without matches in the right table will have `NULL` values.  
- **RIGHT JOIN:** Returns all rows from the right table and matching rows from the left table. Rows without matches in the left table will have `NULL` values.  
- **FULL JOIN:** Returns all rows from both tables, with `NULL` values for unmatched rows.  

#### Notes:  
- Use aliases to simplify table names in complex queries.  
- Ensure proper indexing for faster join operations.  

By mastering these queries, you can efficiently manage and manipulate data in your tables.  

## What are Constraints?  
Constraints are rules applied to table columns to ensure data integrity and accuracy. Common constraints include:  
- `PRIMARY KEY`: Ensures each record has a unique identifier.  
- `FOREIGN KEY`: Links two tables together.  
- `NOT NULL`: Ensures a column cannot have `NULL` values.  
- `UNIQUE`: Ensures all values in a column are unique.  
- `CHECK`: Ensures values in a column meet a specific condition.  

---

## Key Constraints  
### Primary Key  
A `PRIMARY KEY` is a constraint that uniquely identifies each record in a table. It ensures that no two rows can have the same value for the primary key column(s), and that the value cannot be `NULL`. Each table can have only one primary key, which can consist of a single column or a combination of columns (composite key).

#### Features:
- Uniqueness: Each value in the primary key column(s) must be unique.
- Not Null: Primary key columns cannot contain `NULL` values.
- Indexing: Most database systems automatically create a unique index on the primary key for fast lookups.

#### Example (Single Column Primary Key):
```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(100)
);
```
Here, `emp_id` uniquely identifies each employee.

#### Example (Composite Primary Key):
```sql
CREATE TABLE project_assignments (
    emp_id INT,
    project_id INT,
    PRIMARY KEY (emp_id, project_id)
);
```
Here, the combination of `emp_id` and `project_id` uniquely identifies each assignment.

---

### Foreign Key  
A `FOREIGN KEY` is a constraint used to link two tables together. It enforces referential integrity by ensuring that the value in the foreign key column matches a value in the referenced table's primary key (or a unique key). This prevents actions that would leave orphaned records in the database.

#### Features:
- Referential Integrity: Ensures relationships between tables remain consistent.
- Restricts or cascades updates/deletes to maintain data integrity.
- Can reference a primary or unique key in another table.

#### Example:
Suppose you have a `users` table:
```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
```
And an `orders` table that references `users`:
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```
Here, `user_id` in `orders` must match an existing `id` in `users`. If you try to insert an order with a `user_id` that doesn't exist in `users`, the database will reject the operation.

#### Additional Options:
- `ON DELETE CASCADE`: Automatically deletes related rows in the child table when a row in the parent table is deleted.
- `ON UPDATE CASCADE`: Automatically updates the foreign key values in the child table when the referenced value in the parent table changes.

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```
This setup ensures that deleting a user will also delete all their orders.


---

## Primary & Foreign Keys  
- **Primary Key:** Uniquely identifies a record in a table. Each table can have only one primary key.  
- **Foreign Key:** Establishes a link between two tables, ensuring referential integrity.  

---

## INSERT into Table  
The `INSERT` command is used to add data to a table. Example:  
```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
```  

---

## SELECT Command  
The `SELECT` command is used to retrieve data from a table. Example:  
```sql
SELECT name, email FROM users WHERE id = 1;
```  
This retrieves the `name` and `email` of the user with an `id` of 1.
