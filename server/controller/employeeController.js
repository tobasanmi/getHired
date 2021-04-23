const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')
const Employee = require('../models/employee');


// the code below get all registered employees in the database 

module.exports.get_all_employee = async(req,res,next) => {
  try{
    const result = await Employee.find()
    return res.json({data: result})
  }catch(err){
    return next(err);
  }
}

// the code below add an employee to the database

module.exports.add_employee = async (req,res,next) => {
  try{
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const new_worker = {
      email:req.body.email,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    password:hashedPassword,
    phone:req.body.phone,
    school:req.body.school,
    date:req.body.date,
    degree:req.body.degree,
    discipline:req.body.discipline,
    skill:req.body.skill,
    work_history:req.body.work_history,
    certification:req.body.certification
  }
  console.log('hash',hashedPassword, new_worker)
  const workers = await Employee.create(new_worker)
  return res.json({message:'Created Succesfully'})
  }catch(err){
    console.log('err',err);
    return next(err);
  }
}

// the code below get a particular employee by id

module.exports.get_employee_details = async (req,res,next)=>{
  try{
      const id = req.params.id;
      const result = await Employee.findOne({_id:id})
      return res.json({data:result})
  }catch(err){
    return next(err);
  }
}

// the code below edit an employee by(id)


module.exports.edit_employee_details = async (req,res,next) => {
  try{
const id = req.params.id;
const result = await Employee.findOneAndUpdate({_id:id})
return res.json({message:'updated successfully'})
  }catch(err){
    return next(err);
  }
}

// the below code remove an employee from the database


module.exports.remove_employee_details = async (req,res,next) => {
  try{
    const id = req.params.id;
    const result = await Employee.findOneAndDelete({_id:id})
    return res.json({message: 'deleted successfully'})
  }catch(err){
    return next(err);
  }
}