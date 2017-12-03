/* var taroCardsArray = ["image/tcards/00fool.jpg", "image/tcards/01magican.jpg", "image/tcards/02highpriestess.jpg",
    "image/tcards/03empress.jpg", "image/tcards/04emperor.jpg", "image/tcards/05hierophant.jpg", "image/tcards/06lovers.jpg",
    "image/tcards/07chariot.jpg", "image/tcards/08strength.jpg", "image/tcards/09hermit.jpg", "image/tcards/10wheeloffortune.jpg",
    "image/tcards/11justice.jpg", "image/tcards/12hangedman.jpg", "image/tcards/13death.jpg", "image/tcards/14temperance.jpg",
    "image/tcards/15devil.jpg", "image/tcards/16tower.jpg", "image/tcards/17star.jpg", "image/tcards/18moon.jpg",
    "image/tcards/19sun.jpg", "image/tcards/20judgement.jpg", "image/tcards/21world.jpg"]; */
/* var taroCardsArray = ["image/card/0.jpg", "image/card/1.jpg", "image/card/2.jpg",
    "image/card/3.jpg", "image/card/4.jpg", "image/card/5.jpg", "image/card/6.jpg", "image/card/7.jpg", "image/card/8.jpg",
    "image/card/9.jpg", "image/card/10.jpg", "image/card/11.jpg", "image/card/12.jpg", "image/card/13.jpg", "image/card/14.jpg",
    "image/card/15.jpg", "image/card/16.jpg", "image/card/18.jpg", "image/card/19.jpg", "image/card/20.jpg",
    "image/card/21.jpg", "image/card/22.jpg", "image/card/23.jpg", "image/card/24.jpg", "image/card/25.jpg", "image/card/26.jpg",
    "image/card/27.jpg", "image/card/28.jpg", "image/card/29.jpg", "image/card/30.jpg", "image/card/31.jpg", "image/card/32.jpg",
    "image/card/33.jpg", "image/card/34.jpg", "image/card/35.jpg", "image/card/36.jpg"];


console.log(taroCardsArray.length)
var prediction = [" Даря своей любимой букет из ромашек, пересчитайте все лепестки. Должно быть: любит! ",
    "Появится вдруг у тебя новый друг", "Будет у тебя всегда в доме вкусная еда", " Жди, не плача, придет к тебе удача",
    "Ждет тебя вскоре поездка на море", "Ожидая плохого события, не крутите пуговицу: она обязательно оторвется"
];
var descriptionText = document.getElementById("descriptionText");
var test1 = document.getElementById("test1");
var test2 = document.getElementById("test2");
var test3 = document.getElementById("test3");
var img1 = document.createElement("img");
var img2 = document.createElement("img");
var img3 = document.createElement("img");
var cardsProperties = document.getElementsByClassName("cardsProperties");
console.log(cardsProperties[0])

function costumChose(){
    var card1 = taroCardsArray[(Math.random()*taroCardsArray.length)|0];
    var card2 = taroCardsArray[(Math.random()*taroCardsArray.length)|0];
    var card3 = taroCardsArray[(Math.random()*taroCardsArray.length)|0];
    var description = prediction[(Math.random()*prediction.length)|0];

    img1.setAttribute("src", card1);
    img2.setAttribute("src", card2);
    img3.setAttribute("src", card3);

    img1.setAttribute("width", "200px");
    img1.setAttribute("height", "348px");
    img2.setAttribute("width", "200px");
    img2.setAttribute("height", "348px");
    img3.setAttribute("width", "200px");
    img3.setAttribute("height", "348px");
    test1.appendChild(img1);
    test2.appendChild(img2);
    test3.appendChild(img3);
    descriptionText.innerHTML=description;
}

var showInterpretation = document.getElementById("show-interpretation");
showInterpretation.addEventListener("click", costumChose);





*/
