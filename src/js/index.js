//Variables
import getLink from './fetch/fetch.js'
import {animationsOff,animationError} from './ui.js'
import {
    mainToggle,
    mainHeader,
    buttonLink,
    linksForm,
    templateLinks,
    inputLink,
    links,
    mediaQuery,
    regex
} from './fetch/variables.js'

//Functions
const copyText = (e) =>{
    const selectText = e.target.parentElement.firstElementChild.textContent
        console.log(e.target.parentElement.firstElementChild.textContent);
        navigator.clipboard.writeText(selectText).then(function() {
            e.target.textContent= 'Copied';
            e.target.style.background =  getComputedStyle(document.documentElement).getPropertyValue('--dark-violet')
            linksForm.reset()
            setTimeout(() => {
                e.target.textContent = 'Copy'
                e.target.style.background = getComputedStyle(document.documentElement).getPropertyPriority('--cyan')
            }, 3000);
          }, function(err) {
            console.error('Could not copy text ', err);
    });
    
}

const printLink = ({result} = getLink) =>{
    const {code,short_link,original_link} = result;
    const nodeTemplate = templateLinks.content.cloneNode(true)
    nodeTemplate.querySelector('.items__links').textContent = original_link
    nodeTemplate.querySelector('.items__copy').textContent = short_link
    nodeTemplate.getElementById('buttonLink').dataset.id = code;
    document.querySelector('.content').appendChild(nodeTemplate)
}



//Listeners 
mediaQuery.addEventListener('change', e => {
    console.log(e)
    if (e.matches) {
        mainHeader.classList.remove('display-block')
    }
})

mainToggle.addEventListener('click', () => {
    mainHeader.classList.toggle('display-block')
    document.body.classList.toggle('overflow-hidden')
});


linksForm.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(inputLink.value);
    const value = inputLink.value;
    if(inputLink.value === '' ){
        animationError();
    }
    if(value.length > 1  && value.match(regex)){
        getLink(inputLink.value)
        .then(data =>{
        console.log(data)
        printLink(data)  
        animationsOff()
        })  

    }else{
        console.log('No es un link');
    }
})



links.addEventListener('click', e=>{
    console.log(e.target);
    const button = e.target.classList.contains('items-button')
    if(e.target.classList.contains('items-button')){
        copyText(e);
    }
})



