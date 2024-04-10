# Contacts service

## Team 1: Enhancing the JSON DB Service to Work with Arrays
Objective: Extend the current JSON DB service's functionality to better handle arrays. This includes operations like adding to an array, removing from an array, finding elements within an array, and updating elements in an array.
Skills and Concepts:
Understanding of array manipulation in JavaScript.
Familiarity with the Node.js environment and asynchronous programming.
Deep dive into the node-json-db documentation to understand its capabilities and limitations.
Possible Enhancements:
Implement a method to add an item to an array without duplicates.
Create a function to remove an item from an array by value or index.
Develop a search function to find items in an array based on a condition.
Enable updating an item within an array based on its index.

## Team 2: Creating the Contact CRUD
Objective: Build a CRUD interface for managing contacts using the JSON DB service. Each contact can be a simple object with properties like id, name, email, and phone.
Skills and Concepts:
CRUD operations (Create, Read, Update, Delete) and their implementation in a RESTful API or a simple CLI application.
Error handling and validation of input data.
Working with JSON data structures.
Tasks:
Design the data structure for a contact.
Implement functions to create, read, update, and delete contacts in the database.
Ensure that the contact ID is unique and handle any potential errors gracefully.

```js
{
  name:'Jhon doe',
  email:'jhon@doe.com', // must be unique
  createdDate:new Date(), // when created
  updatedDate:new Date() // date of last update operation
}

// when updating a user you can ONLY change the name
```

## Team 3: Creating Tests for the Contact CRUD
Objective: Write tests to ensure the Contact CRUD operations work as expected. This includes testing for successful operations and handling of potential failure cases.
Skills and Concepts:
Introduction to testing in JavaScript/Node.js.
Familiarity with a testing framework (e.g., Jest, Mocha).
Writing both unit and integration tests to cover different aspects of the CRUD functionality.
Tasks:
Write tests for each CRUD operation, ensuring that they work correctly.
Test edge cases, such as attempting to delete a non-existent contact or adding a contact with missing required fields.
Implement tests to check the array enhancements made by Team 1 are functioning as expected.