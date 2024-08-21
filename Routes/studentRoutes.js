const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/StudentController');


// Route to get all students
router.get('/GetAllStudents', studentController.GetAllStudents);
// Route to create a new student --- data save using relationship
router.post('/CreateStudent', studentController.CreateStudent);
// Route to delete a new student
router.post('/DeleteStudent', studentController.DeleteStudent);
// update student data 
router.post('/UpdateStudent', studentController.UpdateStudent);
//search data by name and age 
router.post('/search', studentController.searchStudentbyname)


module.exports = router;
