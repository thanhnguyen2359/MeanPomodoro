'use strict';

module.exports = function(app){
	var admin = require('../../app/controllers/admin');
	app.route('/admin/manage-user').get(admin.manageUser);
};