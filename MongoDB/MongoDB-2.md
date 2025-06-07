# Mongoose

## Inserting Documents: `insert` and `insertMany` in Mongoose

### `insert` (Single Document Insertion)

Mongoose does not provide a direct `insert` method, but you can insert a single document using the `save()` method on a model instance or the `create()` method on the model itself.

**Example using `save()`:**
```javascript
const user = new User({ name: 'Bob', email: 'bob@example.com' });
user.save()
  .then(doc => console.log('Inserted:', doc))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to the inserted document (with all default values, virtuals, and generated `_id`).

**Example using `create()`:**
```javascript
User.create({ name: 'Alice', email: 'alice@example.com' })
  .then(doc => console.log('Inserted:', doc))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to the created document (or an array of documents if multiple are provided).

### `insertMany` (Multiple Document Insertion)

The `insertMany()` method allows you to insert multiple documents into a collection efficiently in a single operation.

**Example:**
```javascript
const users = [
  { name: 'Charlie', email: 'charlie@example.com' },
  { name: 'Dana', email: 'dana@example.com' }
];

User.insertMany(users)
  .then(docs => console.log('Inserted:', docs))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to an array of the inserted documents.

**Key Points:**
- `insertMany()` is faster than inserting documents one by one.
- By default, if one document fails validation, the operation stops. You can set `{ ordered: false }` to continue inserting the rest.
- Both `create()` and `insertMany()` perform schema validation.
- All these methods return Promises, making them easy to use with async/await.

**References:**
- [Mongoose Model.create()](https://mongoosejs.com/docs/api/model.html#Model.create)
- [Mongoose Model.insertMany()](https://mongoosejs.com/docs/api/model.html#Model.insertMany)


## Querying Documents: `find` in Mongoose

### `find` (Retrieving Multiple Documents)

The `find()` method in Mongoose is used to retrieve multiple documents from a collection that match a given filter.

**Example:**
```javascript
User.find({ name: 'Alice' })
  .then(users => console.log('Found:', users))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to an array of documents matching the filter.

**Example with Additional Query Options:**
```javascript
User.find({ age: { $gte: 18 } })
  .select('name email') // Only return name and email fields
  .sort({ name: 1 })    // Sort by name ascending
  .limit(10)            // Limit to 10 results
  .then(users => console.log('Found:', users))
  .catch(err => console.error(err));
```

**Key Points:**
- `find()` returns all documents matching the filter. Use `{}` to retrieve all documents.
- You can chain query helpers like `.select()`, `.sort()`, `.limit()`, and `.skip()`.
- For a single document, use `findOne()` or `findById()`.

