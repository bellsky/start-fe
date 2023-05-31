// DOM 요소 선택
const newTaskForm = document.querySelector('.new-task');
const newTaskInput = document.querySelector('.new-task input');
const taskList = document.querySelector('ul');

// 할일 목록 배열
let tasks = [];

// 할일 항목 추가 함수
function addTask(text) {
  // 새로운 할일 객체 생성
  const task = {
    id: Date.now(),
    text: text,
    completed: false
  };

  // 배열에 할일 추가
  tasks.push(task);

  // 할일 항목을 표시하는 함수 호출
  displayTasks();
}

// 할일 항목 표시 함수
function displayTasks() {
  // 기존의 할일 항목들을 삭제
  taskList.innerHTML = '';

  // 할일 항목을 돌면서 HTML 생성
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.innerHTML = `
      <button class="delete">×</button>
      <input type="checkbox" class="toggle-checked">
      <span class="text">${task.text}</span>
    `;

    // 완료된 할일인 경우에는 클래스 추가
    if (task.completed) {
      li.classList.add('checked');
    }

    taskList.appendChild(li);
  });
}

// 할일 항목 삭제 함수
function deleteTask(id) {
  // 해당 id를 가진 할일을 배열에서 제거
  tasks = tasks.filter(task => task.id !== id);

  // 할일 항목을 표시하는 함수 호출
  displayTasks();
}

// 할일 항목 체크 여부 업데이트 함수
function updateTaskCompletion(id, completed) {
  // 해당 id를 가진 할일의 completed 속성 업데이트
  tasks.forEach(task => {
    if (task.id === id) {
      task.completed = completed;
    }
  });

  // 할일 항목을 표시하는 함수 호출
  displayTasks();
}

// 폼 제출 이벤트 핸들러
newTaskForm.addEventListener('submit', event => {
  event.preventDefault();
  
  const text = newTaskInput.value.trim();

  if (text !== '') {
    addTask(text);
    newTaskInput.value = '';
  }
});

// 할일 항목 삭제 버튼 클릭 이벤트 핸들러
taskList.addEventListener('click', event => {
  if (event.target.classList.contains('delete')) {
    const li = event.target.closest('li');
    const id = li.dataset.id;
    deleteTask(parseInt(id));
  }
});

// 할일 항목 체크박스 변경 이벤트 핸들러
taskList.addEventListener('change', event => {
  if (event.target.classList.contains('toggle-checked')) {
    const li = event.target.closest('li');
    const id = li.dataset.id;
    const completed = event.target.checked;
    updateTaskCompletion(parseInt(id), completed);
  }
});

// 초기 할일 항목 표시
displayTasks();
addTask("JS공부하기");