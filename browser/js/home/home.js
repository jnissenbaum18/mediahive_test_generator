app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    });
});

app.controller('homeCtrl', function ($scope, ScraperFactory) {

	// http://www.imdb.com/title/tt1229340/

	$scope.projectInfo = {
		url: ''
	}

	$scope.scrapeUrl = function (projectInfo) {
		ScraperFactory.scrapeUrl(projectInfo).then(function (inputFields) {
			$scope.inputFields = inputFields
		})
	}

	

});