const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;
const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes')

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

//Overrides default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
