const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    email:{type:String, required: true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    password:{type:String, required:true},
    school:{type:String, required:true},
    date:{type:Date, required:true},
    degree:{type:String, required:true},
    discipline:{type:String, required:true},
    skill:[String],
    work_history:{type:String, required:true},
    certification:[String],
    phone:{type:Number, required: true},
  }
);

module.exports = mongoose.model('Employee', EmployeeSchema);