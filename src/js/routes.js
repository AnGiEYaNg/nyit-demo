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
		name: 'credits',
		url: '/credits',
		templateUrl: 'credits.html',
		controller: 'mainCtrl'
	})
	.state({
		name: 'content',
		templateUrl: 'breadcrumb.html',
		controller: 'mainCtrl'
	})
	.state({
		name: 'content.section',
		url: '/:section',
		templateUrl: 'section.html',
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: '{{section[stateParams.section].title}}'
		}
	})
	.state({
		name: 'content.section.subsection',
		url: '/:subsection',
		templateUrl: 'subsection.html',
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: '{{stateParams.subsection}}'
		}
	})
	.state({
		name: 'content.section.subsection.type',
		url: '/:type',
		templateUrl: 'subsection.html',
		controller: 'mainCtrl'
	})
})