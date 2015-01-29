var softwareDocApp = angular.module('softwareDocApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'formControllers', 'mgcrea.ngStrap', 'ui.tree']);
var formControllers = angular.module('formControllers', []);

softwareDocApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/newproposal', {
                    templateUrl: 'views/projectProposal.html',
                    controller: 'ProjectProposalController'
                })
                .when('/newsolution', {
                    templateUrl: 'views/solution.html',
                    controller: 'ProposedSolutionController'
                });

    }])
softwareDocApp.controller('NavbarController', function NavbarController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };


});
softwareDocApp.controller('DropdownCtrl', function ($scope) {

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
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
softwareDocApp.factory('uniqueField', [function () {

    }]);
softwareDocApp.directive('hcUnique', function () {

    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {


            ngModel.$parsers.unshift(function (viewValue) {

                if (scope.doc.actors.length > 1) {
                    ngModel.$setValidity('unique', true);
                    var unique = true;
                    scope.doc.actors.forEach(function (o) {
                        if (o.code) {

                            if (o.code === viewValue) {
                                unique = false;
                                console.log('not unique')
                                ngModel.$setValidity('unique', false);
                                return 'undefined';
                            }
                        }
                    });
                    if (unique) {
                        console.log(ngModel.$valid)
                        return viewValue;
                    }
                } else {

                    return viewValue;
                }
            });
        }
    }
})