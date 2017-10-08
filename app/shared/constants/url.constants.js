(function(){
	angular.module ("com.starwars.app.constants")
	.constant("URL", (function() {
		var BASE_URL = "https://swapi.co/api/";
		return {
            "LOGIN": BASE_URL + "people/?search=",
            "SEARCH": BASE_URL + "planets/?search="
		};
	})());
})();