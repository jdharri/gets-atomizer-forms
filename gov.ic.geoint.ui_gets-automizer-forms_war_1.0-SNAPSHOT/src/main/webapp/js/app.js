var softwareDocApp = angular.module('softwareDocApp', ['ngRoute', 'ngAnimate','ngSanitize', 'formControllers', 'mgcrea.ngStrap']);
var formControllers = angular.module('formControllers', []);

softwareDocApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/newproposal', {
                    templateUrl: 'views/projectProposal.html',
                    controller: 'ProjectProposalController'
                });

    }])
softwareDocApp.controller('NavbarController', function NavbarController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };


});
softwareDocApp.directive('autoFocus', function ($timeout) {
    return {
        restrict: 'AC',
        link: function (_scope, _element) {
            $timeout(function () {
                _element[0].focus();
            }, 0);
        }
    };
});
softwareDocApp.directive('ngEnter', function () {
    return function ($scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                $scope.$apply(function () {
                    $scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});