const fs = require('fs/promises');

const catTemplate = (cat) =>
    `<li>
    <img src="${cat.imageUrl}" alt="Black Cat">
    <h3>${cat.name}</h3>
    <p><span>Breed: </span>${cat.breed}</p>
    <p><span>Description: </span>${cat.description}</p>
    <ul class="buttons">
        <li class="btn edit"><a href="/cats/edit-cat">Change Info</a></li>
        <li class="btn delete"><a href="">New Home</a></li>
    </ul>
</li>`;

async function renderHome(search) {
    const homePage = await fs.readFile('./views/home.html', 'utf-8');
    const catsResult = await fs.readFile('./cats.json');
    const cats = JSON.parse(catsResult);

    const catsPageResult = cats
        .filter(cat => search
            ? cat.name.toLowerCase().startsWith(search.toLowerCase())
            : true)
        .map(cat => catTemplate(cat)).join('');
    const homePageResult = homePage.replace('{{cats}}', catsPageResult);
    return homePageResult;
}

exports.renderHome = renderHome;