'use strict';

angular.module('core').directive('ngSelect',function(){
	console.log('Select2 setting...');
	return {
		restrict : 'AE',
		link : function(scope,element,attrs){
			console.log('Select2 Directive...');
			element.select2({
				placeholder: 'Select a State',
				allowClear: true
			});
		}
	};
});