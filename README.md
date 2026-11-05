# Node.js MongoDB Student CRUD API

**Web Technology Lab – Experiment 11**  
**Register Number:** URK24CS1131

A REST API built with Node.js, Express.js, MongoDB and Mongoose. It stores student details and supports Create, Read, Update and Delete (CRUD) operations.

## Features

- Connects to MongoDB database `studentdb`
- Stores student register number, name, department, email and CGPA
- Adds a student record
- Retrieves all student records
- Retrieves one student using register number
- Updates student details
- Deletes a student record
- Returns JSON responses and appropriate HTTP status codes

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman or PowerShell for API testing

## Project structure

```text
NodeMongoLab/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Student.js
│   └── routes/
│       └── studentRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Requirements

Install Node.js and MongoDB. MongoDB can run locally or through a hosted MongoDB connection string.

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   ```

2. Move into the project folder:

   ```bash
   cd NodeMongoLab
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file by copying `.env.example`.

   On Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

5. Check the MongoDB connection string in `.env`:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/studentdb
   ```

6. Start the application:

   ```bash
   npm start
   ```

   For development with automatic restart:

   ```bash
   npm run dev
   ```

When the connection succeeds, the terminal displays `MongoDB Connected Successfully` and the server URL.

## API endpoints

Base URL: `http://localhost:3000`

| Operation | Method | Endpoint |
|---|---|---|
| Check server | GET | `/` |
| Create student | POST | `/students` |
| View all students | GET | `/students` |
| View one student | GET | `/students/:regNo` |
| Update student | PUT | `/students/:regNo` |
| Delete student | DELETE | `/students/:regNo` |

## Sample student JSON

Use this JSON body for the `POST /students` request:

```json
{
  "regNo": "URK24CS1131",
  "name": "Ashen Paul",
  "department": "Computer Science and Engineering",
  "email": "ashen@gmail.com",
  "cgpa": 8.5
}
```

## Testing the API

You can test the endpoints using Postman. For POST and PUT requests, select **Body → raw → JSON** and set the request header `Content-Type: application/json`.

### 1. Create a student

```http
POST http://localhost:3000/students
```

Send the sample student JSON shown above. A successful request returns the created student with HTTP status `201 Created`.

### 2. Read all students

```http
GET http://localhost:3000/students
```

Returns an array containing the student records.

### 3. Read one student

```http
GET http://localhost:3000/students/URK24CS1131
```

Returns the matching student. If the register number does not exist, the API returns `404 Student not found`.

### 4. Update a student

```http
PUT http://localhost:3000/students/URK24CS1131
```

Example JSON body:

```json
{
  "name": "Ashen Paul",
  "department": "CSE",
  "email": "ashen@gmail.com",
  "cgpa": 9.0
}
```

Returns the updated student record.

### 5. Delete a student

```http
DELETE http://localhost:3000/students/URK24CS1131
```

Successful response:

```json
{
  "message": "Student deleted successfully"
}
```

## Verify using MongoDB Compass

1. Open MongoDB Compass.
2. Connect using `mongodb://127.0.0.1:27017`.
3. Open the `studentdb` database.
4. Open the `students` collection.
5. Check that the documents match the records created through the API.

MongoDB creates the database and collection when the first student document is inserted.

## Notes

- Do not upload your `.env` file or `node_modules` folder to GitHub.
- The `.env.example` file is provided as a template. Create your own `.env` file locally.
- The `regNo` field is unique, so duplicate register numbers are rejected.
- CGPA is validated to be between 0 and 10.

## Result

The Node.js application is integrated with MongoDB using Mongoose, and student records can be created, retrieved, updated and deleted through REST API endpoints.
