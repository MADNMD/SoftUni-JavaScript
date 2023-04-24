import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../app.js';

const root = document.getElementById('main-content');

export function middleware(ctx,  next){
    ctx.render = (content) => render(content, root);
    // ctx.navigationView = navigationView();

    next();
}