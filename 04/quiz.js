////문제 20개

//1.문자열 합치기

const year = 2022;
const month = 11;
let day = 3;
let days;
// quiz
if(day<10&&day>0){
    days = '0'+day;
}else {
    days = day;
    
}
const dateString =(year + '-' + month + '-' + days);

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
//원시타입 = string, number, bigint, boolean, undefined, symbol
//filter 사용
// quiz
function onesi(inputs){
    if (typeof inputs == "bigint" ||
    typeof inputs == "string" ||
    typeof inputs == "number" ||
    typeof inputs == "boolean" ||
    typeof inputs == "undefined" ||
    typeof inputs == "symbol"){
        return true;
    }
    else return false;
}

var opitems = items.filter(function(yoso){
    return onesi(yoso) ? true : false;
});

console.log(opitems);
// 출력: [1,'a',true]





//11.배열값 나누기
const items2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;
const pad = '---';
const result2 = [];
items2.forEach((items2, index) => {
    const isPAD = index%pageSize===0 && index > 0;
    if(isPAD){
        result2.push(pad);
    }
    result2.push(items2);
});

const str2 = result2.join(',');

const str3 = str2.replace(/,---,/g, pad);

// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함

// 출력: a,b,c---d,e,f---g,h,i---j
console.log(str3);



//12.배열값 나눠서 다시 배열로
const items12 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize12 = 3;
// quiz
// pageSize에 따라 배열값 분리해서 출력

const result12 = [];
items12.forEach((item12, index) => {
    const isPAGE = index%pageSize12===0 && index >= 0;
    if (isPAGE){
        result12.push(items12.slice(index, index+pageSize12));
    }
});

console.log(result12);
// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]



//13.페이지의 시작번호 구하기
const items13 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize13 = 3;
const pgindex = [];
items13.forEach((item12, index) => {
    const isPAGE = index%pageSize===0 && index >= 0;
    if(isPAGE){
        pgindex.push(index);
    }
});
const getStartIndexByPage = function (page) {
  // quiz
  console.log(pgindex[page-1]);
};

// 출력
getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6



//14.전화번호 패턴 검사
const phoneNumber = `010-1234-1234`;
//정규 표현식 문제
// quiz
// xxx-xxxx-xxxx 패턴찾기

const findpn = /\d{3}-\d{4}-\d{4}/;

console.log(findpn.test(phoneNumber));
// 출력: true



//15.객체값 변경
const user = { nick: "nio", age: 20, location: "제주" };

// quiz

user["name"] = '부산';
user["age"] = '21';
delete user.location;

// 출력: {nick:'nio', age:21, name:'부산'}
console.log(user);



//16.문자열을 객체형으로
//JSON.parse 함수 사용?
const text16 = "{a:1, b:2}";

// quiz

const toObj = text16;

console.log(toObj);

// 출력: {a:1 , b:2}


//17.json을 문자열로
const user17 = { nick: "nio", age: 20, location: "제주" };

// quiz
const toSTR = JSON.stringify(user17);
// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"

console.log(toSTR);


//18. 새로운 배열 생성
const items18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// quiz


const items182 = items18.filter(item18 => item18%2==0);

// 출력: 짝수만 [2,4,6,8,10]

console.log(items182);



//19. 배열 필터
const list19 = [
    {
      id: 1,
      title: "JS",
      isPublic: true,
    },
    {
      id: 2,
      title: "기본",
      isPublic: true,
    },
    {
      id: 3,
      title: "ecma",
      isPublic: true,
    },
    {
      id: 4,
      title: "dom",
      isPublic: false,
    },
  ];
  
  // quiz

  const title19 =[];
  for (var t19 of list19){
    if (t19.isPublic == true){
        title19.push(t19.title);
    }
  }

  // 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기
  console.log(title19);


  //20.다음일 구하기
  const dday = "2022-02-02";

  // quiz
    
 const yymmdd = dday.split('-');
 const yy = yymmdd[0];
 const mm = yymmdd[1];
 const dd = yymmdd[2]; 
  // 출력: '2022-02-03'

  console.log(dd);