const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute=require('./routes/user');

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

//Listner
app.listen(port, () => {
    console.log(
        chalk.green.inverse("Server is running on http://localhost:" + chalk.yellow(port))
    )
})