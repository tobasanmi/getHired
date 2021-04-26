const Jobs = require('../models/jobs');
const Employer = require('../models/employer');

module.exports.post_a_new_job = async(req,res,next) => {
  // create new job document 
  const newJob = new Jobs(req.body);
  newJob.employer = req.params.employerId;
  return newJob.save()
  .then(job => {
    //update the employers job array
    return Employer.findByIdAndUpdate(req.params.employerId, {$addToset:[{jobs:job._id}]})
    .then(() => res.json({'message':'created successfully'}))
  })
  .catch(err => next(err));
  // // find and return  the employer document
  // await Employer.findById(req.params.employerId)
  // .then(employer =>
  //   // save new job document
  //   newJob.save()
  //   .then(createdJob => {
  //     // add new job Id to the employer document
  //     console.log('jab', employer.address)
  //       employer.jobs.push(createdJob._id);
  //       return employer
  //       .save()
  //       .then(() => res.json({data:createdJob}))
    // })
    // )
    // .catch(err => next(err));
}

module.exports.get_job_by_employer = (req,res,next) => {
  // find all job by employer
  return(
  Employer.findById(req.params.employerId)
  .populate('jobs')
  .exec()
  .then(employer =>{
    console.log('jab', {employer})
    res.json({data:employer})
  })
  .catch(err => next(err))
  );
}

module.exports.get_a_single_job_by_an_employer = (req,res,next) => {
    Jobs.findById(req.params.id)
    .populate('employer')
    .exec()
    .then(job => res.json({data:job}))
    .catch(err => next(err));
}

module.exports.edit_job = async (req,res,next) => {
  // edit job by id
  await Jobs.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.json({'message':'updated successfully'}))
  .catch(err => next(err));
}

module.exports.delete_job = async (req,res,next) => {
  // delete job
  await Jobs.findByIdAndDelete(req.params.id)
  .then(() => res.json({'message':'deleted successfully'}))
}