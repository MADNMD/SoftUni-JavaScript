import { html } from "../../node_modules/lit-html/lit-html.js";
import { userProfilePage } from "../api/data.js";
import { getUserData } from "../util/util.js";

const profileTemplate = (userData, profileData) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${userData.email}</h2>
    </div>
    <div class="board">
        ${profileData.length === 0
        ? html`<div class="no-events">
            <p>This user has no events yet!</p>
        </div>`
        : profileData.map(profile => html`
        <div class="eventBoard">
            <div class="event-info">
                <img src=${profile.imageUrl}>
                <h2>${profile.title}</h2>
                <h6>${profile.date}</h6>
                <a href="/details/${profile._id}" class="details-button">Details</a>
            </div>
        </div>`)}
    </div>
</section>`;

export async function profilePage(ctx) {
    const userData = getUserData();
    const userProfile = await userProfilePage(userData.id);
    ctx.render(profileTemplate(userData, userProfile));
}