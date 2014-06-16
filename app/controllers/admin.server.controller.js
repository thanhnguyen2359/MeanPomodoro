'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User');

module.exports.getUsers = function(req, res, next){
	var users =[];
	User.find().select('displayName provider roles').exec(function(err,result){
		if(err) return next(err);
		users = result;
		console.log('USERS : ');
	 	console.log(users);
	 	res.json(users);
	});	
};