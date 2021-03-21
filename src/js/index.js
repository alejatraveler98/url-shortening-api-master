const mainToggle = document.getElementById('main-toggle')
const mainHeader = document.getElementById('main-header__content')
const buttonLink = document.getElementById('buttonLink')
const linksForm = document.getElementById('links-form')
const api = 'https://api.shrtco.de/v2/shorten?url='
let mediaQuery = window.matchMedia("(min-width:960px)");
mainToggle.addEventListener('click', () => {
    mainHeader.classList.toggle('display-block')
    document.body.classList.toggle('overflow-hidden')
});

mediaQuery.addEventListener('change', e => {
    console.log(e)
    if (e.matches) {
        mainHeader.classList.remove('display-block')
    }
})

linksForm.addEventListener('submit', e =>{
    e.preventDefault();
    getLink();
})


const getLink = () =>{
    let url = ''
    fetch(`${api}${url}`)
    .then ((rest) => rest.json())
    .then ((data) => console.log(data))
    .catch(error => console.log(error))
}