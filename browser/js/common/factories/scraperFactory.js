app.factory('ScraperFactory', function ($http) {
	return {
		scrapeUrl: function (projectInfo) {
			return $http.post('/api/scraper', projectInfo )
				.then(function (inputFields) {
					return inputFields.data
				})
		}
	}
})