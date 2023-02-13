class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250,
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error(`This article model is not included in this gallery!`);
        }

        const article = this.listOfArticles.find(a => a.articleName === articleName);

        if (article !== undefined) {
            article.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {

        const guest = this.guests.find(g => g.guestName === guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            if (personality === 'Vip') {
                this.guests.push({ guestName, points: 500, purchaseArticle: 0 });

            } else if (personality === 'Middle') {
                this.guests.push({ guestName, points: 250, purchaseArticle: 0 });

            } else {
                this.guests.push({ guestName, points: 50, purchaseArticle: 0 });

            }
        }
        return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {

        const name = this.listOfArticles.find(n => n.articleName === articleName);
        const guest = this.guests.find(g => g.guestName === guestName);

        if (name === undefined) {
            throw new Error(`This article is not found.`);
        } else if (name.articleModel !== articleModel) {
            throw new Error(`This article is not found.`);
        }

        if(name.quantity === 0){
            return `The ${articleName} is not available.`;
        }

        if(guest === undefined){
            return `This guest is not invited.`;
        }
        if(guest.points < this.possibleArticles[articleModel]){
            return `You need to more points to purchase the article.`;
        }else{
            guest.points -= this.possibleArticles[articleModel];
            name.quantity--;
            guest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        }
    }
    showGalleryInfo (criteria){

        const resultArticle = ['Articles information:'];
        const resultGuest = ['Guests information:'];

        if(criteria === 'article'){

            this.listOfArticles.forEach(article => {
                resultArticle.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            });
            return resultArticle.join('\n');
        }else if(criteria === 'guest'){
            this.guests.forEach(guest => {
                resultGuest.push(`${guest.guestName} - ${guest.purchaseArticle}`);
            });
            return resultGuest.join('\n');
        }
    }
}






// Input 1---------------------------------------------

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// Output 1 -----------------------------------------------------

//   Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.

// Input 2----------------------------------------------

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// Output 2--------------------------------------

//  You have successfully invited John!
//  You have successfully invited Peter!
//  John has already been invited.


// Input 3--------------------------------------------

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// Output 3 -----------------------------------

//  John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points.
//  This article is not found.


// Input 4 -----------------------------------

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

// Output 4-------------------------------

//  Articles information:
//  picture - Mona Liza - 3
//  item - Ancient vase - 1
//  Guests information:
//  John - 1
//  Peter - 1
