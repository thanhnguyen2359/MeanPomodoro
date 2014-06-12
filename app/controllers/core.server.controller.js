'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	console.log('USER :');
	console.log(req.user);
	res.render('index', {
		user: req.user || null
	});
};