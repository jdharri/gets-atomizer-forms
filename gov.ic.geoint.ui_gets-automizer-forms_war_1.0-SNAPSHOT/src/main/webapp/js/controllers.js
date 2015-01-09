var controllers = angular.module('myApp', ['mgcrea.ngStrap']);
controllers.controller('MyController', function MyController($scope) {

    $scope.author = {
        'name': 'Joel Harris',
        'title': 'Web Developer',
        'company': 'T3 Solutions'
    };
});
controllers.controller('NavbarController', function NavbarController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
           