app.component('serviceTag', {
    restrict: 'E',
    bindings: {},
    templateUrl: './service-tag.html',
    controller: function($location, $scope, $timeout, $interval, netPersonalCenterService, $sce, $http, serviceTgModalService) {
        'ngInject';
        $scope.serviceTgModalService = serviceTgModalService;
    }
});