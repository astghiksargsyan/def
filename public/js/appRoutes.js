angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/languages/english.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/en', {
            templateUrl: 'views/languages/english.html',
            controller: 'MainController'
        })

        .when('/ru', {
            templateUrl: 'views/languages/russian.html',
            controller: 'MainController'
            // controller: 'FormController'
        })
        .when('/arm', {
            templateUrl: 'views/languages/armenian.html',
            controller: 'MainController'
        })

        .otherwise({
            templateUrl: 'views/pageNotFound.html'
        });
    $locationProvider.html5Mode(true);

}]);