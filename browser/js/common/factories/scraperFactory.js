app.factory('ScraperFactory', function ($http) {
	return {
		scrapeUrl: function () {
			return $http.get('/api/scraper')
				.then(function (response) {
					return response.data
				})
		}
	}
})