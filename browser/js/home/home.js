app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    });
});

app.controller('homeCtrl', function ($scope, $sce, ScraperFactory, $timeout, $q) {

	$scope.projectInfo = {
		url: 'https://www.google.com/'
	}

	$scope.populateUrl = function () {

		var wnd = window.open('https://www.google.com')
		wnd.document.onload = function () {
			console.log(wnd.document.getElementsByTagName('input'))
		}

		// var openWindow = function () {
		// 	return $q(function (resolve, reject) {
		// 		window.open('https://www.google.com')
		// 		window.document.onload = function () {

		// 		}
		// 	})
		// }

		// openWindow().then(function (wnd) {
		// 	console.log(wnd.document)
		// 	var inputs = wnd.document.getElementsByTagName('input')
		// 	console.log(inputs)
		// })

	}

	$scope.scrapeUrl = function (projectInfo) {
		ScraperFactory.scrapeUrl(projectInfo).then(function (renderFields) {
			$scope.renderHtml = $sce.trustAsHtml(renderFields.html);
			for (var i = 0; i <= renderFields.inputCount; i++) {
				projectInfo[i] = ''
			}
			return 
		}).then(function () {
			$scope.$broadcast("Render_ready")
		})
	}
});
