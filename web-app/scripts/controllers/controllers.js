angularFireApp.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $http, $firebase, $firebaseSimpleLogin) {


    $scope.getLinkedInData = function() {
		if(!$scope.hasOwnProperty("userprofile")){
			IN.API.Profile("me").fields(
					[ "id", "firstName", "lastName", "pictureUrl",
							"publicProfileUrl" ]).result(function(result) {
				// set the model
				$rootScope.$apply(function() {
					var userprofile =result.values[0]
					$rootScope.userprofile = userprofile;
					$rootScope.loggedUser = true;
			    	//go to main
					$location.path("/main");
				});
			}).error(function(err) {
				$scope.error = err;
			});
		}
	};
  //logout and go to login screen
	$scope.logoutLinkedIn = function() {
    //retrieve values from LinkedIn
		IN.User.logout();
		delete $rootScope.userprofile;
		$rootScope.loggedUser = false;
		$location.path("/login");
	};
    $scope.connections = [];


    $scope.getConns = function(){
        IN.API.Connections("me")
            .fields("id", "firstName", "lastName", "pictureUrl", "publicProfileUrl")
            .result(function(result, metadata) {
                $scope.connections = result.values;
                console.log('burhan', result.values);
            });
    }

    $scope.sendMessage = function(userID){

        var message = 'this is a test';
        var BODY = {
            "recipients":{
                "values":[{
                    "person":{
                        "_path":"/people/"+userID  //raci abi
                    }
                }]
            },
            "subject": "THIS IS A TEST FROM LINKEDIN API",
            "body":message
        };

        IN.API.Raw("/people/~/mailbox")
            .method("POST")
            .body(JSON.stringify(BODY))
            .result(function resultFn(result){console.log('result ', result)})
            .error(function error(e) {console.log("No Dice: ", e)});



    }

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