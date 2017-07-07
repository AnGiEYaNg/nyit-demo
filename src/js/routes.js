angular.module('main')
.config(function($breadcrumbProvider, $stateProvider){
	$breadcrumbProvider.setOptions({
      prefixStateName: 'home'
    });

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
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: 'Credits'
		}
	})
	.state({
		name: 'section',
		url: '/:section',
		templateUrl: 'section.html',
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: '{{sectionMap[stateParams.section].title}}'
		}
	})
	.state({
		name: 'section.subsection',
		url: '/:subsection',
		templateUrl: 'subsection.html',
		controller: 'mainCtrl',
		ncyBreadcrumb: {
			label: '{{subsectionMap[stateParams.subsection]}}'
		}
	})
	.state({
		name: 'section.subsection.type',
		url: '/:type',
		templateUrl: 'subsection.html',
		controller: 'mainCtrl'
	})
})