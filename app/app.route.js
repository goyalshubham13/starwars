(function(){
	angular.module ("com.starwars.app")
	.config(function($urlRouterProvider){
		$urlRouterProvider.otherwise("/login");
	});
})();