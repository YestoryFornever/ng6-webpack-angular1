import angular from 'angular';

let numFilterModule = angular.module('numFilter', [])
.filter('numFilter',function(){
	return function(num){
		// console.log(num)
		if(num){// 数量、10000
			num = parseFloat( num/10000) ;
			// num = num.split('.')[0];
		}
		return num ;
	};
})
.name;

export default numFilterModule;