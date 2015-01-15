var softwareDocApp = angular.module('softwareDocApp', ['ngRoute',  'formControllers', 'ui.date']);
var formControllers = angular.module('formControllers', []);

softwareDocApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/newproposal', {
                    templateUrl: 'views/projectProposal.html'
                });
    }])
softwareDocApp.controller('NavbarController', function NavbarController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

   
});
 softwareDocApp.controller('ActorController', function ActorController($scope) {
        $scope.actors = [];

        $scope.add = function () {
           
            $scope.actors.push({
            
                name: "",
                description: ""
            });
        }
    });
     softwareDocApp.controller('UseCaseController', function UseCaseController($scope) {
        $scope.useCases = [];

        $scope.add = function () {
           
            $scope.useCases.push({
                           
                description: ""
            });
        }
    });
      softwareDocApp.controller('FunctionalCapabilitiesController', function FunctionalCapabilitiesController($scope) {
        $scope.functionalCapabilities = [];

        $scope.add = function () {
           
            $scope.functionalCapabilities.push({
                           
                description: ""
            });
        }
    });
     softwareDocApp.controller('NonFunctionalCapabilitiesController', function NonFunctionalCapabilitiesController($scope) {
        $scope.nonFunctionalCapabilities = [];

        $scope.add = function () {
           
            $scope.nonFunctionalCapabilities.push({
                           
                description: ""
            });
        }
    });