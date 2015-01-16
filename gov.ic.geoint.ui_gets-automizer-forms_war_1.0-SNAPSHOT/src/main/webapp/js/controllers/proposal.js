softwareDocApp.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd/MM/yyyy',
    startWeek: 1
  });
})
softwareDocApp.controller('ProjectProposalController', ['$scope', function ProjectProposalController($scope) {
       $scope.doc = {};
        $scope.doc.selectedDate = new Date();
        $scope.doc.selectedDateAsNumber = Date.UTC(1986, 1, 22);
        // $scope.fromDate = new Date();
        // $scope.untilDate = new Date();
        $scope.getType = function (key) {
            return Object.prototype.toString.call($scope[key]);
        };

        $scope.clearDates = function () {
            $scope.selectedDate = null;
        };

        $scope.doc.actors = [];

        $scope.addActor = function () {

            $scope.doc.actors.push({
                name: "",
                description: ""
            });
        };

        $scope.doc.useCases = [];

        $scope.addUseCase = function () {

            $scope.doc.useCases.push({
                description: ""
            });
        };


        $scope.doc.functionalCapabilities = [];

        $scope.addFuncCapability = function () {

            $scope.doc.functionalCapabilities.push({
                description: ""
            });
        };


        $scope.doc.nonFunctionalCapabilities = [];

        $scope.addNonFuncCapability = function () {

            $scope.doc.nonFunctionalCapabilities.push({
                description: ""
            });
        };

        $scope.submit = function () {
            console.log($scope.doc);
        }
    }]);
