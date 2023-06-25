const clock = document.querySelector('.clock');

function time() {
	const date = new Date();
	const hour = String(date.getHours()).padStart('2', 0);
	const minute = String(date.getMinutes()).padStart('2', 0);
	const seconds = String(date.getSeconds()).padStart('2', 0);
	clock.innerText = `👨‍💻${hour}:${minute}:${seconds}`;
}

time();
setInterval(time, 1000);
