
function navScroll(){
    const blackLink= document.querySelector('#bl')
    const header= document.querySelector('header')
    const main= document.querySelector('main')
    let mainHeight= main.offsetHeight

    if(scrollY > mainHeight){
        if(header.classList.contains('yellow-background')){
            header.classList.remove('yellow-background')
        }
        if(blackLink.classList.contains('black-link')){
            blackLink.classList.remove('black-link')
        }
        header.classList.add('white-background')
        blackLink.classList.add('greenlink')
    }else{
        if(header.classList.contains('white-background')){
            header.classList.remove('white-background')
        }
        if(blackLink.classList.contains('greenlink')){
            blackLink.classList.remove('greenlink')
        }
        header.classList.add('yellow-background')
        blackLink.classList.add('black-link')
    }
}

window.addEventListener('scroll', navScroll)
