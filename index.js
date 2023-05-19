const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require("cors");
const chalk = require("chalk");
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');

//dotenv config
dotenv.config();
//cors
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const port = process.env.PORT || 3000;


mongoose.set("strictQuery", true);
// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
    process.exit(1); // Exit the process if the connection fails
  });

// Register user routes
app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(
        chalk.green.inverse(
            "Hurrah! App is Running, http://localhost:" + chalk.black(port)
        )
    );
});