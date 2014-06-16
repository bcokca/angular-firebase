/**
 * Created by burhan on 6/15/2014.
 */
'use strict'


//services come here
var fireBaseServices = angular.module('fireBaseServices', [], function($provide){

    $provide.factory("loginService", function($firebase, $firebaseSimpleLogin) {
        return {
            getAuth :  function(){
                var ref = new Firebase("https://" + firebase.url + ".firebaseio.com");
                return $firebaseSimpleLogin(ref);
            }
        };

    });

    $provide.factory("chatService", function($firebase) {

        var ref = new Firebase("https://" + firebase.url + ".firebaseio.com/chat");
        return $firebase(ref);

    });

});
