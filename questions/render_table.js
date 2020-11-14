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
		},
		"2-A": {
			"sentence": "OSは(A)管理の機能を備えており、アプリケーションの要求に応じて適切に(A)領域を確保する。",
			"answer": "メモリ"
		},
		"2-B": {
			"sentence": "64ビット版のOSでは64ビットの数値で(A)上の位置を示すことが多く、理論上は約(B)GBの(A)を利用できる。",
			"answer": "約172億"
		},
		"2-C": {
			"sentence": "またOSは、マウス、キーボードやプリンタのようなデバイスをプログラムから簡単に操作するための(C)を提供する。",
			"answer": "API"
		}
	};
	for (var k in questions) {
		let table = document.getElementById('answer-table');
		table.innerHTML += `<tr>
			<td>${k}</td>
			<td>${questions[k].sentence}</td>
			<td class="youranswer" data-iscorrect="${answer[k] === questions[k].answer}">${answer[k] !== void(0) ? answer[k] : '-'}</td>
			<td>${questions[k].answer}</td>
		</tr>`;
	}
}, false);
