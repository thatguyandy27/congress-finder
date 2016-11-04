'use strict';

/**
 * @ngdoc function
 * @name congressFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the congressFinderApp
 */
angular.module('congressFinderApp')
  .controller('MainCtrl', ['congressService', '$scope', function (congressService, $scope) {
    $scope.form = {
        zipcode: ''
    };
    $scope.onClick = function(){
        congressService.findCongressMembersForZip($scope.form.zipcode).then(function(d) {
            var data = d.data || {};
            $scope.congressMembers = data.results;
        });
    }

    $scope.congressMembers = [];

  }]);
