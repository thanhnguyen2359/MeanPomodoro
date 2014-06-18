'use strict';

angular.module('core').directive('ngSelect',[function(){
	console.log('Select2 setting S...');
	// var linker = function(scope,element,attrs){
	// 	console.log('Select2 Directive...');
	// 		element.select2({
	// 			placeholder: 'Select a State',
	// 			allowClear: true
	// 		});
	// };

	// return {
	// 	restrict : 'E',
	// 	transclude : true,
	// 	scope : {},
	// 	link : linker
	// };

	return function(scope, element, attr){
		console.log('Select2 Directive...');
		element.select2();
	};
}]);