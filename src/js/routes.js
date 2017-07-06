angular.module('main')
.config(function($stateProvider){
	$stateProvider
	.state({
		name: 'home',
		url: '',
		templateUrl: 'homepage.html',
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: 'Home'
		}
	})
	.state({
		name: 'section',
		url: '/:section',
		templateUrl: 'mastersLanding.html',
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: '{{section[stateParams.section].title}}'
		}
	})
	.state({
		name: 'section.subsection',
		url: '/:subsection',
		templateUrl: 'subsection.html',
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: '{{stateParams.subsection}}'
		}
	})
	.state({
		name: 'section.subsection.type',
		url: '/:type',
		templateUrl: 'subsection.html',
		controller: 'mainCtrl'
	})
	.state({
		name: 'credits',
		url: '/credits',
		templateUrl: 'credits.html',
		controller: 'mainCtrl'
	})
})