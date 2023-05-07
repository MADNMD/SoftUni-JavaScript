import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMemes, userProfile } from "../api/data.js";
import { getUserData } from "../util/util.js";

const myMemesTemplate = (userData, myMemes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        ${userData.gender === 'male'
        ? html`<img id="user-avatar-url" alt="user-profile" src="/images/male.png">`
        : html`<img id="user-avatar-url" alt="user-profile" src="/images/female.png">`}
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${myMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${myMemes.length === 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : myMemes.map(meme => html`
        <div class="user-meme">
            <p class="user-meme-title">${meme.title}</p>
            <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>`)}
    </div>
</section>`;

export async function myMemesPage(ctx) {


    const userData = getUserData();
    const myMemes = await userProfile(userData.id);
   
    // const allMemes = await getAllMemes();
    // const myMemes = allMemes.filter(meme => meme._ownerId === userData.id);
 
    // console.log(myMemes);
    // console.log(userData);
    ctx.render(myMemesTemplate(userData, myMemes));
}