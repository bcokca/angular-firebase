/**
 * Created by burhan on 6/15/2014.
 */

angularFireApp.controller('ChatCtrl', function AppCtrl($scope, $location, $rootScope,chatService) {

    $scope.user = $rootScope.auth.user.displayName;
    $scope.messages = chatService;
    $scope.addMessage = function() {
        $scope.messages.$add({from: $scope.user, content: $scope.message});
        $scope.message = "";
    };

});
