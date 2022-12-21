function getArticleGenerator(input) {

    const articles = input.slice();
    let content = document.getElementById('content');

    return () => {

        if (articles.length > 0) {

            let text = articles.shift();
            let article = document.createElement('article');
            article.textContent = text;
            content.appendChild(article);
        }
    }
}