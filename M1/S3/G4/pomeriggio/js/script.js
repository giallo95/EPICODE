


function numberGenerator (){

    const tabellone = document.querySelector(".tabellone")

    for(let i = 1; i <= 90; i++){
        const num = document.createElement('div')
        num.classList.add('numTab');
        num.innerText = i;
        tabellone.append(num)
    
    }
    return tabellone

}

numberGenerator()




function randomNumberGenerator(){

    return Math.floor(Math.random() * (90 - 1 + 1)) + 1;

}



const btn = document.querySelector('.btn')
const btnEst = document.querySelector('.btn-est') 
const allNumbers =document.querySelectorAll('.n-est')


function bottone(){

    btn.addEventListener('click', () =>  {
        const child = btnEst.querySelector('.n-est')
        
        if(child){
            child.innerText = randomNumberGenerator();
            
        }else{
        
            const nRandom = document.createElement('div');
        nRandom.classList.add('n-est');
        nRandom.innerText = randomNumberGenerator()
        
        btnEst.appendChild(nRandom)}
    })

    
}
bottone()






