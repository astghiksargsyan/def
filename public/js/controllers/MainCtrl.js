angular.module('MainCtrl', []).controller('MainController', function($scope) {
    $scope.showInterpretation = true;
    $scope.cardBlock = false;
    $scope.showFunc = function () {
        $scope.cardBlock = true;
        $scope.showInterpretation = false;
    };
    $scope.cardsShowHide = function(){
        $scope.hideCard = true;
        $scope.showCard = true;
    }
    $scope.taroCardsArray = ["image/card/finaldesign/1.png", "image/card/finaldesign/2.png", "image/card/finaldesign/3.png",
        "image/card/finaldesign/4.png", "image/card/finaldesign/5.png", "image/card/finaldesign/6.png",
        "image/card/finaldesign/7.png", "image/card/finaldesign/8.png", "image/card/finaldesign/9.png",
        "image/card/finaldesign/10.png", "image/card/finaldesign/11.png", "image/card/finaldesign/12.png",
        "image/card/finaldesign/13.png", "image/card/finaldesign/14.png", "image/card/finaldesign/15.png",
        "image/card/finaldesign/16.png", "image/card/finaldesign/17.png", "image/card/finaldesign/18.png",
        "image/card/finaldesign/19.png", "image/card/finaldesign/20.png", "image/card/finaldesign/21.png",
        "image/card/finaldesign/22.png", "image/card/finaldesign/23.png", "image/card/finaldesign/24.png", 
        "image/card/finaldesign/25.png", "image/card/finaldesign/26.png", "image/card/finaldesign/27.png",
        "image/card/finaldesign/28.png", "image/card/finaldesign/29.png", "image/card/finaldesign/30.png",
        "image/card/finaldesign/31.png", "image/card/finaldesign/32.png", "image/card/finaldesign/33.png",
        "image/card/finaldesign/34.png", "image/card/finaldesign/35.png", "image/card/finaldesign/36.png"];


   // console.log( $scope.taroCardsArray.length);
    $scope.prediction = [" Даря своей любимой букет из ромашек, пересчитайте все лепестки. Должно быть: любит! ",
        "Появится вдруг у тебя новый друг", "Будет у тебя всегда в доме вкусная еда", " Жди, не плача, придет к тебе удача",
        "Ждет тебя вскоре поездка на море", "Ожидая плохого события, не крутите пуговицу: она обязательно оторвется"
    ];
    $scope.costumChose = function () {
        $scope.myImgUrl1 =  $scope.taroCardsArray[(Math.random()*$scope.taroCardsArray.length)|0];
        $scope.myImgUrl2 =  $scope.taroCardsArray[(Math.random()*$scope.taroCardsArray.length)|0];
        $scope.myImgUrl3 =  $scope.taroCardsArray[(Math.random()*$scope.taroCardsArray.length)|0];
        $scope.pressitionText = $scope.prediction[(Math.random()*$scope.prediction.length)|0];
    }
});