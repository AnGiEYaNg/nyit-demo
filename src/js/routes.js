angular.module('main')
.config(function($stateProvider){
	$stateProvider
	.state({
		name: 'home',
		url: '',
		templateUrl: 'homepage.html',
		controller: 'imagesCtrl',
		data: {
			breadcrumb: 'Home'
		}
	})
	.state({
		name: 'mastersLanding',
		url: '/masters_of_fine_art',
		templateUrl: 'mastersLanding.html',
		controller: 'imagesCtrl',
		data: {
			breadcrumb: 'Masters of Fine Art'
		}
	})
	.state({
		name: 'bachelorsLanding',
		url: '/bachelors_of_fine_art',
		templateUrl: 'bachelorsLanding.html',
		controller: 'imagesCtrl',
		data: {
			breadcrumb: 'Bachelors of Fine Art'
		}
	})
	.state({
		name: 'subsection',
		url: '/:subsection',
		templateUrl: 'subsection.html',
		controller: 'imagesCtrl',
	})
	.state({
		name: 'credits',
		url: '/credits',
		templateUrl: 'credits.html',
		controller: 'imagesCtrl',
	})
})