'use strict';
(function($,undefined){
	angular.module('core').directive('ngSelect',function(){
		return {
			restrict : 'AE',
			link : function(scope,element,attrs){
				console.log('ngSelect Directive ...');
				console.log(attrs);
				$(element).select2({
					multiple: true
				});
			}
		};
	});
})(window.jQuery);

