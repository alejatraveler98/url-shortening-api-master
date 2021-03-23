const mainToggle = document.getElementById('main-toggle')
const mainHeader = document.getElementById('main-header__content')
const buttonLink = document.getElementById('buttonLink')
const linksForm = document.getElementById('links-form')
const templateLinks = document.getElementById('template-links')
const inputLink = document.getElementById('frmLink')
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
    getLink(inputLink.value);
    
})


const getLink = (value) =>{
    let url = value
    let dataLink;
    console.log(`${api}${url}`);
    fetch(`${api}${url}`)
    .then ((rest) => rest.json())
    .then ((data) => {
        dataLink = data; 
        printLink(dataLink)  
    })
    .catch(error => console.log(error))    
}

const printLink = ({result} = getLink) =>{
    const {code,short_link,original_link} = result;
    const nodeTemplate = templateLinks.content.cloneNode(true)
    nodeTemplate.querySelector('.items__links').textContent = original_link
    nodeTemplate.querySelector('.items__copy').textContent = short_link
    nodeTemplate.getElementById('buttonLink').dataset.id = code;
    document.querySelector('.content').appendChild(nodeTemplate)
}

