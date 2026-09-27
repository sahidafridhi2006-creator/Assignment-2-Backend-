const express = require("express");
const students = require("../data/students");

const router = express.Router();

// GET /students - Get all students
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students
  });
});

// GET /students/:id - Get a student by ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      success: false,
      message: "Student ID must be a number"
    });
  }

  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  res.status(200).json({
    success: true,
    data: student
  });
});

// POST /students - Create a new student
router.post("/", (req, res) => {
  const { name, course, age, email } = req.body;

  if (!name || !course || age === undefined || !email) {
    return res.status(400).json({
      success: false,
      message: "name, course, age and email are required"
    });
  }

  if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
    return res.status(400).json({
      success: false,
      message: "Age must be a positive number"
    });
  }

  const newStudent = {
    id: students.length
      ? Math.max(...students.map((student) => student.id)) + 1
      : 1,
    name: String(name).trim(),
    course: String(course).trim(),
    age: Number(age),
    email: String(email).trim()
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: newStudent
  });
});

// PUT /students/:id - Update a student
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      success: false,
      message: "Student ID must be a number"
    });
  }

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  const { name, course, age, email } = req.body;

  if (!name || !course || age === undefined || !email) {
    return res.status(400).json({
      success: false,
      message: "name, course, age and email are required"
    });
  }

  if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
    return res.status(400).json({
      success: false,
      message: "Age must be a positive number"
    });
  }

  students[studentIndex] = {
    id,
    name: String(name).trim(),
    course: String(course).trim(),
    age: Number(age),
    email: String(email).trim()
  };

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    data: students[studentIndex]
  });
});

// DELETE /students/:id - Delete a student
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      success: false,
      message: "Student ID must be a number"
    });
  }

  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(studentIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
    data: deletedStudent
  });
});

module.exports = router;