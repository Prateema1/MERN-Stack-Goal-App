const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require('./routes/goalRoutes')

const app = express();

app.use('/api/goals', goalRoutes )

app.listen(port, () => console.log(`Server started on port ${port}`));
