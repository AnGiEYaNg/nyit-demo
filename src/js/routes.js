angular.module('main')
.config(function($stateProvider){
	$stateProvider
	.state({
		name: 'home',
		url: '',
		templateUrl: 'homepage.html',
		data: {
			breadcrumb: 'Home'
		}
	})
	.state({
		name: 'mastersLanding',
		url: '/masters_of_fine_art',
		templateUrl: 'mastersLanding.html',
		data: {
			breadcrumb: 'Masters of Fine Art'
		}
	})
	.state({
		name: 'bachelorsLanding',
		url: '/bachelors_of_fine_art',
		templateUrl: 'bachelorsLanding.html',
		controller: 'bachelorsLandingCtrl',
		data: {
			breadcrumb: 'Bachelors of Fine Art'
		}
	})
	.state({
		name: 'subsection',
		url: '/:subsection',
		templateUrl: 'subsection.html',
	})
	.state({
		name: 'credits',
		url: '/credits',
		templateUrl: 'credits.html',
	})
})