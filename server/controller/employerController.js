const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const Employer = require('../models/employer');

// below code get all registered employers

module.exports.get_all_employer = async (req,res,next) => {
  try{
    const result = await Employer.find();
    console.log('employer', result);
    return res.json({data:result})
  }catch (err){
    return next(err)
  }
}

//below code add a new employer to the database

module.exports.add_employer = async (req,res,next) => {
  try{
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10)
    const new_employer = {
    email:req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: hashedPassword,
    company_name:req.body.company_name,
    company_email:req.body.company_email,
    industry: req.body.industry,
    employment_type:req.body.employment_type,
    contact_person:req.body.contact_person,
    phone:req.body.phone,
    address:req.body.address
  } 
  console.log('hash', hashedPassword, new_employer);
  const employers = await Employer.create(new_employer);
  return res.json({message: 'created succesfully'})
}
  catch (err){
    console.log('err',err);
    return next(err);
  }
}

//the below code get a particular employer( by id)

module.exports.get_employer_details = async(req,res,next)=>{
  try{
    const id = req.params.id;
    const result = await Employer.findOne({_id:id})
    console.log('result', result);
    return res.json({data:result});
  }catch(err){
    return next(err)
  }
}

// the below code edit/update a particular employer (by id)

module.exports.edit_employer_details = async (req,res,next) => {
  try{
const id = req.params.id;
const edit_employer = {
  email:req.body.email,
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  company_name:req.body.company_name,
  company_email:req.body.company_email,
  industry: req.body.industry,
  employment_type:req.body.employment_type,
  contact_person:req.body.contact_person,
  phone:req.body.phone,
  address:req.body.address
}
const result = await Employer.updateOne({_id:id, edit_employer})
return res.json({message:'updated successfully'})
  }catch(err){
    return next(err);
  }
}

//the below code delete/remove an employer from the database

module.exports.remove_employer_details = async (req,res,next) => {
  try{
    const id = req.params.id;
    const result = await Employer.findOneAndDelete({_id:id})
    console.log(result);
    return res.json({message: 'deleted successfully'})
  }catch(err){
    return next(err);
  }
}

