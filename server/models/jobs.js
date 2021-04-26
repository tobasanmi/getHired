const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobsSchema = new Schema(
  {
    company:{type:String,required:true},
    industry: {type:String, required: true},
    location:{type:String, required: true},
    qualification:{type:String, required : true},
    experience:{type:String, required:true},
    job_level:{type:String, required:true},
    job_summary:{type:String},
    job_description:{type:String, required:true},
    job_title:{type:String, required: true},
    employer:{type:Schema.Types.ObjectId, ref: 'Employer'},
  }
);

module.exports = mongoose.model('Jobs', JobsSchema);