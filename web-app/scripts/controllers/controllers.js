angularFireApp.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope,
                                                      $http, $firebase, $firebaseSimpleLogin) {

    //firebase login with facebook
    var ref = new Firebase('https://boiling-fire-2567.firebaseio.com');
    $rootScope.auth = $firebaseSimpleLogin(ref);


});