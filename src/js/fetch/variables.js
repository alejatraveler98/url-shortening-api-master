const api = 'https://api.shrtco.de/v2/shorten?url=';
const mainToggle = document.getElementById('main-toggle')
const mainHeader = document.getElementById('main-header__content')
const buttonLink = document.getElementById('buttonLink')
const linksForm = document.getElementById('links-form')
const templateLinks = document.getElementById('template-links')
const inputLink = document.getElementById('frmLink')
// const regex = 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)';
// const regex =new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)');

const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
let   links = document.querySelector('#linksItems');
let   mediaQuery = window.matchMedia("(min-width:960px)");


export {
    api,
    mainToggle,
    mainHeader,
    buttonLink,
    linksForm,
    templateLinks,
    inputLink,
    links,
    mediaQuery,
    regex
};