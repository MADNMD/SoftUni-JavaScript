async function loadCommits() {

    const usernameInput = document.getElementById('username').value;
    const repoInput = document.getElementById('repo').value;
    const ulElement = document.getElementById('commits');

    try {

        const response = await fetch(`https://api.github.com/repos/${usernameInput}/${repoInput}/commits`);

        if (response.ok === false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        ulElement.innerHTML = '';

        for (let commit of data) {

            const liElement = document.createElement('li');
            liElement.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
            ulElement.appendChild(liElement);
        }
    } catch (error) {
        ulElement.innerHTML = `Error: ${error.message}(Not Found)`;
    }
}