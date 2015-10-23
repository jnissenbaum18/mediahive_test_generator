app.directive('compile', function ($compile, $timeout) {
    return {
        restrict: 'A',
        link: function(scope,elem,attrs){
        	scope.$on("Render_ready", function () {
        		$timeout(function () {
        			$compile(elem.contents())(scope)
        		})
        	})
        }
    };
});