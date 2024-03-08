const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGM3OTJkN2IxMTAwMTkwZTZlMDAiLCJpYXQiOjE3MDk4OTA2ODEsImV4cCI6MTcxMTEwMDI4MX0.zpnnE9-zBp1TwVo3dSzkY2duruLpt4kKmprB79lcLes";


let addP = document.getElementsByClassName('addP')[0];

addP.addEventListener('click', function(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let description = document.querySelector('#description').value;
    let brand = document.querySelector('#brand').value;
    let imageUrl = document.querySelector('#imageUrl').value;
    let price = document.querySelector('#price').value;

    let product = {
        name,
        description,
        brand,
        imageUrl,
        price
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Authorization": accessToken
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(res => { 
        //location.href = 'index.html';
    });
});


/*  
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method:'POST',
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGM3OTJkN2IxMTAwMTkwZTZlMDAiLCJpYXQiOjE3MDk4OTA2ODEsImV4cCI6MTcxMTEwMDI4MX0.zpnnE9-zBp1TwVo3dSzkY2duruLpt4kKmprB79lcLes"
    }
    }) 
*/