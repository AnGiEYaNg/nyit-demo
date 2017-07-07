angular.module('main', ['ui.router', 'ngAnimate', 'ncy-angular-breadcrumb'])
.controller('mainCtrl', function($anchorScroll, $scope, $timeout, assetsFactory, $state, $stateParams){
	$timeout(function(){
		$anchorScroll();
	});
	$scope.stateParams = $stateParams;
	$scope.currentState = $state.current;
	$scope.sectionMap = assetsFactory.sectionMap;
	$scope.subsectionMap = assetsFactory.subsectionMap;

	$scope.srcPrefix = 'src/';
	$scope.libPrefix = 'lib/';
	$scope.assetsPrefix = 'assets/';
	$scope.sectionPrefix = $scope.assetsPrefix + $stateParams.section+'/';
	$scope.subsectionPrefix = $scope.sectionPrefix + $scope.subsectionMap[$stateParams.subsection];
	$scope.credits = assetsFactory.credits;

	$scope.assetsData = {
		BFA: {
			animation: assetsFactory.BFA_animation,
			art_and_technology: assetsFactory.BFA_art_and_technology,
			graphic_design: assetsFactory.BFA_graphic_design
		},
		MFA: {
			animation: {
				animation: assetsFactory.MFA_animation_animation,
				concept_art: assetsFactory.MFA_animation_concept_art
			},
			art_and_technology: {
				art_and_technology: assetsFactory.MFA_art_and_technology_art_and_technology,
				animation: assetsFactory.MFA_art_and_technology_animation
			},
			graphic_design: {
				graphic_design: assetsFactory.MFA_graphic_design_graphic_design,
				animation: assetsFactory.MFA_graphic_design_animation
			}
		}
	}

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
});
