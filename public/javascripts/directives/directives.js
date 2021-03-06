angular.module('MainApp.Directives', [])

.directive("typeaheadSearch", function(){
  return{
  restrict: 'E',
  templateUrl: '../../partials/typeahead-search'

  }
})

.directive("searchResults", function() {
  return {
    restrict: 'E',
    templateUrl: '../../partials/search-results'
  }
})

.directive("challengeSearch", function(){
  return {
    restrict: 'E',
    templateUrl: '../../partials/challenge-search',
    controller: 'typeaheadController'
  }
})

.directive("newChallengeButton", function() {
  return {
    restrict: 'E',
    templateUrl: '../../partials/new-challenge-button',
    controller: 'miscController'
  };
})

.directive("topTenList", function() {
  return {
    restrict: 'E',
    templateUrl: '../../partials/top-ten-list',
    controller: 'listController'
  };
})

.directive("challengePosters", function() {
  return {
    restrict: 'E',
    templateUrl: '../../partials/challenge-posters'
  }
})

.directive("mainSearch", function() {
  return {
    restrict: 'E',
    templateUrl: '../../partials/main-search',
    controller: 'searchController'
  }
});
