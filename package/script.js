let query = (new URLSearchParams(location.search)).get('q');
if (query) {
	query = decodeURIComponent(query);
	const interval = setInterval(() => {
		const input = document.querySelector('#mat-input-0');
		if (input) {
			clearInterval(interval);
			input.value = query;
			input.dispatchEvent(new Event('input'));
			document.querySelector('button.send-button').click();
		}
	}, 500);
}