const express = require('express');

const {get_all_employer} = require('../controller/employerController');
const {add_employer} = require('../controller/employerController');
const {get_employer_details} = require('../controller/employerController');
const {edit_employer_details} = require('../controller/employerController');
const {remove_employer_details} = require('../controller/employerController');


const router = express.Router();

//below are  endpoints that performs crud operations on registered employer

router.get('/getallemployer', get_all_employer);
router.post('/addemployer', add_employer);
router.get('/getemployer/:id', get_employer_details);
router.patch('/editemployer/:id', edit_employer_details);
router.delete('/deletemployer/:id', remove_employer_details);






module.exports = router;
