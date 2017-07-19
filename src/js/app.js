angular.module('main', ['ui.router', 'ngAnimate', 'ncy-angular-breadcrumb'])
.controller('mainCtrl', function($anchorScroll, $scope, $timeout, assetsFactory, $state, $stateParams){
	$scope.scrollTop = function(){
		$anchorScroll();
	}
	$timeout(function(){
		$scope.scrollTop();
	});
	if($stateParams.subsection){
		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    var oldState = $scope.showUpArrow;
		        if(scroll >150){
		            $scope.showUpArrow = true;
		        }else{
		            $scope.showUpArrow = false;
		        }
		        if($scope.showUpArrow !== oldState) {
		            $scope.$apply();
		        }
	    });
	}
	$scope.state = $state;
	$scope.stateParams = $stateParams;
	$scope.sectionMap = assetsFactory.sectionMap;
	// $scope.subsectionMap = assetsFactory.subsectionMap;

	$scope.srcPrefix = 'src/';
	$scope.libPrefix = 'lib/';
	$scope.assetsPrefix = 'assets/';
	$scope.sectionPrefix = $scope.assetsPrefix + $stateParams.section+'/';
	// $scope.subsectionPrefix = $scope.sectionPrefix + $scope.subsectionMap[$stateParams.subsection]+'/';
	$scope.credits = assetsFactory.credits;

	// $scope.MFADataMap = {
	// 	animation: Object.keys($scope.sectionMap.MFA.subTypes.animation),
	// 	art_and_technology: Object.keys($scope.sectionMap.MFA.subTypes.art_and_technology),
	// 	graphic_design: Object.keys($scope.sectionMap.MFA.subTypes.graphic_design)
	// }


	$scope.setDataDetail = function(subtype){
		var assetsDataParse = $stateParams.section+'_'+$stateParams.subsection;
		$scope.currentSubType = null
		$scope.assetsData = assetsFactory[assetsDataParse];
		$scope.finalPrefix = $scope.sectionPrefix;
		if($stateParams.subsection){
			$scope.finalPrefix += $scope.sectionMap[$stateParams.section].subsection[$stateParams.subsection].title + '/';
		}
		if($stateParams.section === 'MFA' && $stateParams.subsection === 'animation'){
			var defaultSubType = Object.keys($scope.sectionMap[$stateParams.section].subsection[$stateParams.subsection].subTypes);
			$scope.currentSubType = subtype?subtype:defaultSubType[0];
			$scope.assetsData = assetsFactory[assetsDataParse+'_'+$scope.currentSubType];
			$scope.finalPrefix += $scope.sectionMap.MFA.subsection[$stateParams.subsection].subTypes[$scope.currentSubType] +'/';
		}
		// console.log('data', $scope.assetsData);
		// console.log('currentSubType', $scope.currentSubType);
		// console.log('prefix', $scope.finalPrefix);
		return $scope.finalPrefix;
	}

	$scope.setDataDetail();

	$scope.showModal = false;
	$scope.currentDemoData = null;
	$scope.openModal = function(data){
		$scope.showModal = true;
		$scope.currentDemoData = data;
	}

	$scope.isArray = function(arr){
		return Array.isArray(arr);
	}
	$scope.closeModal = function(){
		$scope.showModal = false;
		$scope.currentDemoData = null;
	}

})
.component('lightbox', {
	templateUrl: 'lightbox.html',
	bindings: {
		innerDatas: '<',
		finalPrefix: '<',
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
