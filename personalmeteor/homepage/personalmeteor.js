



if (Meteor.isClient) {


  var Router = Backbone.Router.extend({
  routes: {
    "":                 "main", //this will be http://your_domain/
    "yms":             "yms",  // http://your_domain/yms
    ':fourOfour':      "fof"//404 page
  },

  main: function() {
    // Your homepage code
    Session.set('currentPage', 'home');
  },
  yms: function() {
    Session.set('currentPage', 'yms');// Your Meal Swipe page
  },
  fof: function() {
  	Session.set('currentPage', 'fof');//404 page
  }
});

var app = new Router;
Backbone.history.start({pushState: true});


Template.home.showHome= function(){
	return Session.get('currentPage') == 'home';
} // shows home routing

Template.home.showYms= function(){
	return Session.get('currentPage') == 'yms';
} // shows home routing


  Template.hello.greeting = function () {
    return "Welcome to personalmeteor.";
  };


  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    // code to run on server at startup
  });
}
