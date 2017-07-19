angular.module('main')
.config(function($breadcrumbProvider, $stateProvider){
	$breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      templateUrl: 'breadcrumb.html'
    });

	$stateProvider
	.state({
		name: 'home',
		url: '',
		views: {
			'main@':{
				templateUrl: 'homepage.html',
				controller: 'mainCtrl',
			}
		},
		ncyBreadcrumb: {
			label: 'Home'
		}
	})
	.state({
		name: 'credits',
		url: '/credits',
		views: {
			'main@':{
				templateUrl: 'credits.html',
				controller: 'mainCtrl',
			}
		},
		ncyBreadcrumb: {
			label: 'Credits'
		}
	})
	.state({
		name: 'section',
		url: '/:section',
		views: {
			'main@':{
				templateUrl: 'section.html',
				controller: 'mainCtrl',
			}
		},
		ncyBreadcrumb: {
			label: '{{sectionMap[stateParams.section].title}}'
		}
	})
	.state({
		name: 'section.subsection',
		url: '/:subsection',
		views: {
			'main@':{
				templateUrl: 'subsection.html',
				controller: 'mainCtrl',
			}
		},
		ncyBreadcrumb: {
			label: '{{sectionMap[stateParams.section].subsection[stateParams.subsection].title}}'
		}
	})
})