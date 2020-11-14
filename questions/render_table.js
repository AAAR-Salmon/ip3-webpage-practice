window.addEventListener('load', () => {
	const questions = {
		"1-1": {
			"sentence": "公開鍵暗号方式で暗号化してBさんからAさんにデータを送るとき、暗号化に用いるのはAさんの秘密鍵である。",
			"answer": "x"
		},
		"1-2": {
			"sentence": "公衆無線LANでも、パスワードで暗号化されているならば通信を傍受される心配はない。",
			"answer": "x"
		},
		"1-3": {
			"sentence": "SSL/TLSで暗号化して送信されたメールであっても、SSL/TLSに対応していないプロトコルで受信できる。",
			"answer": "o"
		}
	};
	for (var k in questions) {
		let table = document.getElementById('answer-table');
		table.innerHTML += `<tr>
			<td>${k}</td>
			<td>${questions[k].sentence}</td>
			<td>${answer[k] !== void(0) ? answer[k] : '-'}</td>
			<td>${questions[k].answer}</td>
		</tr>`;
	}
}, false);
