const Bootcamp = require('../models/Bootcamp');

// Add description to each middleware function is helpful
// in order to identify its purpose

// Desc:    Get All Bootcamps
// Route:   GET /api/v1/bootcamps
// Access:  Public
exports.getBootcamps = async (req, res, next) => {
	try {
		const bootcamps = await Bootcamp.find();
		const bootcampsCount = bootcamps.length;

		res
			.status(200)
			.json({ success: true, count: bootcampsCount, data: bootcamps });
	} catch (error) {
		res.status(400).json({ success: false });
	}
};

// Desc:    Get a Bootcamp by ID
// Route:   GET /api/v1/bootcamps/:id
// Access:  Public
exports.getBootcamp = async (req, res, next) => {
	try {
		const bootcampId = req.params.id;
		const bootcamp = await Bootcamp.findById(bootcampId);

		// If ID not found, return error
		!bootcamp
			? res.status(400).json({ success: false })
			: res.status(200).json({ success: true, data: bootcamp });
	} catch (err) {
		next(err);
	}
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

// Desc:    Update a Bootcamp by ID
// Route:   PUT /api/v1/bootcamps/:id
// Access:  Private
exports.updateBootcamp = async (req, res, next) => {
	try {
		const bootcampId = req.params.id;
		const bootcamp = await Bootcamp.findByIdAndUpdate(bootcampId, req.body, {
			new: true,
			runValidators: true,
		});

		// If ID not found, return error
		!bootcamp
			? res.status(400).json({ success: false })
			: res.status(200).json({ success: true, data: bootcamp });
	} catch (err) {
		res.status(400).json({ success: false });
	}
};

// Desc:    Delete a Bootcamp by ID
// Route:   DELETE /api/v1/bootcamps/:id
// Access:  Private
exports.deleteBootcamp = async (req, res, next) => {
	try {
		const bootcampId = req.params.id;
		const bootcamp = await Bootcamp.findByIdAndDelete(bootcampId);

		// If ID not found, return error
		!bootcamp
			? res.status(400).json({ success: false })
			: res.status(200).json({ success: true, data: {} });
	} catch (err) {
		res.status(400).json({ success: false });
	}
};
