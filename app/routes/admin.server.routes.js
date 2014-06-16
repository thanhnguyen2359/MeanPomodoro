'use strict';

module.exports = function(app){
	var admin = require('../../app/controllers/admin');
	app.route('/admin/users').get(admin.getUsers);
};