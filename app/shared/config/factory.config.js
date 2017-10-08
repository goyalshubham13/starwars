(function () {
    angular.module("com.starwars.app.config")
        .service("settingFactory", function (SETTING, $cookies) {
            this.getLimit = function (username) {
                if (SETTING.LIMIT_PER_MIN[username]) {
                    return SETTING.LIMIT_PER_MIN[username];
                } else {
                    return SETTING.DEFAULT_LIMIT;
                }
            };

            this.getSavedLimit = function () {
                return JSON.parse ($cookies.get('limit'));
            }
            this.saveLimit = function (limitObj) {
                $cookies.put ('limit', JSON.stringify(limitObj));
            }
        });
})();