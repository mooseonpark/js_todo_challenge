const todo = document.querySelector('.todo');
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');

function AddTodo() {
	if (todo.value === '') {
		alert('please type your todo !');
	} else {
		let li = document.createElement('li');
		li.innerHTML = todo.value;
		todoList.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '🗑';
		li.appendChild(span);
	}
	todo.value = '';
	todo.focus();
	saveData();
}

addBtn.addEventListener('click', AddTodo);

todoList.addEventListener('click', function (event) {
	if (event.target.tagName === 'SPAN') {
		event.target.parentElement.remove();
		saveData();
	}
});

function saveData() {
	localStorage.setItem('data', todoList.innerHTML);
}

function showTodo() {
	todoList.innerHTML = localStorage.getItem('data');
}

showTodo();
