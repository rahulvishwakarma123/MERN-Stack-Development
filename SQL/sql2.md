# Table of Contents

- [SQL Basics and Commands Part - 2](#sql-basics-and-commands-part---2)
    - [WHERE Clause in SQL](#where-clause-in-sql)
        - [Syntax](#syntax)
        - [Example](#example)
        - [WHERE Clause with Different Statements](#where-clause-with-different-statements)
        - [Operators Used in WHERE Clause](#operators-used-in-where-clause)
        - [Combining Multiple Conditions](#combining-multiple-conditions)
        - [Summary](#summary)
        - [Detailed List of Operators Used in WHERE Clause](#detailed-list-of-operators-used-in-where-clause)
            - [Comparison Operators](#1-comparison-operators)
            - [Logical Operators](#2-logical-operators)
            - [Range Operator](#3-range-operator)
            - [Set Operators](#4-set-operators)
            - [Pattern Matching Operators](#5-pattern-matching-operators)
            - [Null Check Operators](#6-null-check-operators)
    - [ORDER BY Clause](#order-by-clause)
        - [Combining ORDER BY and LIMIT](#combining-order-by-and-limit)
    - [LIMIT Clause](#limit-clause)
    - [Aggregate Functions in SQL](#aggregate-functions-in-sql)
        - [Common Aggregate Functions](#common-aggregate-functions)
        - [Example Usage](#example-usage)
        - [Using Aggregate Functions with GROUP BY](#using-aggregate-functions-with-group-by)
    - [GROUP BY Clause](#group-by-clause)
        - [Syntax](#syntax-1)
        - [Example](#example-1)
        - [GROUP BY with Multiple Columns](#group-by-with-multiple-columns)
    - [HAVING Clause](#having-clause)
        - [Syntax](#syntax-2)
        - [Example](#example-2)
        - [Using WHERE and HAVING Together](#using-where-and-having-together)
    - [Summary](#summary-1)
    - [General Order of SQL Clauses](#general-order-of-sql-clauses)

# SQL Basics and Commands Part - 2

## WHERE Clause in SQL

The `WHERE` clause in SQL is used to filter records in a query, returning only those rows that meet a specified condition. It is essential for retrieving, updating, or deleting specific data from a table based on defined criteria.

### Syntax

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

- `column1, column2, ...`: The columns you want to retrieve.
- `table_name`: The table from which to select data.
- `condition`: The criteria that each row must satisfy to be included in the result.

### Example

```sql
SELECT *
FROM Employees
WHERE Department = 'Sales';
```

This query retrieves all columns for employees who work in the Sales department.

### WHERE Clause with Different Statements

- **SELECT**: Filters rows returned by a query.
- **UPDATE**: Specifies which rows should be updated.
- **DELETE**: Determines which rows should be deleted.

**Example with UPDATE:**
```sql
UPDATE Employees
SET Salary = Salary * 1.1
WHERE Department = 'Sales';
```

**Example with DELETE:**
```sql
DELETE FROM Employees
WHERE Department = 'Sales';
```

### Operators Used in WHERE Clause

- **Comparison Operators**: `=`, `>`, `<`, `>=`, `<=`, `<>` (not equal)
- **Range Operator**: `BETWEEN ... AND ...`
- **Pattern Matching**: `LIKE`, `NOT LIKE`
- **Set Membership**: `IN`, `NOT IN`
- **Null Check**: `IS NULL`, `IS NOT NULL`

**Examples:**

```sql
-- Find employees with salary greater than 50000
SELECT * FROM Employees WHERE Salary > 50000;

-- Find employees whose names start with 'A'
SELECT * FROM Employees WHERE Name LIKE 'A%';

-- Find employees in specific departments
SELECT * FROM Employees WHERE Department IN ('Sales', 'Marketing');
```

### Combining Multiple Conditions

You can combine multiple conditions using logical operators:

- `AND`: All conditions must be true.
- `OR`: At least one condition must be true.
- `NOT`: Negates a condition.

**Example with multiple conditions:**

```sql
SELECT *
FROM Employees
WHERE Department = 'Sales' AND Salary > 50000;
```

**Example with OR:**

```sql
SELECT *
FROM Employees
WHERE Department = 'Sales' OR Department = 'Marketing';
```

**Example with NOT:**

```sql
SELECT *
FROM Employees
WHERE NOT Department = 'Sales';
```

### Summary

The `WHERE` clause is a powerful tool in SQL that allows you to filter data based on specific conditions, making your queries more precise and efficient.

### Detailed List of Operators Used in WHERE Clause

The `WHERE` clause supports a variety of operators to help you specify conditions:

#### 1. Comparison Operators

- `=` : Equal to
- `<>` or `!=` : Not equal to
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

**Example:**
```sql
SELECT * FROM Employees WHERE Age >= 30;
```

#### 2. Logical Operators

- `AND` : All conditions must be true
- `OR` : At least one condition must be true
- `NOT` : Negates a condition

**Example:**
```sql
SELECT * FROM Employees WHERE Department = 'Sales' AND Salary > 50000;
```

#### 3. Range Operator

- `BETWEEN ... AND ...` : Checks if a value is within a range (inclusive)

**Example:**
```sql
SELECT * FROM Employees WHERE Salary BETWEEN 40000 AND 60000;
```

#### 4. Set Operators

- `IN (...)` : Checks if a value matches any value in a list
- `NOT IN (...)` : Checks if a value does not match any value in a list

**Example:**
```sql
SELECT * FROM Employees WHERE Department IN ('Sales', 'HR');
```

#### 5. Pattern Matching Operators

- `LIKE` : Matches a pattern using wildcards (`%` for any sequence, `_` for a single character)
- `NOT LIKE` : Does not match a pattern

**Example:**
```sql
SELECT * FROM Employees WHERE Name LIKE 'A%';
```

#### 6. Null Check Operators

- `IS NULL` : Checks if a value is null
- `IS NOT NULL` : Checks if a value is not null

**Example:**
```sql
SELECT * FROM Employees WHERE ManagerID IS NULL;
```

These operators can be combined to create complex filtering conditions in your SQL queries.

## ORDER BY Clause

The `ORDER BY` clause is used to sort the result set of a query by one or more columns. By default, sorting is in ascending order, but you can specify descending order as well.

**Syntax:**
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
```

- `ASC`: Sorts in ascending order (default).
- `DESC`: Sorts in descending order.

**Example:**
```sql
SELECT *
FROM Employees
ORDER BY Salary DESC;
```
This query retrieves all employees and sorts them by salary in descending order.

## LIMIT Clause

The `LIMIT` clause is used to restrict the number of rows returned by a query. It is especially useful when you only want to see a subset of results.

**Syntax (MySQL, PostgreSQL):**
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition
ORDER BY column1
LIMIT number;
```

**Example:**
```sql
SELECT *
FROM Employees
ORDER BY Salary DESC
LIMIT 5;
```
This query retrieves the top 5 highest-paid employees.

> **Note:** In SQL Server, use `TOP` instead of `LIMIT`:
> ```sql
> SELECT TOP 5 *
> FROM Employees
> ORDER BY Salary DESC;
> ```

### Combining ORDER BY and LIMIT

You can use `ORDER BY` and `LIMIT` together to get a specific subset of sorted data.

**Example:**
```sql
SELECT *
FROM Employees
WHERE Department = 'Sales'
ORDER BY Salary DESC
LIMIT 3;
```
This query retrieves the top 3 highest-paid employees in the Sales department.

## Aggregate Functions in SQL

Aggregate functions perform calculations on multiple rows of a table and return a single value. They are commonly used with the `GROUP BY` clause to summarize data.

### Common Aggregate Functions

- `COUNT()`: Returns the number of rows.
- `SUM()`: Calculates the total sum of a numeric column.
- `AVG()`: Computes the average value of a numeric column.
- `MIN()`: Finds the minimum value in a column.
- `MAX()`: Finds the maximum value in a column.

### Example Usage

```sql
-- Count the number of employees
SELECT COUNT(*) FROM Employees;

-- Find the total salary of all employees
SELECT SUM(Salary) FROM Employees;

-- Calculate the average salary
SELECT AVG(Salary) FROM Employees;

-- Find the lowest and highest salary
SELECT MIN(Salary), MAX(Salary) FROM Employees;
```

### Using Aggregate Functions with GROUP BY

Aggregate functions are often used with `GROUP BY` to group rows that have the same values in specified columns.

**Example:**
```sql
-- Find the average salary by department
SELECT Department, AVG(Salary)
FROM Employees
GROUP BY Department;
```

This query returns the average salary for each department.

> **Note:** Aggregate functions ignore `NULL` values except for `COUNT(*)`, which counts all rows.


## GROUP BY Clause

The `GROUP BY` clause in SQL is used to arrange identical data into groups. It is commonly used with aggregate functions (like `COUNT()`, `SUM()`, `AVG()`, etc.) to perform operations on each group of data.

### Syntax

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;
```

- `column1`: The column(s) to group by.
- `aggregate_function(column2)`: The aggregate function to apply to each group.

### Example

```sql
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Department;
```

This query returns the number of employees in each department.

### GROUP BY with Multiple Columns

You can group by more than one column:

```sql
SELECT Department, JobTitle, AVG(Salary) AS AvgSalary
FROM Employees
GROUP BY Department, JobTitle;
```

This query calculates the average salary for each job title within each department.

## HAVING Clause

The `HAVING` clause is used to filter groups created by the `GROUP BY` clause. It is similar to the `WHERE` clause, but `WHERE` filters rows before grouping, while `HAVING` filters groups after aggregation.

### Syntax

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;
```

- `condition`: The condition to filter groups, often involving aggregate functions.

### Example

```sql
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 5;
```

This query returns only those departments with more than 5 employees.

### Using WHERE and HAVING Together

You can use both `WHERE` and `HAVING` in the same query:

```sql
SELECT Department, AVG(Salary) AS AvgSalary
FROM Employees
WHERE Salary > 40000
GROUP BY Department
HAVING AVG(Salary) > 50000;
```

- The `WHERE` clause filters rows before grouping.
- The `HAVING` clause filters groups after aggregation.

## Summary

- Use `GROUP BY` to group rows that have the same values in specified columns.
- Use `HAVING` to filter groups based on aggregate conditions.
- `WHERE` filters rows before grouping; `HAVING` filters groups after aggregation.

## General Order of SQL Clauses

When writing SQL queries, the clauses are generally used in the following order:

1. `SELECT` – Specifies the columns to retrieve.
2. `FROM` – Indicates the table(s) to query.
3. `WHERE` – Filters rows before grouping.
4. `GROUP BY` – Groups rows sharing a property.
5. `HAVING` – Filters groups after aggregation.
6. `ORDER BY` – Sorts the result set.
7. `LIMIT` / `OFFSET` – Restricts the number of rows returned (syntax may vary by database).

**Example:**
```sql
SELECT column1, aggregate_function(column2)
FROM table_name
WHERE condition
GROUP BY column1
HAVING aggregate_condition
ORDER BY column1
LIMIT number;
```

> **Note:** Not all clauses are required in every query; use them as needed for your requirements.

