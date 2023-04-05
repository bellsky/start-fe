console.log("05");

const wrap = document.getElementById('wrap');

console.log(wrap);
const item = document.querySelector('.itme');
console.log(item);
const elements =  document.querySelectorAll('div');
console.log(elements);



const div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";

document.body.appendChild(div);

//dom 삽입
// .appendChild()

// innerhtml


const text = '<span>hello</span>'; 
document.querySelector('#debug').innerHTML = text;


//.remove()
// .removeChild()

