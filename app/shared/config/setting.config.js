(function(){
	angular.module ("com.starwars.app.config")
	.constant("SETTING", (function() {
		return {
            "LIMIT_PER_MIN": {
                "Luke Skywalker":-1,
                "C-3PO":5
            },
            "DEFAULT_LIMIT":15
		};
	})());
})();