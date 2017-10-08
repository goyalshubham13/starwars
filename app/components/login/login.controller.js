(function () {
    angular.module('com.starwars.app.login')
        .controller('Login', LoginController);
    LoginController.$inject = ['loginService', '$cookies', '$state', '$scope', '$rootScope'];

    function LoginController(loginService, $cookies, $state, $scope, $rootScope) {
        var vm = this;
        vm.form = {};

        this.doLogin = doLogin;

        function doLogin(loginform) {
            angular.forEach(loginform.$error, function (fields) {
                angular.forEach(fields, function (field) {
                    if (field) field.$setTouched();
                });
            });
            if (loginform.$invalid) {
                return;
            }
            loginService.login (vm.form.username).then (function(data){
                console.log (data);
                if (data.count == 0) {
                    vm.message = "Username does not exist. Please try with another one.";
                } else if (data.count == 1) {
                    if (data.results[0].name == vm.form.username && data.results[0].birth_year == vm.form.password) {
                        $cookies.put ('isLoggedin', true);
                        $cookies.put ('name', data.results[0].name);
                        $rootScope.isLoggedin = true;
                        $state.go ('search');
                    } else {
                        vm.message = "Password does not match with the username. Please enter carefully.";
                    }
                }
            });
        }

    }
})();