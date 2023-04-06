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
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Create a New Bootcamp' });
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
