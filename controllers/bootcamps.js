const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');

// Add description to each middleware function is helpful
// in order to identify its purpose

// Desc:    Get All Bootcamps
// Route:   GET /api/v1/bootcamps
// Access:  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
   let queryStr = JSON.stringify(req.query);

   // Look for keywords "gt", "gte", etc.
   // and return a string with "$" at the front
   queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
   );

   // Convert query back to object
   const query = Bootcamp.find(JSON.parse(queryStr));
   const bootcamps = await query;

   const bootcampsCount = bootcamps.length;

   res.status(200).json({
      success: true,
      count: bootcampsCount,
      data: bootcamps
   });
});

// Desc:    Get a Bootcamp by ID
// Route:   GET /api/v1/bootcamps/:id
// Access:  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
   const bootcampId = req.params.id;
   const bootcamp = await Bootcamp.findById(bootcampId);

   // If ID not found, return error
   !bootcamp
      ? next(
           new ErrorResponse(`Cannot find Bootcamp with ID ${bootcampId}`, 404)
        )
      : res.status(200).json({ success: true, data: bootcamp });
   next(err);
});

// Desc:    Create New Bootcamp
// Route:   POST /api/v1/bootcamps/
// Access:  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
   // Insert model into database
   const bootcamp = await Bootcamp.create(req.body);

   // The HTTP 201 Created success status response code
   // indicates that the request has succeeded and has
   // led to the creation of a resource
   res.status(201).json({
      success: true,
      data: bootcamp
   });
});

// Desc:    Update a Bootcamp by ID
// Route:   PUT /api/v1/bootcamps/:id
// Access:  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
   const bootcampId = req.params.id;
   const bootcamp = await Bootcamp.findByIdAndUpdate(bootcampId, req.body, {
      new: true,
      runValidators: true
   });

   // If ID not found, return error
   !bootcamp
      ? res.status(400).json({ success: false })
      : res.status(200).json({ success: true, data: bootcamp });
});

// Desc:    Delete a Bootcamp by ID
// Route:   DELETE /api/v1/bootcamps/:id
// Access:  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
   const bootcampId = req.params.id;
   const bootcamp = await Bootcamp.findByIdAndDelete(bootcampId);

   // If ID not found, return error
   !bootcamp
      ? res.status(400).json({ success: false })
      : res.status(200).json({ success: true, data: {} });
});
