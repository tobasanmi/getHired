const express = require('express');
const { get_all_employee, add_employee, get_employee_details, edit_employee_details, remove_employee_details } = require('../controller/employeeController');

const router = express.Router();

router.get('/getallemployee', get_all_employee);
router.post('/addemployee',add_employee);
router.get('/getemployee/:id',get_employee_details);
router.patch('/editemployee/:id', edit_employee_details);
router.delete('/deletemployee/:id', remove_employee_details);

module.exports = router;