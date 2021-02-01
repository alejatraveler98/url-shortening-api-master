const mainToggle = document.getElementById('main-toggle')
const mainHeader = document.getElementById('main-header__content')
let   mediaQuery = window.matchMedia("(min-width:960px)");

mainToggle.addEventListener('click',()=>{
    mainHeader.classList.toggle('display-block')
    document.body.classList.toggle('overflow-hidden')
});

mediaQuery.addEventListener('change',e =>{
    console.log(e)
    if(e.matches){
        mainHeader.classList.remove('display-block')
    }
})

