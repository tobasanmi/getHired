const express = require('express')
 const { 
  delete_job, edit_job, 
  get_job_by_employer, 
  post_a_new_job, 
  get_a_single_job_by_an_employer} = require('../controller/jobController');

const router =  express.Router({mergeParams:true});

// router.get('/employers/:employerId/jobs', all_jobs_by_employer);
router.get('/employers/:employerId/jobs', get_job_by_employer);
router.get('/employers/:employerId/jobs/:jobId', get_a_single_job_by_an_employer);
router.post('/employers/:employerId/jobs', post_a_new_job);
router.patch('/employers/:employerId/jobs/:jobId', edit_job);
router.delete('/employers/:employerId/jobs/:jobId', delete_job);

module.exports = router;
