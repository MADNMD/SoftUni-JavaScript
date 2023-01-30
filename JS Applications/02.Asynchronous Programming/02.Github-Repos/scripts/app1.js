async function loadRepos() {

	const usernameInput = document.getElementById("username").value;
	const ulElement = document.getElementById("repos");

	try {
		const response = await fetch(`https://api.github.com/users/${usernameInput}/repos`);

		if(response.ok === false){
			throw new Error(`${response.status} ${response.statusText}`);
		}

		const data = await response.json();
		
		ulElement.innerHTML = '';

		for(let repo of data){
			const liElement = document.createElement('li');
			const aElement = document.createElement('a');
			aElement.href = `${repo.html_url}`;
			aElement.target = '_blank';
			aElement.textContent = `${repo.full_name}`;
			liElement.appendChild(aElement);
			ulElement.appendChild(liElement);
		}
	} catch (error){
		ulElement.innerHTML = `${error}(Not Found)`;
	}
}