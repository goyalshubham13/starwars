<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="com.starwars.app" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="com.starwars.app" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="com.starwars.app" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" ng-app="com.starwars.app" class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <base href="/">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="assets/img/favicon.ico">

    <title>Starwars, From all SEVEN Star Wars films</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/app.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body ng-controller="BodyController">

    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                    aria-controls="navbar" ng-if="isLoggedin">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
                <a class="navbar-brand" href="#">Starwars</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse" ng-if="isLoggedin">
                
                <form class="navbar-form navbar-right">
                        <span style="color: white;margin-right: 20px;">Welcome {{name}}</span>
                    <button type="submit" class="btn btn-warning" ng-click="logout()">Sign Out</button>
                </form>
            </div>
            <!--/.navbar-collapse -->
        </div>
    </nav>

    <div class="progress" ng-show="loading" style="display:none;">
        <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0"
            aria-valuemax="100" style="width: 100%">
            <span class="sr-only">100% Complete</span>
        </div>
    </div>


    <div class="container">
        <!-- Example row of columns -->
        <div ui-view></div>

        <hr>

        <footer>
            <p>&copy; 2017 Starwars, Inc.</p>
        </footer>
    </div>
    <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/libs/jquery/dist/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="assets/libs/jquery/dist/jquery.min.js"><\/script>')
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="assets/js/ie10-viewport-bug-workaround.js"></script>

    <script src="assets/libs/angular/angular.min.js"></script>
    <script src="assets/libs/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="assets/libs/angular-ui-router/release/stateEvents.min.js"></script>
    <script src="assets/libs/angular-cookies/angular-cookies.min.js"></script>
    <script src="assets/libs/angular-messages/angular-messages.min.js"></script>

    <!-- app -->
    <script src="app/app.module.js"></script>
    <script src="app/app.route.js"></script>
    <!-- shared -->
    <script src="app/shared/net/http.service.js"></script>
    <script src="app/shared/constants/constants.module.js"></script>
    <script src="app/shared/constants/url.constants.js"></script>
    <script src="app/shared/filters/filters.module.js"></script>
    <script src="app/shared/filters/capitalize.filter.js"></script>
    <script src="app/shared/config/config.module.js"></script>
    <script src="app/shared/config/setting.config.js"></script>
    <script src="app/shared/config/factory.config.js"></script>s

    <!-- login -->
    <script src="app/components/login/login.module.js"></script>
    <script src="app/components/login/login.route.js"></script>
    <script src="app/components/login/login.controller.js"></script>
    <script src="app/components/login/login.service.js"></script>
    <!-- search -->
    <script src="app/components/search/search.module.js"></script>
    <script src="app/components/search/search.route.js"></script>
    <script src="app/components/search/search.controller.js"></script>
    <script src="app/components/search/search.service.js"></script>
</body>

</html>