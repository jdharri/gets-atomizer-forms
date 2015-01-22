softwareDocApp.config(function ($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'dd/MM/yyyy',
        startWeek: 1
    });
})
softwareDocApp.controller('ProjectProposalController', ['$scope', function ProjectProposalController($scope) {

        //$scope.doc ={"selectedDate":"2015-01-21T18:31:09.267Z","selectedDateAsNumber":509414400000,"actors":[{"name":"Joe Schmuckatelli","description":"a person","code":"js1"}],"useCases":[{"id":1,"description":"asdfaas","subCases":[{"id":"1.1","description":"dfas","subCases":[{"id":"1.1.1","description":"","subCases":[]},{"id":"1.1.2","description":"","subCases":[]},{"id":"1.1.3","description":"","subCases":[]}]},{"id":"1.2","description":"dfasddf","subCases":[{"id":"1.2.1","description":"","subCases":[]}]}]},{"id":2,"description":"asddfaas","subCases":[]}],"functionalCapabilities":[{"description":"asdfasdfsa"},{"description":"asdfs"},{"description":"asdfs"},{"description":"asdf"}],"nonFunctionalCapabilities":[{"description":"asdfasddfas"}],"title":"I'm a title","purpose":"a large drawn out purpose","createdBy":"Joel","createdDate":"2015-01-21T05:00:00.000Z","reviewedBy":"steve","reviewedDate":"2015-01-22T05:00:00.000Z"} ;

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

        if (!$scope.doc.actors) {
            $scope.doc.actors = [];
        }

        $scope.addActor = function () {

            $scope.doc.actors.push({
                name: "",
                description: ""
            });
        };
        if (!$scope.doc.useCases) {
            $scope.doc.useCases = [];
        }
        $scope.addUseCase = function () {
            // console.debug(blah.$modelValue)

            $scope.doc.useCases.push({
                id: $scope.doc.useCases.length + 1,
                description: "",
                steps: []
            });

        };
        $scope.removeUseCase = function () {
            scope.remove();
        };


        $scope.addUseCaseStep = function (scope) {

            var nodeData = scope.$modelValue;

            nodeData.steps.push({
                id: nodeData.id + '.' + (nodeData.steps.length + 1),
                description: "",
                steps: []
            })
        };

        $scope.addPeerStep = function (scope) {
            var nodeData;
            if (scope.$parentNodeScope) {
                nodeData = scope.$parentNodeScope.$modelValue;
            } else {
                nodeData = scope.$modelValue;
            }

            console.debug(nodeData)
            nodeData.steps.push({
                id: nodeData.id + '.' + (nodeData.steps.length + 1),
                description: "",
                steps: []
            })
        };






        $scope.addFuncCapability = function () {
            if (!$scope.doc.functionalCapabilities) {
                $scope.doc.functionalCapabilities = [];
            }
            $scope.doc.functionalCapabilities.push({
                description: ""
            });
        };



        $scope.addNonFuncCapability = function () {

            if (!$scope.doc.nonFunctionalCapabilities) {
                $scope.doc.nonFunctionalCapabilities = [];
            }
            $scope.doc.nonFunctionalCapabilities.push({
                description: ""
            });
        };

        $scope.submit = function () {
            console.log($scope.doc);
        }
    }]);
