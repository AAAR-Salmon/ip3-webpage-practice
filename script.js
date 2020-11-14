let answer = {};
let radios = document.querySelectorAll('.radio');

function clearAnswer() {
	answer = {};
}

window.addEventListener('load', () => {
	if (localStorage.webpagePractice != void(0)) {
		answer = JSON.parse(localStorage.webpagePractice);
	}

	let radio;
	for (var key in answer) {
		if (answer.hasOwnProperty(key)) {
			radio = document.querySelector(`.radio[data-question='${key}'][data-value='${answer[key]}']`);
			if (radio !== null) {
				radio.dataset.selected = true;
			}
		}
	}

	radios.forEach(v => {
		v.addEventListener('click', () => {
			document.querySelectorAll(`.radio[data-question='${v.dataset.question}']`).forEach(w => {
				w.dataset.selected = false;
			});
			v.dataset.selected = true;
			answer[v.dataset.question] = v.dataset.value;
		}, false);
	});

	document.querySelectorAll('.link-button').forEach(v => {
		v.addEventListener('click', () => {
			location.href = v.dataset.href;
		}, false);
	});
}, false);

window.addEventListener('unload', () => {
	localStorage.webpagePractice = JSON.stringify(answer);
}, false);
