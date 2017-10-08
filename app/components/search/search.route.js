(function() {
	angular.module("com.starwars.app.search")
		.config(function($stateProvider) {
			$stateProvider
				.state('search', {
					url: "/search",
					templateUrl: "app/components/search/search.html",
					controller: "Search as search",
					controllerAs: "search"
				});
		});
})();