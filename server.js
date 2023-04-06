const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

// Import route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Express App
const app = express();

app.use(logger);

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

// App Listening Setup
const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`Server running in ${process.env.MODE_ENV} on port ${PORT}`)
);
