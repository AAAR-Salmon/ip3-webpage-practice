let answer = {};
let radios = document.querySelectorAll('.radio');
window.addEventListener('load', () => {
	if (localStorage.webpagePractice != void(0)) {
		answer = JSON.parse(localStorage.webpagePractice);
	}

	for (var key in answer) {
		if (answer.hasOwnProperty(key)) {
			radios.forEach((v, i) => {
				if (v.dataset.question === key && v.dataset.value === answer[key]) {
					v.dataset.selected = true;
				}
			});
		}
	}

	radios.forEach((v, i) => {
		console.log(i, v.dataset.question, v.dataset.value);
		v.addEventListener('click', () => {
			radios.forEach((w, j) => {
				if (w.dataset.question === v.dataset.question) {
					w.dataset.selected = false;
				}
			});
			v.dataset.selected = true;
			answer[v.dataset.question] = v.dataset.value;
		}, false);
	});
}, false);

window.addEventListener('unload', () => {
	localStorage.webpagePractice = JSON.stringify(answer);
}, false);
