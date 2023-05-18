
// openModal 함수
export function openModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'flex';
  }
  
  // closeModal 함수
  function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
  
  // 스타일 요소 생성
  var styleElement = document.createElement('style');
  styleElement.innerHTML = modalStyle;
  
  // head 요소에 스타일 요소 추가
  var headElement = document.querySelector('head');
  headElement.appendChild(styleElement);