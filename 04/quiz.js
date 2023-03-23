////문제 20개

//1.문자열 합치기

const year = 2022;
const month = 11;
const day = 3;

// quiz

const dateString =(year + '-' + month + '-' + day);

// 출력: 2022-12-03
console.log(dateString);


//2.문자열 분리
const dateString2 = "2022-12-12";
// quiz

const ds = dateString2.split('-');

// 출력: [2022,12,12];
console.log(ds);



//3.문자열 변경
const text = "나는 XX를 좋아해";
const item = "JS";

// quiz
const rp = text.replace('XX','JS');

// 출력: 나는 JS를 좋아해
console.log(rp);

//4.문자열 검색
const text2 = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

// quiz

if(text2.indexOf(searchText)=='-1'){
    console.log('false');
}else console.log('true');

// 출력: true


//5.모든 배열값 더하기
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

const add = arr => arr.reduce((a, b) => a + b, 0);
function points(...point){
    const arr = [].concat(...point);
    const psum = add(arr);
    console.log(psum);
}
// quiz
// point3이 생길수도 있을때 대응

// 출력: 373 (모든 배열값들이 합)
points(point1, point2);

const point3 = [1, 2, 4];
points(point1, point2, point3);



//6.소수점이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;

// quiz
function naerim(...sootja){
    const sum = add(sootja);
    console.log(Math.floor(sum));
}
// 출력: 4
naerim(a,b);


//7.랜덤수 구하기
const min = 1;
const max = 10;

// quiz

//출력: 3 (1~10 포함한 랜덤수)

console.log(Math.floor(Math.random() * 10));

//8.배수 확인
const target = 10;
const num = 3;

// quiz
// target이 num이 배수인지

if(target%num ==0) console.log('true'); else console.log('false');

// 출력: false


//9.대문자로 변경

const nick = "kakao";

// quiz

// 출력: KAKAO
console.log(nick.toUpperCase());

//10.원시타입 요소만 배열로 만들기
const items = [1, "a", true, ["a"], { n: 1 }];

// quiz

// 출력: [1,'a',true]