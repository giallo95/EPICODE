fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method:'GET',
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGM3OTJkN2IxMTAwMTkwZTZlMDAiLCJpYXQiOjE3MDk4OTA2ODEsImV4cCI6MTcxMTEwMDI4MX0.zpnnE9-zBp1TwVo3dSzkY2duruLpt4kKmprB79lcLes"
}
})

const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGM3OTJkN2IxMTAwMTkwZTZlMDAiLCJpYXQiOjE3MDk4OTA2ODEsImV4cCI6MTcxMTEwMDI4MX0.zpnnE9-zBp1TwVo3dSzkY2duruLpt4kKmprB79lcLes";

async function chiamata(){

    
    return await fetch(apiUrl, {
        method: 'GET',
        headers: {
            Authorization: accessToken
        }
    })
    .then(dati => dati.json())}

        chiamata('products').then(products => {

    products.forEach(product => {
                
        let card = generaClone()

        let name = card.querySelector('.name')
        name.innerText = product.name

        let price = card.querySelector('.price')
        price.innerText = product.price

        let image = card.querySelector('.image')
        image.src = product.image
        
        
        let bottone = card.querySelector('.details')
        bottone.addEventListener('click',()=>{
           const productId = product._id;
           window.location.href = `details.html?productId=${productId}`;
        })

        
        document.querySelector('#container').appendChild(card)
        console.log(product);
    });


})


function generaClone(){
    
    let template = document.querySelector('#templateCard')
    let clone = template.content.cloneNode(true)

    return clone;
}


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGM3OTJkN2IxMTAwMTkwZTZlMDAiLCJpYXQiOjE3MDk4OTA2ODEsImV4cCI6MTcxMTEwMDI4MX0.zpnnE9-zBp1TwVo3dSzkY2duruLpt4kKmprB79lcLes