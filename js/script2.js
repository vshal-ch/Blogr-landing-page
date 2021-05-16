let image=document.querySelector('.sec:nth-child(1) .image-container>img');
let image2= document.querySelector('.sec:nth-child(3) .image-container>img');

if(window.innerWidth<768){
    image.setAttribute('src','./images/illustration-editor-mobile.svg');
    image2.setAttribute('src','./images/illustration-laptop-mobile.svg');
}
else if(window.innerWidth>=768){
    image.setAttribute('src','./images/illustration-editor-desktop.svg');
    image2.setAttribute('src','./images/illustration-laptop-desktop.svg');
}

window.addEventListener('resize',()=>{
    
    if(window.innerWidth<768){
        image.setAttribute('src','./images/illustration-editor-mobile.svg');
        image2.setAttribute('src','./images/illustration-laptop-mobile.svg');
    }
    else if(window.innerWidth>=768){
        image.setAttribute('src','./images/illustration-editor-desktop.svg');
        image2.setAttribute('src','./images/illustration-laptop-desktop.svg');
    }
})