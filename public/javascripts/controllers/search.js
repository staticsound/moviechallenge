'use strict';

angular.module('MainApp.Controllers')

.controller('searchController', function($scope, $http) {
        $scope.getMovie = function () {
            console.log('fetch() ran!');
            $http.get("http://www.omdbapi.com/?t=" + $scope.mainsearch + "&tomatoes=true&plot=short")
                .success(function(response) {
                    console.log(response);
                    $scope.details = response;
                });
        };

})

//// TMDB API STRING == https://api.themoviedb.org/3/movie?api_key=11897eb1c7662904ef04389140fb6638

.controller('typeaheadController', function($scope, $http) {
	$scope.getMovieTypeahead = function(val) {
		console.log("hello type ahead");
        return $http.jsonp('http://api.themoviedb.org/3/search/movie', {
			params: {
                api_key: '11897eb1c7662904ef04389140fb6638',
                query: val,
                search_type: 'ngram',
                rnd: Math.random(),   // prevent cache
                append_to_response: "id,credits,videos",
                //page: 1,
                callback: 'JSON_CALLBACK'
			}
		}).then(function(response) {
      return response.data.results.map(function(item){
        return item.title; // + ' - ' + item.release_date;
      });
	})
	}
});