**References:**
- [Mongoose Model.find()](https://mongoosejs.com/docs/api/model.html#Model.find)

## Updating Documents: `updateOne` and `updateMany` in Mongoose

### `updateOne` (Updating a Single Document)

The `updateOne()` method updates the first document that matches the filter criteria.

**Example:**
```javascript
User.updateOne({ name: 'Alice' }, { $set: { email: 'alice@newdomain.com' } })
  .then(result => console.log('Update Result:', result))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to an object containing information about the operation (e.g., `matchedCount`, `modifiedCount`).

**Key Points:**
- Only the first matching document is updated.
- Use update operators like `$set`, `$inc`, etc.
- Does not return the updated document by default.

### `updateMany` (Updating Multiple Documents)

The `updateMany()` method updates all documents that match the filter criteria.

**Example:**
```javascript
User.updateMany({ subscribed: false }, { $set: { subscribed: true } })
  .then(result => console.log('Update Result:', result))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to an object with the number of matched and modified documents.

**Key Points:**
- All documents matching the filter are updated.
- Useful for bulk updates.
- Like `updateOne`, does not return the updated documents by default.

**References:**
- [Mongoose Model.updateOne()](https://mongoosejs.com/docs/api/model.html#Model.updateOne)
- [Mongoose Model.updateMany()](https://mongoosejs.com/docs/api/model.html#Model.updateMany)

## Updating and Returning Documents: `findOneAndUpdate` and `findByIdAndUpdate` in Mongoose

### `findOneAndUpdate` (Find and Update a Single Document)

The `findOneAndUpdate()` method finds a single document matching the filter and updates it. By default, it returns the document as it was before the update, but you can configure it to return the updated document.

**Example:**
```javascript
User.findOneAndUpdate(
  { name: 'Bob' },
  { $set: { email: 'bob@newdomain.com' } },
  { new: true } // Return the updated document
)
  .then(doc => console.log('Updated:', doc))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to the found (and possibly updated) document, or `null` if no document matches.

**Key Points:**
- Use the `new: true` option to return the updated document.
- Supports all MongoDB update operators.
- Useful for updating and retrieving a document in a single operation.

### `findByIdAndUpdate` (Find by ID and Update)

The `findByIdAndUpdate()` method is a shorthand for finding a document by its `_id` and updating it.

**Example:**
```javascript
User.findByIdAndUpdate(
  '60f7c2b8e1b2c8a1d4e8f123',
  { $set: { subscribed: false } },
  { new: true }
)
  .then(doc => console.log('Updated:', doc))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to the found (and possibly updated) document, or `null` if no document matches the given ID.

**Key Points:**
- Convenient for updating documents by their unique `_id`.
- Accepts the same options as `findOneAndUpdate()`, including `new`, `upsert`, and `runValidators`.

**References:**
- [Mongoose Model.findOneAndUpdate()](https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate)
- [Mongoose Model.findByIdAndUpdate()](https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate)

## Deleting Documents: `deleteOne` and `deleteMany` in Mongoose

### `deleteOne` (Deleting a Single Document)

The `deleteOne()` method deletes the first document that matches the filter criteria.

**Example:**
```javascript
User.deleteOne({ name: 'Charlie' })
  .then(result => console.log('Delete Result:', result))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to an object containing information about the operation (e.g., `deletedCount`).

**Key Points:**
- Only the first matching document is deleted.
- If no documents match, nothing is deleted and `deletedCount` will be `0`.

### `deleteMany` (Deleting Multiple Documents)

The `deleteMany()` method deletes all documents that match the filter criteria.

**Example:**
```javascript
User.deleteMany({ subscribed: false })
  .then(result => console.log('Delete Result:', result))
  .catch(err => console.error(err));
```
- **Returns:** A Promise that resolves to an object with the number of deleted documents.

**Key Points:**
- All documents matching the filter are deleted.
- Useful for bulk deletions.

**References:**
- [Mongoose Model.deleteOne()](https://mongoosejs.com/docs/api/model.html#Model.deleteOne)
- [Mongoose Model.deleteMany()](https://mongoosejs.com/docs/api/model.html#Model.deleteMany)

## Defining Schemas in Mongoose

A **Schema** in Mongoose defines the structure, data types, default values, and validation rules for documents within a MongoDB collection. Schemas are essential for enforcing data consistency and enabling advanced features like validation, middleware, and population.

### Creating a Schema

You define a schema by creating a new instance of `mongoose.Schema` and specifying the fields, their types, and additional options.

**Example:**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  age: { type: Number, min: 0, max: 120 },
  subscribed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
```

#### Field Types

- **String:** Text data (`type: String`)
- **Number:** Numeric data (`type: Number`)
- **Date:** Date and time (`type: Date`)
- **Boolean:** True/false values (`type: Boolean`)
- **Buffer:** Binary data (`type: Buffer`)
- **ObjectId:** References to other documents (`type: mongoose.Schema.Types.ObjectId`)
- **Array:** Arrays of any type (`type: [String]`, `type: [Number]`, etc.)
- **Mixed:** Any type of value (`type: mongoose.Schema.Types.Mixed`)

#### Validation and Options

- **required:** Ensures the field must be present.
- **unique:** Ensures the value is unique in the collection.
- **min/max:** Minimum and maximum values for numbers or dates.
- **enum:** Restricts values to a specific set.
- **match:** Validates strings against a regular expression.
- **default:** Sets a default value if none is provided.
- **trim, lowercase, uppercase:** String modifiers.

**Example with validation:**
```javascript
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, enum: ['books', 'electronics', 'clothing'] }
});
```

### Defining References (Relationships)

Mongoose allows you to define relationships between documents using the `ref` option with `ObjectId` fields. This enables you to reference documents in other collections and use the `populate()` method to retrieve related data.

**Example:**
```javascript
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User model
});
```

**Populating referenced documents:**
```javascript
Post.find()
  .populate('author') // Replaces author ObjectId with the actual User document
  .then(posts => console.log(posts));
```

### Creating a Model

Once you have a schema, create a model to interact with the collection:

```javascript
const User = mongoose.model('User', userSchema);
```

- The first argument is the singular name of the model (Mongoose will automatically create the pluralized collection name).
- The second argument is the schema definition.

### Advanced Schema Features

- **Virtuals:** Define computed properties that are not stored in MongoDB.
- **Middleware (Hooks):** Run functions before or after certain operations (e.g., `save`, `remove`).
- **Indexes:** Improve query performance and enforce constraints.

**Example of a virtual:**
```javascript
userSchema.virtual('isAdult').get(function() {
  return this.age >= 18;
});
```

### References

- [Mongoose Schemas](https://mongoosejs.com/docs/guide.html)
- [Mongoose Models](https://mongoosejs.com/docs/models.html)
- [Mongoose Population (References)](https://mongoosejs.com/docs/populate.html)
