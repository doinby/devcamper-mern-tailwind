const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to MonogoDB
connectDB();

// Import route files
const bootcamps = require('./routes/bootcamps');

// Express App
const app = express();

// Morgan logging middleware
if (process.env.MODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

// App Listening Setup
const PORT = process.env.PORT || 5000;
const server = app.listen(
	PORT,
	console.log(`Server running in ${process.env.MODE_ENV} on port ${PORT}`)
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`);

	// Close server and exit process
	server.close(() => process.exit(1));
});
