const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGM3OTJkN2IxMTAwMTkwZTZlMDAiLCJpYXQiOjE3MDk4OTA2ODEsImV4cCI6MTcxMTEwMDI4MX0.zpnnE9-zBp1TwVo3dSzkY2duruLpt4kKmprB79lcLes";


window.onload = function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');


    fetch(`${apiUrl}/${productId}`, {
        method: 'GET',
        headers: {
            Authorization: accessToken
        }
    })
    .then(response => response.json())
    .then(product => {
        console.log(product)
        
        let container = document.querySelector('.container')

        let name = container.querySelector('.name')
        name.innerText = product.name

        let brand = container.querySelector('.brand')
        brand.innerText = product.brand

        let description = container.querySelector('.description')
        description.innerText = product.description

        let price = container.querySelector('.price')
        price.innerText = product.price


        let image = container.querySelector('.image')
        image.src = product.image
  
        
    })
    .catch(error => console.error('Errore durante il recupero delle informazioni del prodotto:', error));
};

