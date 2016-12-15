var app = angular.module('myApp', []);
app.controller('newsController', function($scope, $http){	
	$http({method: 'POST', url: 'js/news.json'}).success(function(data)
	{
		$scope.beritas = data; // response data 
	});
	
 });