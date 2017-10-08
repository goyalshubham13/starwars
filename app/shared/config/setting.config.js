(function(){
	angular.module ("com.starwars.app.config")
	.constant("SETTING", (function() {
		return {
            "LIMIT_PER_MIN": {
                "Luke Skywalker":2,
                "C-3PO":20
            },
            "DEFAULT_LIMIT":15
		};
	})());
})();