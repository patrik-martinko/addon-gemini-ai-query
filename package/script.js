let query = (new URLSearchParams(location.search)).get('q');
if (query) {
	query = decodeURIComponent(query);
	let interval = setInterval(() => {
		const input = document.querySelector('rich-textarea p');
		if (input) {
			clearInterval(interval);
			input.textContent = query;
			setTimeout(() => {
				document.querySelector('button[aria-label="Send message"]').click();
			}, 1000);
		}
	}, 500);
}