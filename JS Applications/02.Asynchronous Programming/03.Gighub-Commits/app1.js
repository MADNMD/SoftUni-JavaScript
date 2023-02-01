function loadCommits() {

    const usernameInput = document.getElementById('username').value;
    const repoInput = document.getElementById('repo').value;
    const ulElement = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${usernameInput}/${repoInput}/commits`)
        .then(handleResponse)
        .then(displayCommits)
        .catch(handleError)

    function handleResponse(response) {
        if (response.ok === false) {
            throw new Error(`${response.status}`);
        }
        return response.json();
    }

    function displayCommits(data) {

        ulElement.innerHTML = '';

        for (let commit of data) {
            const liElement = document.createElement('li');
            liElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
            ulElement.appendChild(liElement);
        }
    }

    function handleError(error) {
        ulElement.innerHTML = `Error: ${error.message}(Not Found)`;
    }

}