const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const goalRoutes = require('./routes/goalRoutes');

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRoutes)

//Overrides default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
