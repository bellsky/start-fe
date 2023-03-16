
console.log(
    "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ"
  );
  
//
//프리티어, 라이브서버 설치함
/*
const a = "a"
console.log(a);
a="1";
console.log(a);

*/

//var나 let을 잘 안쓰는 이유 = 기존 거 안건드리는 게 유행

//배열 CRUD

const todos = ['운동'];
const todo = '게임';
todos.push(todo);
console.log(todos);


todos.forEach(function (todo){
    console.log(todo);
});

const updateTodo = "공부";
const updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
});

todos[updateIndex] = '공부';
console.log(todos);

var newTodos = todos.map(function(todo) {
    if (todo === updateTodo) {
        return '공부';
    }
    return todo;
});

console.log(newTodos);

var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
    return todo !== deleteTodo;
});
console.log(newTodos);
 

//구문

//전역


if(isNaN('1')){ //is not a number  
    console.log("this is not a number");
}; //숫자 여부 
//'1' 은 스트링 값이지만 자동으로 숫자로 형변환시킴

alert('alert');

var who = prompt('당신은 누구세요?');

var isDelete = confirm('정말 삭제합니까?');

var enc = encodeURIComponent('카카오');
decodeURIComponent(enc);
parseInt('12');
parseInt('09', 10); //항상 두번째 인자 주는 습관
parseFloat('10.33');


//유효범위

var nick = 'bellsky'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age);
}

test();
console.log(age);

//함수

function sum(a, b) {
    return a + b;
  }
  sum(1, 3);