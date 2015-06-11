'use strict';

angular.module('ngDependencyGraph')
  .controller('FilterNameCtrl', function($scope, $rootScope) {

    $scope.name = '';

    $scope.$watch('name', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        // $scope.currentGraph.filterByName(newVal);
        $rootScope.$broadcast('currentGraph:update');

      }
    });

  });
