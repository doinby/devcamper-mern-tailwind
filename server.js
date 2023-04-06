const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Express App
const app = express();

app.get('/api/v1/bootcamp', (req, res) =>
	res.status(200).json({ success: true, msg: 'Show All Bootcamps' })
);

app.post('/api/v1/bootcamp', (req, res) =>
	res.status(200).json({ success: true, msg: 'Create New Bootcamp' })
);

app.put('api/v1/bootcamp/:id', (req, res) =>
	res
		.status(200)
		.json({ success: true, msg: `Update Bootcamp ${req.params.id}` })
);

app.delete('api/v1/bootcamp/:id', (req, res) =>
	res
		.status(200)
		.json({ success: true, msg: `Delete Bootcamp ${req.params.id}` })
);

// App Listening Setup
const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(`Server running in ${process.env.MODE_ENV} on port ${PORT}`)
);
