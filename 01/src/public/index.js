import { createElement, render } from './library.js'

const links = []
links.push(createElement("a", { class: "link", href: "/" }, ["Start"]))
links.push(createElement("a", { class: "link", href: "/ourteam" }, ["About us"]))
links.push(createElement("a", { class: "link", href: "/contact" }, ["Contact us"]))
const header = createElement("header",{ id: "mainHeader", class: "main-header header" }, links)
render(header,"root")

const article = (title, content = '', imgSrc = '')=>`
    <article class="container-article">
        <div>
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
        <div>
            <img src="${imgSrc}" />
        </div>
    </article>
`
document.getElementById("root").innerHTML += article('Marketing')
