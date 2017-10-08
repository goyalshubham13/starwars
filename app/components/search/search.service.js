(function () {
	angular.module("com.starwars.app.search")
		.service("searchService", SearchService);
	SearchService.$inject = ['Http', 'URL', '$q', '$rootScope'];

	function SearchService(Http, URL, $q, $rootScope, settingFactory, $cookies) {
		this.search = search;
		var canceller = $q.defer();

		function search(queryText) {	
			canceller.resolve ();
			canceller = $q.defer();
			if (!queryText || queryText == ''){
				$rootScope.loading = false;
				return canceller.promise;
			}
			return Http.get(URL.SEARCH + queryText, {timeout: canceller.promise});
		}
	}
})();