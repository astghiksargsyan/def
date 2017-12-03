angular.module('MainCtrl', []).controller('MainController', function($scope) {
    $scope.showInterpretation = true;
    $scope.cardBlock = false;
    $scope.showFunc = function () {
        $scope.cardBlock = true;
        $scope.showInterpretation = false;
    };
    $scope.taroCardsArray = ["image/card/0.jpg", "image/card/1.jpg", "image/card/2.jpg",
        "image/card/3.jpg", "image/card/4.jpg", "image/card/5.jpg", "image/card/6.jpg", "image/card/7.jpg", "image/card/8.jpg",
        "image/card/9.jpg", "image/card/10.jpg", "image/card/11.jpg", "image/card/12.jpg", "image/card/13.jpg", "image/card/14.jpg",
        "image/card/15.jpg", "image/card/16.jpg", "image/card/18.jpg", "image/card/19.jpg", "image/card/20.jpg",
        "image/card/21.jpg", "image/card/22.jpg", "image/card/23.jpg", "image/card/24.jpg", "image/card/25.jpg", "image/card/26.jpg",
        "image/card/27.jpg", "image/card/28.jpg", "image/card/29.jpg", "image/card/30.jpg", "image/card/31.jpg", "image/card/32.jpg",
        "image/card/33.jpg", "image/card/34.jpg", "image/card/35.jpg","image/card/36.jpg", "image/1.png", "image/2.png", "image/3.png",
         "image/4.png"];


    console.log( $scope.taroCardsArray.length);
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