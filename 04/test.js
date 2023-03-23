

//템플릿 표현식
// http://start-fe.surge.sh/es/template.html


const title = 'jeju';
const url = 'https://daum.net/'+ title;
const url2 = 'https://daum.net/${title}';


//기본 매개변수 

function multiply(a, b = 1) { //-> 값 안줄 시 기본 매개변수 1을 넣음.
    return a * b;
  } 


  //화살표 함수
const result = [1,2,3].map(function (item) {
    return item + 1;
})

// =>

const result2 = [1, 2, 3].map(item => item +1 );


// 한줄일 때에는 리턴 생략 가능, 인자가 하나일 때에는 ( item ) 중괄호도 생략 가능.



//전개구문

function sum(x, y, z) {
    return x + y + z;
  }
const numbers = [1, 2, 3];

console.log(sum(...numbers));

const xyz = ['z', 'y', 'z'];
console.log(...xyz);

//함수 파라미터가 여러개일 때 유연하게 처리해준다.

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2);

// [1, 2, 3, 4, 5, 6, 7]

const obj = {
    a: 1,
    b: 2,
  };
  const newObj = { ...obj };
  console.log(newObj);


  //Rest 파라미터

  function func(...param) {
    console.log(param);
  }

  func(1, 2, 3);


  function foo() {
    console.log(arguments);
  }
  
  foo(1, 2, 3);



  //구조 분해 할당

  /*
var team = obj.team;
var area = obj.area;

var col1 = cols[0];
var col2 = cols[1];

const { team, area } = obj;
const [col1, col2] = cols;
const [, cols2] = cols;

function getArea(options) {
  return options.width * options.height;
}

function getArea({ width, height }) {
  return width * height;
}
*/

  //향상된 객체 리터럴


  const number = 1234;

const student = {
  // number: number
  number,
};
