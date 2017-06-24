angular.module('main', ['ui.router', 'ngAnimate'])
.controller('imagesCtrl', function($anchorScroll, $scope, $timeout){
	$scope.credits = [
		'Helen Bayona',
		'Angel Chen',
		'Jin Du',
		'Maria L. Fazio',
		'Cong Ge',
		'Narin Gulec',
		'Jiaying He',
		'Theerawat (Tk) Khajornkhanphet',
		'Victoria Lasisi',
		'Nan Li',
		'Shuo (Sure) Li',
		'Liwen Liu',
		'Nina Mirhabibi',
		'Jiayue Qi',
		'Aisha Quershi',
		'Yu-Ta Shih',
		'Jia Wang',
		'Yuechao Xiong',
		'Dian (Sophia) Yang',
		'Liuyi Yang',
		'Xiaofei Zhang',
		'Jing Zou'
	];

	$timeout(function(){
		$anchorScroll();
	});
})
.component('workDemo', {
	templateUrl: 'work_demo.html',
	controller: function(){
		var self = this;
		self.images = [
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_003.png",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_004.png",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_005.jpg",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_005.png",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_008.jpg",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_008.png",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_011.png",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_013.png",
			"assets/BFA - All/Copy of COAS_FineArts_BFAStills_014.png"
		]

		self.showModal = false;
		self.currentDemoIndex = null;
		self.openModal = function(index){
			self.showModal = true;
			self.currentDemoIndex = index;
		}
		self.closeModal = function(){
			self.showModal = false;
			self.currentDemoIndex = null;
		}

	}
});
