(function () {
    angular.module("com.starwars.app.http", [])
        .service("Http", function ($http, $rootScope, $q, $state) {
            this.get = function (url, config) {
                $rootScope.loading = true;
                console.log ($rootScope.loading);
                var deferred = $q.defer();
                $http.get(url,
                    config).then(function (response) {
                    $rootScope.loading = false;
                    deferred.resolve(response.data);
                }, function (response) {
                    console.log ($rootScope.loading);
                    if (response.status == -1) {
                        console.log ('request cancelled');
                    } else {
                        $rootScope.loading = false;
                        alert("Something wrong happened at our side. Please try again or contact customer support if problem persist.");
                    }
                    deferred.reject(response);
                });
                return deferred.promise;
            };
        });
})();