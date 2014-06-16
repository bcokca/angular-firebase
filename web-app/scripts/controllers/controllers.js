angularFireApp.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope,
                                                      $http, loginService) {

    //firebase login with facebook
    //var ref = new Firebase('https://boiling-fire-2567.firebaseio.com');
    $rootScope.auth = loginService.getAuth();

    $scope.logout = function(){
        $rootScope.auth.$logout();
        $rootScope.auth.user = null;
        $location.path('/login');
    };

    $scope.login = function(provider){
        $rootScope.auth.$login(provider);

    }

});