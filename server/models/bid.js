const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BidSchema = new Schema({
  job_id:[{type:Schema.Types.ObjectId, ref: 'Jobs'}],
  freelancer_id:[{type: Schema.Types.ObjectId, ref:'Freelancer'}]
});

module.exports = mongoose.model('Bid', BidSchema);