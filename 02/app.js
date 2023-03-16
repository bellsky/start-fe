console.log(
  "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ"
);

//변수 선언

/*
ㅁㄴㅇㄹ
ㅁㄴㅇㄹ
ㅁㄴㅇㄹ
ㅁㄴㅇㄹ
*/

var name1 = "abc";
console.log(name1);

var image = {};

image.width = 0.5;
image.height = 70;

//var datatype

//number
var count = 5;
console.log(count);
//char
var count = "9";
console.log(count);
var ct = "999";

//큰작은 따움표 노상관

var nick = "bellsky";
var isMan = true;

var log = function (str) {
  console.log(str);
};

log(nick);

var image = {};

image.width = 100;
image.height = 100;

console.log(image);

//image['width'] = 1; //연관배열

//image['name' + i] = '1.jpg'; //동적으로도 할당 가능

var image = ["1.jpg", "2.jpg", 2, 3, true];

console.log(image);

image[0] = "3.jpg";
image[6] = "4.jpg";
console.log(image);

var nick = "";
var title = -1;
var abc = true;
var amuguarna = null;

var what;
console.log(what); //undefined

//주요연산자
//operator

// === , !==  -> 데이터 타입까지 비교. 두개짜리는 값만을 비교

console.log(2 + 4);

console.log(true * false);

if (true && true === true) {
  console.log("당연히참");
}

console.log(!true);

if ("a") console.log(true);

var nick = "bellsky";

if (nick) console.log("hi!" + nick);

var isNick = !!nick;
console.log(isNick);

//OBJECT

/*
obj.constructor == Object;

console.log(obj.hasOwnProperty('nick'));

alert(obj);

*/

//array

var arr = [1, 2, 3];
var arr = new Array(1, 2, 3);
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
