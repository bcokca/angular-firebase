/**
 * Created by burhan on 6/15/2014.
 */
'use strict'

angularFireApp
    .factory("chatService", ["$firebase", function($firebase) {

        var ref = new Firebase("https://boiling-fire-2567.firebaseio.com/chat");
        return $firebase(ref);

    }]);

