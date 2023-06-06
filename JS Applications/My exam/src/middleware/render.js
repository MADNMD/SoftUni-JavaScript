import { render } from "../../node_modules/lit-html/lit-html.js";

const root = document.getElementById('site-conteiner');

export function middleware(ctx, next) {
    ctx.render = (content) => render(content, root);

    next();
}