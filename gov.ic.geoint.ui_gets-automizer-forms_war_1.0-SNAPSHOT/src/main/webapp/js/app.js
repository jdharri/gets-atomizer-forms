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
softwareDocApp.controller('DropdownCtrl', function($scope) {
 
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
softwareDocApp.directive('hcUnique', function(){
    alert('here')
    return {
        restrict:'A',
        require:'ngModel',
        link:function(scope, element, attrs, ngModel){
         ngModel.$parsers.unshift(function(value){
                console.log(value);
            });
        }
    }
})