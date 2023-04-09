const Bootcamp = require('../models/Bootcamp');

// Add description to each middleware function is helpful
// in order to identify its purpose

// Desc:    Get All Bootcamps
// Route:   GET /api/v1/bootcamps
// Access:  Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Show All Bootcamps' });
};

// Desc:    Get a Bootcamp
// Route:   GET /api/v1/bootcamps/:id
// Access:  Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Show Bootcamp ${req.params.id}` });
};

// Desc:    Create New Bootcamp
// Route:   POST /api/v1/bootcamps/
// Access:  Private
exports.createBootcamp = async (req, res, next) => {
	try {
		// Insert model into database
		const bootcamp = await Bootcamp.create(req.body);

		// The HTTP 201 Created success status response code
		// indicates that the request has succeeded and has
		// led to the creation of a resource
		res.status(201).json({
			success: true,
			data: bootcamp,
		});
	} catch (err) {
		res.status(400).json({ success: false });
	}
};

// Desc:    Update a Bootcamp
// Route:   PUT /api/v1/bootcamps/:id
// Access:  Private
exports.updateBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
};

// Desc:    Delete a Bootcamp
// Route:   DELETE /api/v1/bootcamps/:id
// Access:  Private
exports.deleteBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};
