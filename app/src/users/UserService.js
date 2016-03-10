(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: "Wayne's World",
        ytId: 'OIuhsHpcNAU',
        imdbID: 'tt0105793'
      },
      {
        name: "Moonrise Kingdom",
        ytId: '7N8wkVA4_8s',
        imdbID: 'tt1748122'
      },
      {
        name: "Into The Wild",
        ytId: '2LAuzT_x8Ek',
        imdbID: 'tt0758758'
      },
      {
        name: "Waking Life",
        ytId: 'RItiQgOzur0',
        imdbID: 'tt0243017'
      },
      {
        name: "Ex Machina",
        ytId: 'XYGzRB4Pnq8',
        imdbID: 'tt0470752'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
