(function (){
	'use strict';
	
	angular.module('DIApp',[])
			.controller('DIController',DIController);
			
	DIController.$inject = ['$scope','$filter'];
			
	function DIController($scope, $filter){
		$scope.name = "Rohit";
		
		$scope.upper = function(){
			var upcase = $filter('uppercase');
			$scope.name = upcase($scope.name);
		};
	}
})();