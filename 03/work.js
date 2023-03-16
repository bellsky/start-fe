


//alert('alert');



//1번
//배열 평균 구하기

var count = [10,20,30,40,50,60,70,100];
var sum1, now1;
var avr = count.reduce((sum1,now1) => sum1 + now1 ) / (count.length);
console.log(avr);

var sum2 = 0;
function getavr(){
    for(i=0;i<count.length;i++){
        sum2 += count[i];
    }
    return sum2/count.length;
}
console.log(getavr());


//2번
//구구단을 출력하는 코드를 for구문을 사용하여 작성하세요

for(i=1;i<10;i++){
    for(j=1;j<10;j++){
        console.log(i + " * " + j + " = " + i*j);
    }
}

//3번
//위에서 만든 구구단코드를 함수로 작성하세요

function googoodan(){
    for(i=1;i<10;i++){
        for(j=1;j<10;j++){
            console.log(i + " * " + j + " = " + i*j);
        }
    }
}

//googoodan();


//4번
//메소드가 포함된 객체를 생성하세요

var sayHello = {
    name:  'bellsky',
    word: 'Hello, World!',
    say : function(){
        console.log("Hi "+sayHello.name + ", " + sayHello.word);
        console.log(this);
    }
};
sayHello.say();


//5번

var sum = 0;
var num = 0;;
function inputnum(){
    num = prompt('숫자를 입력하세요');
    console.log(num);
    if (isNaN(num)){
        alert('숫자가 아닙니다');
        //숫자가 아닐 경우 합산하지 않음.
    } else {
        //num에 연산을 가하여 숫자로 인식시킴.
        sum +=num*1;
    }
}

do{
    inputnum();
}while(num != null && num != "")
//취소를 누르거나 esc를 누르거나 공백인 채로 확인을 누르지 않으면 반복.

alert(sum);
//반복이 끝나면 sum을 출력.


