(function() {
	angular.module("com.starwars.app.login")
		.service("loginService", LoginService);
	LoginService.$inject = ['Http', 'URL'];

	function LoginService(Http, URL) {
		this.login = doLogin;
		
		function doLogin (username) {
			return Http.get (URL.LOGIN + username);
		}
	}
})();