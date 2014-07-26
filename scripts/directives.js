'use strict';

/**
 * Creates leftnav as a directive, HTML tag. Potential use is seen in 
 * development for different sized devices which could require for easier
 * access to the navigation code. So if you want the  menu buttons, simply call
 * <buttons></buttons>
 */
app.directive('buttons', function(){ //the 'leftnav' here is the name of the tag we're making <leftnav>
	return{
		restrict: 'E', //allows us to make elements (tags)
		templateUrl: "views/templates/buttons.html",
		scope: true
/*from stackoverflow regarding templateURL: 
the url with "/" prefix is relative to the domain, without the "/" prefix it will be
relative to the main ("index.html") page or base url (if you use location in the html5 mode)*/
	};
});

app.directive('timeSelect', function(){ //the 'leftnav' here is the name of the tag we're making <leftnav>
	return{
		restrict: 'E', //allows us to make elements (tags)
		templateUrl: "views/templates/time-select.html",
		scope: true,
		controller: "TimeController"
		
	};
});