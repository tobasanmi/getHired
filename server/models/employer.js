const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
  email:{type:String, required: true},
  firstname:{type:String, required:true},
  lastname:{type:String, required:true},
  password:{type:String, required:true},
  company_name:{type:String, required:true},
  company_email :{type:String, required:true},
  industry:{type:String, required:true},
  employment_type:{type:String, required:true},
  contact_person:{type:String, required:true},
  phone:{type:Number, required:true},
  address:{type:String, required:true},
});

module.exports = mongoose.model('Employer', EmployerSchema);
