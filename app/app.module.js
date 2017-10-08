(function () {
    angular.module('com.starwars.app', [
            'ui.router',
            'ui.router.state.events',
            'ngCookies',
            'ngMessages',
            'com.starwars.app.constants',
            'com.starwars.app.config',
            'com.starwars.app.http',
            'com.starwars.app.filters',
            'com.starwars.app.login',
            'com.starwars.app.search'
        ])
        .config (function($locationProvider){
            $locationProvider.html5Mode(true);
        })
        .run(function ($rootScope, $cookies, $state) {
            angular.element (document.getElementsByClassName('progress')).css ('display', 'block');
            $rootScope.loading = false;

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                if (toState.name == 'login' && $rootScope.isLoggedin) {
                    event.preventDefault ();
                    $state.go ('search');
                } else if(toState.name != 'login' && !$rootScope.isLoggedin) {
                    event.preventDefault ();
                    $state.go ('login');
                }
            });
        })
        .controller('BodyController', function ($rootScope, $cookies, $scope, $state){
            $rootScope.isLoggedin = $cookies.get ('isLoggedin');
            $rootScope.name = $cookies.get ('name');
            $scope.logout = function () {
                $cookies.remove ('isLoggedin');
                $cookies.remove ('name');
                $rootScope.isLoggedin = false;
                $state.go ('login');
            };
        })
})();