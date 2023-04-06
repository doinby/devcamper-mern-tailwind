// Desc: Logs request method and url to console
const logger = (req, res, next) => {
	console.log(
		`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
	);

	// ALL middleware function needs to call
	// next() at the end when it finishes
	next();
};

module.exports = logger;
