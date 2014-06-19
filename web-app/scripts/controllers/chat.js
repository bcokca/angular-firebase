/**
 * Created by burhan on 6/15/2014.
 */

angularFireApp.controller('ChatCtrl', function AppCtrl($scope, $location, $rootScope,chatService) {

    $scope.user = $rootScope.auth.user.displayName;
    if($rootScope.auth.user.provider == 'twitter');{
        $scope.image_url = $rootScope.auth.user.thirdPartyUserData.profile_image_url;
    }
    $scope.messages = chatService;
    $scope.addMessage = function() {
        $scope.messages.$add({from: $scope.user, content: $scope.message, img_url: $scope.image_url});
        $scope.message = "";
    };

});
