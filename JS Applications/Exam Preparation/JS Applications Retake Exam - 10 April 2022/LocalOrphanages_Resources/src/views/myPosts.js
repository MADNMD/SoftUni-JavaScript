import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyPostById } from '../api/data.js';
import { getUserData } from '../util.js';

const myPostTempleate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    <div class="my-posts">
        ${posts.length === 0
        ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
        : posts.map(post => html`
        <div class="post">
            <h2 class="post-title">${post.title}</h2>
            <img class="post-image" src=${post.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${post._id}" class="details-btn btn">Details</a>
            </div>
        </div>`)}
    </div>
</section>`;

export async function myPostPage(ctx) {

    const userData = getUserData();
    const postId = userData.id;
    const myPosts = await getMyPostById(postId);
    //   console.log(myPosts);
    ctx.render(myPostTempleate(myPosts));
}