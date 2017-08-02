// Add module here.
var app = angular.module('myModule');

// This is your service name. Do not alter any code from within this service.
app.factory('loginService', function($location) {

  var userObj = {};

  return {
    // These are your two methods.
    checkLogin: checkLogin,
    getProfile: getProfile
  }

  function checkLogin(userInfo) {
    var userList = [
      {
        username: 'indianajones',
        password: 'coolPassword',
        name: 'Indiana Jones',
        email: 'indianajones@gmail.com',
        img: '/images/indianajones.jpg',
        location: 'Portland, OR',
        phone: '333-333-5555'
      },
      {
        username: 'taylorswift',
        password: 'awesomePassword',
        name: 'Taylor Swift',
        email: 'tswift@gmail.com',
        img: '/images/taylorswift.jpg',
        location: 'Detroit, MI',
        phone: '222-444-6666'
      },
      {
        username: 'grantchirpus',
        password: 'greatPassword',
        name: 'Grant Chirpus',
        email: 'grantChirpus@gmail.com',
        img: '/images/grantchirpus.png',
        location: 'Detroit, MI',
        phone: '111-777-3333'
      }
    ];

    var p = new Promise(function(resolve, reject) {
      for(var i = 0; i < userList.length; i++) {
        console.log('loop');
        if(userInfo.username === userList[i].username && userInfo.password === userList[i].password) {
          resolve(userList[i]);
          break;
          console.log('true');
        }
      }
    });

    p.then(function(user) {
      userObj = user;
    });
    $location.path('/profile');
    return p;
  }

  function getProfile() {
    return userObj;
  }



});
