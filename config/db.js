const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI);

	// Display MongoDB host that is connected
	console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
