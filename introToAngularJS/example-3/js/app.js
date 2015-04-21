var todoControllers = angular.module('todoControllers', []);

var STORAGE_KEY = 'todolist';

function saveToStorage(key, array) {
	localStorage.setItem(key, JSON.stringify(array));
}

function getStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

todoControllers.controller('todoCtrl', function($scope) {
	$scope.items = getStorage(STORAGE_KEY);
	if($scope.items === null || $scope.items.length < 1) {
		// jika belum ada isinya, buat array baru
		$scope.items = [];
	}
	$scope.addItem = function(event){
		if (event.which === 13 && $scope.inputTxt.trim() !== ''){
			var todo = {
				text: $scope.inputTxt,
				completed: false,
				date: undefined
			}
			$scope.items.push(todo);
			saveToStorage(STORAGE_KEY, $scope.items);
			$scope.inputTxt = '';
		}
	}
	$scope.removeItem = function($index){
		$scope.items.splice($index, 1);
		saveToStorage(STORAGE_KEY, $scope.items);
	}
	$scope.saveItem = function() {
		saveToStorage(STORAGE_KEY, $scope.items);
	}
});

todoControllers.controller('itemCtrl', function($scope, $routeParams, $location) {
	$scope.items = getStorage(STORAGE_KEY);
	$scope.item = $scope.items[$routeParams.itemId];
	$scope.item.date = new Date($scope.item.date);
	$scope.saveItem = function() {
		$scope.items[$routeParams.itemId] = $scope.item;
		saveToStorage(STORAGE_KEY, $scope.items);
		$location.path('#/');
	}
});