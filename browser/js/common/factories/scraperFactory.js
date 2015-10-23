app.factory('ScraperFactory', function ($http) {
	return {
		scrapeUrl: function (projectInfo) {
			return $http.post('/api/scraper', projectInfo )
				.then(function (renderFields) {
					return renderFields.data
				})
		},
		populateUrl: function () {
			return $http.post('/api/scraper/populate')
				.then(function (response) {
					return response.data
				})
		}
	}
})