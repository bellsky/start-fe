//배열 메소드

var words = ["a", "b", "c"];
console.log(words.pop());

// return  [c]

words.push("d");

console.log(words);
console.log(words.join(" and "));
console.log(words);

var num = [1, 2, 3];

console.log(words.concat(num)); // -> pop push와 달리 원 변수가 변하지 않는다.
console.log(words);

//unshift
//새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환

const newwords = words;
console.log(newwords);
console.log(newwords.unshift("z"));
console.log(newwords);

//shift
//배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
console.log(words.splice(0, 1));
console.log(words);

//slice
//배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
var words1 = ["a", "b", "c"];
console.log(words1.slice(2));
console.log(words1);

//foreach
var words = ["a", "b", "c"];
words.forEach(function (word) {
  console.log(word);
});

//map
//모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

var words = ["a", "b", "c"];
var newWords1 = words.map(function (word) {
  return word + " ok";
});
console.log(newWords1);

//filter
//주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

var nums = [1, 2, 3, 4, 5];
var newNums = [];
// for (var i = 0; i< nums.length; i++){
//     if(nums[i] <=3){
//         newNums.push(nums[i]);
//     }
// }
// console.log(newNums);

//필터 넣고 .으로 조건 연결 가능
var newNums = nums
  .filter(function (num) {
    return num >= 3;
  })
  .map(function (num) {
    return num + 10;
  });

console.log(newNums);
