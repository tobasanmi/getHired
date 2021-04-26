const mongoose = require('mongoose');

const Schema = mongoose.Schema

const BidSchema = new Schema({
  job_id:[{type:Schema.Types.ObjectId, ref: 'Jobs'}],
  employer_id:[{type: Schema.Types.ObjectId, ref:'Employer'}]
});

module.exports = mongoose.model('Bid', BidSchema);