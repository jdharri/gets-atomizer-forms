softwareDocApp.config(function ($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'dd/MM/yyyy',
        startWeek: 1
    });
})
softwareDocApp.controller('ProjectProposalController', ['$scope', function ProjectProposalController($scope) {

        //  $scope.doc ={"selectedDate":"2015-01-27T20:53:27.732Z","selectedDateAsNumber":509414400000,"actors":[{"name":"gsddffg","description":"1 sddfg sddf","code":"as1"}],"useCases":[{"id":1,"description":"sdfgsfdgssd","steps":[{"id":"1.1","description":"sdfgsdffg ssddfg s sddf","steps":[{"id":"1.1.1","description":"d gsddf gdsdf","steps":[]},{"id":"1.1.2","description":"sdf gsdfg","steps":[]}]}]},{"id":2,"description":"sdfg s sd df","steps":[]}],"nonFunctionalCapabilities":[{"description":"sdffg"},{"description":"ssdffgsfd"},{"description":"gssdfg"}],"functionalCapabilities":[{"description":"sgsd"},{"description":"gdsdf"},{"description":"gsddfg"},{"description":"sdffgsfdg"}],"purpose":"asdfaasd fasd fsad fasdf a asdf","title":"a sdfasd asddf"} ;

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
                description: "",
                code: ""
            });
        };
        $scope.removeActor = function (item) {

            var index = $scope.doc.actors.indexOf(item);
            $scope.doc.actors.splice(index, 1);

        };

        if (!$scope.doc.useCases) {
            $scope.doc.useCases = [];
        }
        $scope.addUseCase = function () {


            $scope.doc.useCases.push({
                sequence: $scope.doc.useCases.length + 1,
                title: "",
                story: "",
                description: "",
                steps: []
            });

        };
        $scope.removeUseCase = function () {
            scope.remove();
        };


        $scope.addUseCaseStep = function (node) {
            //  console.debug(node)


            node.steps.push({
                sequence: node.sequence + '.' + (node.steps.length + 1),
                description: "",
                steps: []
            })
        };

        $scope.addPeerStep = function (scope) {
            //  console.debug(scope)

            var nodeData;
            if (scope.$parentNodeScope) {
                console.log("if")
                nodeData = scope.$parentNodeScope.node;

                nodeData.steps.push({
                    sequence: nodeData.sequence + '.' + (nodeData.steps.length + 1),
                    description: "",
                    steps: []
                });

            } else {
                console.log("else")
                console.log(scope.$parent)
                if (scope.$parent) {
                    $scope.addUseCaseStep(scope.$parent.$modelValue);
                } else {
                    $scope.addUseCase();
                }
                return;
            }
        };

        if (!$scope.doc.functionalCapabilities) {
            $scope.doc.functionalCapabilities = [];
        }

        $scope.addFuncCapability = function () {
            if (!$scope.doc.functionalCapabilities) {
                $scope.doc.functionalCapabilities = [];
            }
            $scope.doc.functionalCapabilities.push({
                description: ""
            });
        };
        $scope.removeFuncCapability = function (item) {

            var index = $scope.doc.functionalCapabilities.indexOf(item);
            $scope.doc.functionalCapabilities.splice(index, 1);

        };
        if (!$scope.doc.nonFunctionalCapabilities) {
            $scope.doc.nonFunctionalCapabilities = [];
        }

        $scope.addNonFuncCapability = function () {

            if (!$scope.doc.nonFunctionalCapabilities) {
                $scope.doc.nonFunctionalCapabilities = [];
            }
            $scope.doc.nonFunctionalCapabilities.push({
                description: ""
            });
        };
        $scope.removeNonFuncCapability = function (item) {

            var index = $scope.doc.nonFunctionalCapabilities.indexOf(item);
            $scope.doc.nonFunctionalCapabilities.splice(index, 1);

        };
        $scope.submit = function () {
            $scope.doc.capabilities = $scope.doc.nonFunctionalCapabilities.concat($scope.doc.functionalCapabilities);

            console.log($scope.doc);
        }
    }]);
