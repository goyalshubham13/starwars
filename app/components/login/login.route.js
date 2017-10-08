(function() {
	angular.module("com.starwars.app.login")
		.config(function($stateProvider) {
			$stateProvider
				.state('login', {
					url: "/login",
					templateUrl: "app/components/login/login.html",
					controller: "Login as login",
					controllerAs: "login"
				});
		});
})();