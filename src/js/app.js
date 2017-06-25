angular.module('main', ['ui.router', 'ngAnimate'])
.factory('assetsFactory', function(){
	return {
		subSectionMap : {
			animation: 'Animation',
			art_and_technology: 'Art & Technology',
			graphic_design: 'Graphic Design' 
		},
		credits : [
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
		],
		bachelors_of_fine_art: [
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_003.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_004.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_005.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_005.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_007.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_008.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_008.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_011.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_013.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_014.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_015.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_016.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_016.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_017.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_017.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_018.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_019.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_019.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_020.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_020.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_021.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_023.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_024.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_026.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_027.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_028.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_029.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_029.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_030.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_031.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_032.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_033.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_034.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_035.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_036.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_037.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_038.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_040.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_041.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_043.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_045.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_046.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_047.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_049.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_050.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_050.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_051.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_051.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_056.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_057.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_057.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_058.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_060.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_062.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_063.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_064.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_066.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_067.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_071.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_072.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_073.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_074.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_077.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_080.jpg',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_083.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_087.png',
			'assets/BFA - All/Copy of COAS_FineArts_BFAStills_089.png'
		],
		animation: [
			'assets/MFA - Animation/Copy of 17_Nan LI_1051028.mp4',
			'assets/MFA - Animation/Copy of 40_The Story of Fairy_holding Skirt_Fs_DianYang.mp4',
			'assets/MFA - Animation/Copy of 41_SHANGHAI_JinDu.mp4',
			'assets/MFA - Animation/Copy of Liuyi Yang_Grounded.mp4'
		],
		art_and_technology: [
			"assets/MFA - Art & Technology/Copy of 3d print.jpg",
			// "assets/MFA - Art & Technology/Copy of 41_zoedream.mov",
			[
				"assets/MFA - Art & Technology/Copy of Nina Mirhabib 1.jpg",
				"assets/MFA - Art & Technology/Copy of Nina Mirhabib 5.jpg",
			],
			// [
				// "assets/MFA - Art & Technology/Copy of Nina Mirhabib 3.tif",
				// "assets/MFA - Art & Technology/Copy of Nina Mirhabib 4.tif",
			// ],
			[
				"assets/MFA - Art & Technology/Copy of Nina Mirhabib 2.jpg",
				"assets/MFA - Art & Technology/Copy of Nina Mirhabib 6.jpg",
				"assets/MFA - Art & Technology/Copy of Nina Mirhabib 7.jpg"
			]
		],
		graphic_design: [
			"assets/MFA - Graphic Design/Copy of AishaQuershi_LunchPacks2.jpg",
			// "assets/MFA - Graphic Design/Copy of final.mov",
			"assets/MFA - Graphic Design/Copy of JiayingHe1 COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of JiayingHe2 COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of JiayingHe3 COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of JiayingHe4 COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of jingzou COLLINS.jpg",
			// "assets/MFA - Graphic Design/Copy of Laila Gallery 11flr.pdf",
			"assets/MFA - Graphic Design/Copy of LiuyiYang_concept1 E COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of LiuyiYang_concept2.jpg",
			"assets/MFA - Graphic Design/Copy of LiuyiYang_concept3 E COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of LiwenLiu E COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of LiwenLiu1-3 E COLLINS.jpg",
			"assets/MFA - Graphic Design/Copy of LiwenLiu3.jpg",
			"assets/MFA - Graphic Design/Copy of MariaFazio_VecoredPlainCaligraphy.jpg",
			"assets/MFA - Graphic Design/Copy of NarinGulec_TryingRoom_Dress.jpg",
			"assets/MFA - Graphic Design/Copy of NarinGulec_TryingRoom_DressSelection.jpg",
			// "assets/MFA - Graphic Design/Copy of Pin.mp4",
			"assets/MFA - Graphic Design/Copy of XiaofeiZhang.jpg"
		]

	}
})
.controller('imagesCtrl', function($anchorScroll, $scope, $timeout, assetsFactory, $stateParams){
	$scope.credits = assetsFactory.credits;
	$scope.subSectionMap=assetsFactory.subSectionMap;
	$scope.subSectionImg={
		animation: 'assets/MFA - Animation/Concept Art/Copy of MILKYWAY06.jpg',
		art_and_technology: 'assets/MFA - Art & Technology/Copy of 3d print.jpg',
		graphic_design: "assets/MFA - Graphic Design/Copy of jingzou COLLINS.jpg"
	};
	$scope.bachelors_of_fine_art = assetsFactory.bachelors_of_fine_art;
	$scope.currentSection = $stateParams.subsection;
	$scope.subsectionData = assetsFactory[$scope.currentSection];
	$timeout(function(){
		$anchorScroll();
	});
})
.controller('modalCtrl', function(){
	var self = this;
	self.showModal = false;
	self.currentDemoIndex = null;
	self.openModal = function(index){
		self.showModal = true;
		self.currentDemoIndex = index;
	}

	self.isArray = function(arr){
		return Array.isArray(arr);
	}
	self.closeModal = function(){
		self.showModal = false;
		self.currentDemoIndex = null;
	}
})
.component('workDemo', {
	templateUrl: 'work_demo.html',
	bindings: {
		datas: '='
	},
	controller: 'modalCtrl'
})
.component('videoDemo', {
	templateUrl: 'video_demo.html',
	bindings: {
		datas: '='
	},
	controller: 'modalCtrl'
})
.component('lightbox', {
	templateUrl: 'lightbox.html',
	bindings: {
		innerDatas: '='
	},
	controller: function($animate, $scope, $timeout){
		var self = this;
		self.currentInnerIndex = 0;
		self.animateFade = false;
		self.prev = function(){
			if(self.currentInnerIndex === 0) self.currentInnerIndex = self.innerDatas.length-1;
			else self.currentInnerIndex--;
		}
		self.next = function(){
			if(self.currentInnerIndex === self.innerDatas.length - 1) return self.currentInnerIndex = 0;
			else return self.currentInnerIndex++;
		}
		$scope.$watch('$ctrl.currentInnerIndex', function(){
			// var element = angular.element('.lightbox_img')[0];
			// console.log('element', element);
			self.animateFade = true;
			$timeout(function(){
				self.animateFade = false;
			}, 200);
		})
	}
})
.animation('.lightbox_img', function($animateCss) {
  return {
  	enter: function(element, doneFn) {
		jQuery(element).fadeIn(200, doneFn);
    },
    leave: function(element, doneFn) {
        jQuery(element).fadeOut(200, doneFn);
    }
  }
});;
