async function attachEvents() {

    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);

    async function displayPost() {

        const selectedId = document.getElementById('posts').value;

        const [post, comments] = Promise.all([
            getPostId(selectedId),
            getCommentsByPostId(selectedId)
        ]);

        const h1Title = document.getElementById('post-title');
        h1Title.textContent = post.title;

        const postBody = document.getElementById('post-body');
        postBody.textContent = post.body;

        const postComments = document.getElementById('post-comments');
        postComments.replaceChildren();

        comments.forEach(comment => {
            const liElement = document.createElement('li');
            liElement.textContent = comment.text;
            postComments.appendChild(liElement);
        });
    }

    async function getAllPosts() {

        const response = await fetch(`http://localhost:3030/jsonstore/blog/posts`);
        const data = await response.json();

        const selectPosts = document.getElementById('posts');
        selectPosts.replaceChildren();

        Object.values(data).forEach(post => {
            const optionElement = document.createElement('option');
            optionElement.text = post.title;
            optionElement.value = post.id;

            selectPosts.appendChild(optionElement);
        })
    }

    async function getPostId(postId) {

        const response = await fetch(`http://localhost:3030/jsonstore/blog/posts/${postId}`);
        const data = await response.json();

        return data;

    }

    async function getCommentsByPostId(postId) {

        const response = await fetch(`http://localhost:3030/jsonstore/blog/comments`);
        const data = await response.json();

        const comments = Object.values(data).filter(comment => comment.postId === postId);

        return comments;
    }

}
attachEvents();