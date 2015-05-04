var todoControllers = angular.module('todoControllers', []);

var STORAGE_KEY = 'todolist';

function saveToStorage(key, array) {
	localStorage.setItem(key, JSON.stringify(array));
}

function getStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

todoControllers.controller('todoCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.items = $scope.items || getStorage(STORAGE_KEY);
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
		alert('removed!');
	}
	$scope.saveItem = function() {
		saveToStorage(STORAGE_KEY, $scope.items);
	}

	// login/logout toggle
	$scope.link = {url: 'login', label: 'login'};
	$scope.isadmin = false;
	if($state.current.name.indexOf('admin') > -1) {
		$scope.link = {url: 'logout', label: 'login'};
		$scope.isadmin = true;
	}
	$scope.toItem = function(index) {
		$state.go($scope.isadmin ? 'item.admin': 'item', {itemId: index});
	}
}]);

todoControllers.controller('itemCtrl', ['$scope', '$state', '$stateParams', '$location', function($scope, $state, $stateParams, $location) {
	$scope.items = getStorage(STORAGE_KEY);
	$scope.item = $scope.items[$stateParams.itemId];
	$scope.item.date = new Date($scope.item.date);
	$scope.saveItem = function() {
		$scope.items[$stateParams.itemId] = $scope.item;
		saveToStorage(STORAGE_KEY, $scope.items);
		$state.go('main.admin');
	}
	$scope.isadmin = false;
	if($state.current.name.indexOf('admin') > -1) {
		$scope.link = {url: 'logout', label: 'login'};
		$scope.isadmin = true;
	}
	$scope.state = $state;
}]);

todoControllers.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
	if($state.current.name.indexOf('logout') > -1) {
		$state.go('main.anonymous');
		return;
	}

	$scope.invalid = false;
	$scope.submitLogin = function() {
		if($scope.user === 'admin' && $scope.passwd === 'password') {
			$state.go('main.admin');
		} else {
			$scope.invalid = true;
		}
	}
}]);

var todoDirectives = angular.module('todoDirectives', []);

todoDirectives.directive('itemButton', function() {
		return {
			restrict: 'A',
			link: function($scope, $element) {
				$scope.itemBtnClass = 'back';
				$scope.submit = function() {
					$scope.state.go('main.anonymous');
				}
				if($scope.isadmin) {
					$scope.itemBtnClass = 'save';
					$scope.submit = $scope.saveItem;
				}
			}
		}
	});