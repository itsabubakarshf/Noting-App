const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute=require('./routes/user');
const teacherRoute=require('./routes/teacher');
const studentRoute=require('./routes/student');
const masterRoute=require('./routes/master');
const classRoute=require('./routes/class');
const attendanceRoute=require('./routes/attendance');


const app = express();
dotenv.config();

//config cors
app.use(cors());

//config body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//connect to MongoDB
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log("DB connection is successful") })
    .catch((err) => { console.log(err) })

//using user route
app.use('/api/user',userRoute);
app.use('/api/teacher',teacherRoute);
app.use('/api/student',studentRoute);
app.use('/api/master',masterRoute);
app.use('/api/class',classRoute);
app.use('/api/attendance',attendanceRoute);




//Listner
app.listen(port, () => {
    console.log(
        chalk.green.inverse("Server is running on http://localhost:" + chalk.yellow(port))
    )
})