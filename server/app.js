const express = require('express');
const mongoose = require('mongoose');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const employerRouter = require('./routes/employerRoutes');
const employeeRouter = require('./routes/employeeRoutes');
const jobRouter = require('./routes/jobRoutes')


mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/get-hired',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('connected to mongoDB');
}).catch((err) => {
  console.log(err);
})



const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(cors({credentials: true, origin: '*'}))

//routes with controller
app.use('/employer',employerRouter )
app.use('/employee',employeeRouter );
app.use('/jobs',jobRouter );


app.listen(3001, () => console.log('app started on port 3001'));