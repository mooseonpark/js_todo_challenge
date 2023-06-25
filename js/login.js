const input = document.querySelector('input');
const loginBtn = document.querySelector('.name');
const resetBtn = document.querySelector('.reset');
const login = document.querySelector('.login');
const h1 = document.createElement('h1');

if (localStorage.getItem('name')) {
	h1.innerText = `Have a nice day, ${localStorage.getItem('name')}  !`;
	login.appendChild(h1);
} else {
	h1.innerText = 'type your name above 🖱';
	login.appendChild(h1);
}

function setName() {
	input.value === ''
		? alert('type your name please  !')
		: (h1.innerText = `Have a nice day, ${input.value}  !`);
	login.appendChild(h1);
	localStorage.setItem('name', input.value);
	input.value = '';
}

function reset() {
	localStorage.removeItem('name');
	location.reload();
}

loginBtn.addEventListener('click', setName);
resetBtn.addEventListener('click', reset);
