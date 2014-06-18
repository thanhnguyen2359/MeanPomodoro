'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	_ = require('lodash');

module.exports.getUsers = function(req, res, next){
	var users =[];
	User.find().select('displayName provider roles').exec(function(err,result){
		if(err) return next(err);
		users = _.map(result,function(obj){
			return {
				Name : obj.displayName,
				Provider : obj.provider,
				Roles : obj.roles.join()
			};
		});
		console.log('USERS : ');
	 	console.log(users);
	 	res.json(users);
	});	
};