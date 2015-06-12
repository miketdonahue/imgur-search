(function() {
  angular
    .module('imgur')
    .controller('SearchController', SearchController)
    .filter('trusted', ['$sce', function ($sce) {
      return function(url) {
          return $sce.trustAsResourceUrl(url);
      };
    }]);

    SearchController.$inject = ['$scope', '$sce', 'SearchManager'];

    function SearchController($scope, $sce, SearchManager) {
      // variables
      $scope.search = {}; 

      $scope.types = [
        {name: "Video", value: "anigif"},
        {name: "Png", value: "png"},
        {name: "Jpg", value: "jpg"},
        {name: "Gif", value: "gif"}
      ];

      $scope.search.type = $scope.types[0];

      $scope.search.sortedBy = 'views';

      $scope.search.page = '0';

      // functions
      $scope.getSearchResults = function() {
        SearchManager.getSearchResults($scope.search.query, $scope.search.type.value, $scope.search.page)
          .then(function(results) {
            $scope.results = results.data;
          });
      };

      $scope.setSortedBy = function(by) {
        $scope.search.sortedBy = by;
      };

      $scope.videoPath = function(video) {
        return "http://i.imgur.com/" + video + ".mp4";
      };

      $scope.init = function(){
        // init functions
      };

      $scope.init();
    }
})();