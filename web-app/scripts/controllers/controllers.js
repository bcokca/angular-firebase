angularFireApp.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope,
                                                      $http, $firebase, $firebaseSimpleLogin) {

    //firebase logggin with facebook
    var ref = new Firebase('https://boiling-fire-2567.firebaseio.com');
    $scope.auth = $firebaseSimpleLogin(ref);


});