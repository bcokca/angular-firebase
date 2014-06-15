angularFireApp.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $http, $firebase, $firebaseSimpleLogin) {

    //firebase logggin with facebook
    $scope.chatRef = new Firebase('https://boiling-fire-2567.firebaseio.com');
    $scope.auth = new FirebaseSimpleLogin($scope.chatRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
            console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
            $rootScope.currentUser = user;

            $location.path('/main');

        } else {
            // user is logged out
        }
    });

    $scope.loginUser = function(provider){
        $scope.auth.login(provider, {
            rememberMe: true,
            scope: 'email, user_likes'
        });
        console.log('user logged in');

    };

    $scope.logoutUser = function(){
        $scope.auth.logout();
        $location.path('/radio');
        console.log('user logout');
    };








});