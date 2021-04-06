const  animationsOff = () =>{
    document.querySelector('.sk-cube-grid').style.display = 'none';
    document.querySelector('.btnSubmit').style.display = 'block';

}

const animationsOn = () =>{
    document.querySelector('.sk-cube-grid').style.display = 'block';
    document.querySelector('.frm').classList.add('frm__width');
    document.querySelector('.btnSubmit').style.display = 'none';
}

const animationError = () =>{
    document.getElementById('frmError').classList.add('frmError--active');
    document.getElementById('frmLink').classList.add('frmLink--errorActive');

    setTimeout(() => {
        document.getElementById('frmError').classList.remove('frmError--active');
        document.getElementById('frmLink').classList.remove('frmLink--errorActive');
        document.querySelector('.frm').classList.remove('frm__width');   
    }, 3000);
}

export {animationsOff,animationsOn,animationError}