import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllShoes, searchShoes } from '../api/data.js';
import { getUserData } from '../util.js';

const searchTempleate = (shoes, onSearch, params = '',userData) => html`
<section id="search">
    <h2>Search by Brand</h2>
    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" .value=${params} placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${shoes.length === 0
        ? html`<h2>There are no results found.</h2>`
        : html`
        ${shoes.map(item => html`
        <ul class="card-wrapper">
              <li class="card">
                 <img src=${item.imageUrl} alt="travis" />
                   <p>
                      <strong>Brand: </strong><span class="brand">${item.brand}</span>
                  </p>
                   <p>
                       <strong>Model: </strong><span class="model">${item.model}</span>
                   </p>
                   <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
                   ${userData !== null
                    ? html`<a class="details-btn" href="/details/${item._id}">Details</a>`
                    : null}
                    <!-- <a class="details-btn" href="/details/${item._id}">Details</a> -->
             </li>
         </ul> 
        `)}
        ` 
        }
        <!-- Display an h2 if there are no posts -->
        <!-- <h2>There are no results found.</h2> -->
    </div>
</section>`;

export async function searchPage(ctx){
    
    const params = ctx.querystring.split('=')[1];
    const userData = await getUserData();
    // console.log(userData);
    // console.log(params);
    let shoes = [];
    
    if(params){
        shoes = await searchShoes(decodeURIComponent(params));
        // console.log(shoes);
    }else{
        shoes = await getAllShoes();
        // console.log(shoes);
    }
    ctx.render(searchTempleate(shoes, onSearch, params,userData));

    function onSearch(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        
        const search = formData.get('search');
        // console.log(search);
        if(search){
            ctx.page.redirect('/search?query=' + encodeURIComponent(search));
        }
    }
}