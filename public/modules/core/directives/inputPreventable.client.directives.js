'use strict';

;(function($){
	angular.module('core').directive('inputpreventable',[function(){

		/**
		* Allowable 
		*  arrow key (37-40) , 
		*  tab(9) , back(8) , space(32) , home (36) , end(35)
		*/
		var KEYCODE = {
			allowable : [37,38,39,40,8,9,35,36]
		};
		return {
			require : 'ngModel',
			link : function(scope,elm,attrs,ctrl){
				/*ISSUE : still unconsistent between typing and copy paste mode 
				-> confuse user about experience*/
				elm.off('input').on('input',function(e){
					var self = $(this),
						regexp = new RegExp(self.data('prevent-pattern'),'g'),
						isPasted = self.data('isPasted');

					scope.$apply(function(){
						if(!isPasted){
							/*Typing case*/
							self.val(self.val().replace(regexp,''));
						}else{ 
							/*Copy paste case*/
							self.data('isPasted',false);
						}
						
						ctrl.$setViewValue(self.val());
					});
				});

				elm.off('paste').on('paste',function(e){
					var self = $(this);
					self.data('isPasted',true);
				});

				/*ISSUE : e.keyCode not parse exactly in case-sensitive and special character {.-} 
				* cannot proccess in case shilt + .. , alt + , window + 
				*/
				// elm.off('keydown').on('keydown',function(e){
				// 	var self = $(this),
				// 	regexp = new RegExp(self.data('prevent-pattern'),'g'),
				// 	character = String.fromCharCode(e.keyCode),
				// 	isAllowable = KEYCODE.allowable.filter(function(value){
				// 		return value == e.keyCode;
				// 	}).length > 0;

				// 	console.log(e.keyCode);
				// 	console.log(character);
				// 	return isAllowable || !(regexp.test(character));
				// });
			}
		};
	}]);
})(window.jQuery);
