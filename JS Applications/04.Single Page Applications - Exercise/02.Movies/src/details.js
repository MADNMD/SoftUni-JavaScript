import { showView } from "./util.js";
import { homePage } from "./home.js";

const detailSection = document.getElementById('movie-example');
const user = JSON.parse(sessionStorage.getItem('userData')); // взимаме логнатия user ;
// console.log(user);

export function detailPage(id) {
    showView(detailSection);
    displayMovie(id); // показваме детайлите на филма който сме натиснали;
}

async function displayMovie(id) {

    // const movie = await getMovie(id);
    const [movie, likes, ownLike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id, user)
    ]);

    detailSection.replaceChildren(createMovieCard(movie, likes, ownLike));
}

function createMovieCard(movie, likes, ownLike) {
    // console.log(movie);
    const isOwner = user && user.id === movie._ownerId; // проверяваме дали имаме user посе сравняваме дали id-то на user е еднакво с id-то
    // на филма който е кликнато и ни връща ture или false;

    const divContainer = document.createElement('div');
    divContainer.className = 'container';

    const divInfo = document.createElement('div');
    divInfo.className = 'row bg-light text-dark';

    const h1 = document.createElement('h1');
    h1.textContent = `Movie title: ${movie.title}`;
    divInfo.appendChild(h1);

    const divImg = document.createElement('div');
    divImg.className = 'col-md-8';

    const img = document.createElement('img');
    img.className = 'img-thumbnail';
    img.src = movie.img;
    img.alt = 'Movie';
    divImg.appendChild(img);
    divInfo.appendChild(divImg);


    const divDescription = document.createElement('div');
    divDescription.className = 'col-md-4 text-center';

    const h3 = document.createElement('h3');
    h3.className = 'my-3';
    h3.textContent = 'Movie Description';
    divDescription.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = movie.description;
    divDescription.appendChild(p);

    if (isOwner) { // правим проверка ако е ture  съзадаваме бутоните  delete и edit;
        const aDeleteBtn = document.createElement('a');
        aDeleteBtn.className = 'btn btn-danger';
        aDeleteBtn.dataset.id = movie._id;
        aDeleteBtn.href = '#';
        aDeleteBtn.textContent = 'Delete';
        aDeleteBtn.addEventListener('click', onDelete);

        const aEditBtn = document.createElement('a');
        aEditBtn.className = 'btn btn-warning';
        aEditBtn.dataset.id = movie._id;
        aEditBtn.href = '#';
        aEditBtn.textContent = 'Edit';

        divDescription.appendChild(aDeleteBtn);
        divDescription.appendChild(aEditBtn);

    } else { // ako e false създаваме бутоните на like;
        const aLikeBtn = document.createElement('a');
        aLikeBtn.className = 'btn btn-primary';
        aLikeBtn.href = '#';
        aLikeBtn.textContent = 'Like';
        aLikeBtn.addEventListener('click', (event) => likeMovie(event, movie))

        const span = document.createElement('span');
        span.className = 'enrolled-span';
        span.textContent = `Liked ${likes}`;

        divDescription.appendChild(aLikeBtn);
        divDescription.appendChild(span);
    }

    divInfo.appendChild(divDescription);
    divContainer.appendChild(divInfo);

    return divContainer;
}

async function getMovie(id) {

    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const data = await response.json();

    return data;
}

async function getLikes(id) {

    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const likes = await response.json();

    return likes;
}

async function getOwnLike(movieId, user) {

    if (!user) {

        return false;

    } else {

        const userId = user.id;
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
        const like = await response.json();

        return like.length > 0;
    }
}

async function likeMovie(event, movie) {
    event.preventDefault();

    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.token,
        },
        body: JSON.stringify(movie)
    }

    await fetch(`http://localhost:3030/data/likes`, option);

    detailPage(movie);
}

// async function onDelete(event) {

//     const id = event.target.dataset.id;
   

//     deleteMovie(id);
// }

// async function deleteMovie(id) {

//     const option = {
//         method: 'delete',
//         headers: {
//             'X-Authorization': user.token,
//         }
//     }
//     const response = await fetch(`http://localhost:3030/data/${id}`, option);

//     return response

// }