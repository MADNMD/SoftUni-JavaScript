import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums, searchAlbum } from "../api/data.js";
import { getUserData } from "../util.js";

const searchTemplate = (albums, onSearch, params = '', userData) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value=${params}>
        <button class="button-list" @click=${onSearch}>Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">
        ${albums.length === 0
        ? html`<p class="no-result">No result.</p>`
        : html`
        ${albums.map(album => html`
        <div class="card-box">
             <img src=${album.imgUrl}>
             <div>
                 <div class="text-center">
                     <p class="name">Name: ${album.name}</p>
                     <p class="artist">Artist: ${album.artist}</p>
                     <p class="genre">Genre: ${album.genre}</p>
                     <p class="price">Price: $${album.price}</p>
                     <p class="date">Release Date: ${album.releaseDate}</p>
                 </div>
                 ${userData !== null
                ? html`
                <div class="btn-group">
                     <a href="/details/${album._id}" id="details">Details</a>
                 </div>`
                 : null
                }
             </div>
         </div>
        `)}
        `}
    </div>
</section>`;

export async function seacrhPage(ctx) {

    const params = ctx.querystring.split('=')[1];
    // console.log(ctx);
    // console.log(params);
    const userData = await getUserData();
    let albums = [];

    if (params) {
        albums = await searchAlbum(decodeURIComponent(params));
        // console.log(albums);
    } else {
        albums = await getAllAlbums();
    //    console.log(albums);
    }
    ctx.render(searchTemplate(albums, onSearch, params, userData));
    async function onSearch(event) {
        event.preventDefault();

        const search = document.getElementById('search-input').value;

        if (search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search));
        }
    }
}