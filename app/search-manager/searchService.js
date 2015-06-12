(function() {
  angular
    .module('imgur')
    .factory('SearchManager', SearchManager);

    SearchManager.$inject = ['$http'];

    function SearchManager($http) {
      var instance = {
        getSearchResults: getSearchResults
      };

      return instance;

      // functions
      function getSearchResults(query, type, page) {
        return $http({
          method: 'GET',
          params: {q_all: query, q_type: type, page: page},
          url: 'https://api.imgur.com/3/gallery/search/',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Client-ID 21d3ecdc6393ef2'
          }
        }).then(function(response) {
          return response.data;
        });
      }
    }
})();