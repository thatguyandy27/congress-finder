'use strict';

angular.module('congressFinderApp')
  .factory('congressService', ['$http', function($http){
    var API_KEY = '45a77aa041db4ef0887a49a4ac63f05e',
        BASE_URL = 'https://congress.api.sunlightfoundation.com/legislators/locate';

    function findCongressMembersForZip(zipCode){
        return $http({
            method: 'GET',
            url: BASE_URL + '?zip=' + zipCode + '&apikey=' + API_KEY
        });
    }

    return {
        findCongressMembersForZip: findCongressMembersForZip
    };
  }]);