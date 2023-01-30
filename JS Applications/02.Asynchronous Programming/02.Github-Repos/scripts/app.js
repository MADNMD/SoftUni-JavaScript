function loadRepos() {

	const usernameInput = document.getElementById('username').value;
	const ulElement = document.getElementById('repos');

	fetch(`https://api.github.com/users/${usernameInput}/repos`)
		.then(handleResponse)               //  .then(response => response.json())
		.then(displayRepos)
		.catch(handleError);

	function handleResponse(response) {
		if (response.ok === false) {
			throw new Error(`${response.status}`);
		}
		return response.json();
	}

	function displayRepos(data) {

		ulElement.innerHTML = '';

		for (let repo of data) {

			const liElement = document.createElement('li');
			const aElement = document.createElement('a');
			aElement.href = `${repo.html_url}`;
			aElement.target = '_blank';
			aElement.textContent = `${repo.full_name}`;
			liElement.appendChild(aElement);
			ulElement.appendChild(liElement);
		}
	}
	function handleError(error) {
		ulElement.innerHTML = `Error: ${error}(Not Found)`;
	}
}