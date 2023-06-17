// const http = require('http');
// const fs = require('fs/promises');
// const querystring = require('querystring');
// const { renderHome } = require('./render');
// // const cats = require('./cats.json'); по този начин commonJS module директроно връща масив и не нужно JSON.parse;
// const port = 5000;

// const server = http.createServer(async (req, res) => {
//     const [pathname, qs] = req.url.split('?');
//     const params = querystring.parse(qs);

//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });

//     if (req.url == '/style/site.css') {
//         res.writeHead(200, {
//             'Content-Type': 'text/css'
//         });

//         const siteCSS = await fs.readFile('./style/site.css', 'utf-8');
//         res.write(siteCSS);

//     } else if (req.url == '/cats/add-cat') {

//         const createCatPage = await fs.readFile('./views/createCat.html', 'utf-8');
//         res.write(createCatPage);

//     } else if (req.url == '/cats/add-breed') {

//         const createBreedPage = await fs.readFile('./views/createBreed.html', 'utf-8');
//         res.write(createBreedPage);

//     } else {
//         const homePage = await renderHome(params.name)
//         res.write(homePage);
//     }

//     res.end();
// });
// server.listen(port, () => console.log(`Server is listening in port ${port}...`));