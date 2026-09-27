# Student Management REST API

## Lab Assignment 2 – Web Dev III (Node.js & Express Backend)

This project implements the required Student Management REST API using Node.js and Express.js.

### Requirements covered
- Express server
- CRUD APIs
- Custom logger middleware
- Modular routing
- Error handling
- JSON/Array data only
- Postman testing

### Project structure

```text
student-management-rest-api/
├── app.js
├── package.json
├── middleware/
│   └── logger.js
├── routes/
│   └── studentRoutes.js
├── data/
│   └── students.js
└── README.md
```

## How to run

1. Install Node.js.
2. Open this project folder in VS Code or terminal.
3. Run:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

For development with Node's watch mode:

```bash
npm run dev
```

Server URL:

```text
http://localhost:3000
```

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | View all students |
| GET | `/students/:id` | View student by ID |
| POST | `/students` | Add a student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

## POST/PUT JSON body

```json
{
  "name": "Sahid",
  "course": "BTech CSE",
  "age": 18,
  "email": "sahid@example.com"
}
```

## Status codes

- 200 – Success
- 201 – Created
- 400 – Bad Request
- 404 – Not Found
- 500 – Internal Server Error

## Postman testing

### 1. GET all students
`GET http://localhost:3000/students`

### 2. GET student by ID
`GET http://localhost:3000/students/1`

### 3. POST student
`POST http://localhost:3000/students`

Body → raw → JSON:

```json
{
  "name": "Sahil",
  "course": "BTech",
  "age": 19,
  "email": "sahil@example.com"
}
```

### 4. PUT student
`PUT http://localhost:3000/students/1`

Body:

```json
{
  "name": "Rahul Sharma",
  "course": "BTech CSE",
  "age": 21,
  "email": "rahul.sharma@example.com"
}
```

### 5. DELETE student
`DELETE http://localhost:3000/students/1`

The data is stored only in an in-memory JavaScript array, so changes are reset whenever the server restarts.
